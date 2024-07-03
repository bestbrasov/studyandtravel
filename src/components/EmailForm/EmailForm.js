import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import './EmailForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    subject: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setShowModal(true);
        setFormData({
          name: '',
          tel: '',
          subject: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <TextField
          label="Nume*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Numar de telefon*"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Subiect*"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mesaj*"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
      <Dialog open={showModal} onClose={closeModal}>
        <DialogTitle>Email trimis</DialogTitle>
        <DialogContent>
          <DialogContentText>Emailul a fost trimis cu succes.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactForm;
