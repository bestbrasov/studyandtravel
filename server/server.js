// Load environment variables from the appropriate file for development or production
const isDev = process.env.NODE_ENV !== 'production';
if (isDev) {
  // For development, use env.development.local or any specific local .env file
  require('dotenv').config({ path: '../.env.development.local' });
} else {
  // In production, Vercel automatically sets environment variables from the dashboard
  require('dotenv').config();
}

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sql } = require('@vercel/postgres');

const app = express();
const port = 3004;

app.use(cors());
app.use(bodyParser.json());

// Debugging: Print environment variables to ensure they are loaded correctly
console.log('Email User:', process.env.REACT_APP_EMAIL_USER);
console.log('Email Pass:', process.env.REACT_APP_EMAIL_PASS);
console.log('Email Recipient:', process.env.REACT_APP_EMAIL_RECIPIENT);

// Configure nodemailer with your email service details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_EMAIL_USER,
    pass: process.env.REACT_APP_EMAIL_PASS,
  },
});

// Define a route to handle the form submission
app.post('/send-email', (req, res) => {
  const { name, tel, subject, email, message } = req.body;

  if (!name || !tel || !subject || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: process.env.REACT_APP_EMAIL_USER,
    to: process.env.REACT_APP_EMAIL_RECIPIENT,
    subject: subject,
    text: `Name: ${name}\n Tel: ${tel}\n Email: ${email}\n Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Define a route to fetch all courses
app.get('/api/courses', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM cursuri`;
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route to fetch a single course by cod
app.get('/api/courses/:cod', async (req, res) => {
  const { cod } = req.params;
  try {
    const result = await sql`SELECT * FROM cursuri WHERE cod = ${cod}`;
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching course:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
