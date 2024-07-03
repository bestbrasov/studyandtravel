import React from 'react';
import ContactForm from "../EmailForm/EmailForm";
import "./Contact.css";

const email = process.env.REACT_APP_VIVALDI_EMAIL;
const number = process.env.REACT_APP_VIVALDI_NUMBER;
const name = process.env.REACT_APP_VIVALDI_NAME;

export default function Contact() {
  return (
    <>
      <div className="hero">
        <div className="heroInner"></div>
      </div>
      <div className='wrapper'>
        <div>
          <header className="page-header">
            <h1 className="page-title contact"><b>Persoana de contact</b></h1>
          </header>
          <div className="content">
            <p className="contact-detail"><b>{name}</b></p>
            <p className="contact-detail"><b>{number}</b></p>
            <p className="contact-detail"><b>{email}</b></p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
