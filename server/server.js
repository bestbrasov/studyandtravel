// Load environment variables from .env file
require('dotenv').config({ path: '../config/.env' });

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

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

// Configure PostgreSQL client
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

client.connect(err => {
  if (err) {
    console.error('Failed to connect to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

// Define a route to fetch all courses
app.get('/api/courses', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM cursuri');
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
    const result = await client.query('SELECT * FROM cursuri WHERE cod = $1', [cod]);
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
  console.log(`Server is running on http://localhost:${port}`);
});
