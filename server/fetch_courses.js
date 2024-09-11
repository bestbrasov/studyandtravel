const { sql } = require('@vercel/postgres');
const axios = require('axios');
const { cron } = require('node-cron');

require('dotenv').config({ path: '../.env.development.local' });

// Fetch courses and insert into Vercel PostgreSQL database
function fetchCourses() {
  console.log('Fetching courses...');

  // Truncate the table before inserting new data
  sql`TRUNCATE TABLE cursuri`
    .then(() => {
      // Fetch the course data from the external source
      return axios.get("https://best.eu.org/courses/list.jsp");
    })
    .then(response => {
      const sursa = response.data;
      const cursuri = sursa.split("</tr>").filter(row => row.includes("<td>"));

      // Create an array of promises for processing each course
      const promises = cursuri.map(cursHtml => {
        const curs = {};
        const continut = cursHtml.split("</td>");

        curs.cod = extractData(continut[0], 'activity=', '"');
        curs.titlu = stripTags(continut[0]);
        curs.tip = stripTags(continut[3]);
        curs.pret = stripTags(continut[5]);

        // Fetch event details for the course
        return axios.get(`https://best.eu.org/event/details.jsp?activity=${curs.cod}`)
          .then(eventResponse => {
            const event = eventResponse.data;
            curs.descriere = extractData(event, '<h2>General description</h2>', '<h2> Academic information </h2>').trim();
            curs.locatie = extractData(event, '<strong>Place:</strong> ', '</li>').trim();
            curs.perioada = extractData(event, '<strong>Dates:</strong>', '</li>').trim();
            const appdateString = extractData(event, '<strong>Application until:</strong> ', ' CE').replace('at ', '').trim();
            curs.appdate = new Date(appdateString).getTime();

            // Log appdate values for debugging
            console.log('Original appdate string:', appdateString);
            console.log('Parsed appdate timestamp:', curs.appdate);

            // Replace invalid appdate with a default value
            if (isNaN(curs.appdate)) {
              console.error(`Invalid appdate value for course ${curs.cod}: ${appdateString}. Using default timestamp 0.`);
              curs.appdate = 0; // You can replace 0 with any default timestamp value
            }

            // Replace English month names with Romanian equivalents
            const derep = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const curep = ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"];

            derep.forEach((month, i) => {
              curs.perioada = curs.perioada.replace(new RegExp(month, 'g'), curep[i]);
            });

            // Fetch location details (LBG data)
            const lbgUrl = `https://best.eu.org/aboutBEST/structure/lbgView.jsp?lbginfo=${extractData(event, '<a href="/aboutBEST/structure/lbgView.jsp?lbginfo=', '">')}`;
            return axios.get(lbgUrl)
              .then(lbgResponse => {
                const lbgContent = lbgResponse.data;

                curs.oras = extractData(lbgContent, '<b>University:</b>', '<br/>').split(',').pop().trim();
                curs.tara = extractData(lbgContent, '<b>University:</b>', '<br/>').split(',').slice(-2, -1)[0].trim();

                // Insert the data into the PostgreSQL table on Vercel
                if (curs.oras && curs.tara) {
                  return sql`
                    INSERT INTO cursuri (appdate, cod, titlu, tip, pret, descriere, locatie, perioada, oras, tara)
                    VALUES (${curs.appdate}, ${curs.cod}, ${curs.titlu}, ${curs.tip}, ${curs.pret}, ${curs.descriere}, ${curs.locatie}, ${curs.perioada}, ${curs.tara}, ${curs.oras})
                  `;
                }
              })
              .catch(error => {
                console.error(`Error fetching LBG data for course ${curs.cod}:`, error);
              });
          })
          .catch(error => {
            console.error(`Error fetching event details for course ${curs.cod}:`, error);
          });
      });

      // Wait for all course details to be processed
      return Promise.all(promises);
    })
    .then(() => {
      console.log('All courses processed successfully.');
    })
    .catch(err => {
      console.error('Error fetching or inserting courses:', err);
    });
}

// Helper functions to process HTML
function extractData(string, start, end) {
  const extracted = string.split(start)[1]?.split(end)[0]?.trim();
  return extracted ? extracted : '';
}

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

// Schedule the job to run every 1st day of the month
// cron.schedule('0 0 1 * *', fetchCourses);

// Uncomment the following line to test the function immediately
 fetchCourses();
