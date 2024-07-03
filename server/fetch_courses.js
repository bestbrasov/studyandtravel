require('dotenv').config({ path: '../config/.env' });

const axios = require('axios');
const { Client } = require('pg');

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

async function fetchCourses() {
    try {
        await client.connect();
        await client.query("TRUNCATE TABLE cursuri");

        const { data: sursa } = await axios.get("https://best.eu.org/courses/list.jsp");
        const cursuri = sursa.split("</tr>").filter(row => row.includes("<td>"));

        for (const cursHtml of cursuri) {
            const curs = {};
            const continut = cursHtml.split("</td>");

            curs.cod = extractData(continut[0], 'activity=', '"');
            curs.titlu = stripTags(continut[0]);
            curs.tip = stripTags(continut[3]);
            curs.pret = stripTags(continut[5]);

            const { data: event } = await axios.get(`https://best.eu.org/event/details.jsp?activity=${curs.cod}`);
            curs.descriere = extractData(event, '<h2>General description</h2>', '<h2> Academic information </h2>').trim();
            curs.locatie = extractData(event, '<strong>Place:</strong> ', '</li>').trim();
            curs.perioada = extractData(event, '<strong>Dates:</strong>', '</li>').trim();
            curs.appdate = new Date(extractData(event, '<strong>Application until:</strong> ', ' CE').replace('at ', '').trim()).getTime();

            const derep = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const curep = ["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"];

            derep.forEach((month, i) => {
                curs.perioada = curs.perioada.replace(new RegExp(month, 'g'), curep[i]);
            });

            const lbgUrl = `https://best.eu.org/aboutBEST/structure/lbgView.jsp?lbginfo=${extractData(event, '<a href="/aboutBEST/structure/lbgView.jsp?lbginfo=', '">')}`;
            const { data: lbgContent } = await axios.get(lbgUrl);

            curs.oras = extractData(lbgContent, '<b>University:</b>', '<br/>').split(',').pop().trim();
            curs.tara = extractData(lbgContent, '<b>University:</b>', '<br/>').split(',').slice(-2, -1)[0].trim();

            if (curs.oras && curs.tara) {
                await client.query(`
                    INSERT INTO cursuri (appdate, cod, titlu, tip, pret, descriere, locatie, perioada, oras, tara)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
                    [curs.appdate, curs.cod, curs.titlu, curs.tip, curs.pret, curs.descriere, curs.locatie, curs.perioada, curs.oras, curs.tara]
                );
            }
        }
    } catch (err) {
        console.error('Error fetching or inserting courses:', err);
    } finally {
        await client.end();
    }
}

function extractData(string, start, end) {
    const extracted = string.split(start)[1]?.split(end)[0]?.trim();
    return extracted ? extracted : '';
}

function stripTags(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

fetchCourses();
