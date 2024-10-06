import React from 'react';
import ContactForm from "../EmailForm/EmailForm";
import "./Contact.css";



const email = process.env.REACT_APP_VIVALDI_EMAIL;
const number = process.env.REACT_APP_VIVALDI_NUMBER;
const name = process.env.REACT_APP_VIVALDI_NAME;

export default function Contact() {
  return (
    <>
      <div className='contact-hero'>
        <div className="heroInner"></div>
      </div>
      <div className='wrapper'>
        <div>
          <header className="page-header">
            <h1 className="page-title contact"><b>Persoana de contact</b></h1>
          </header>
          <div className="content">
            <p className="contact-detail"><b>{name}</b></p>
            <p className="contact-detail">
              <a href={`tel:${number}`}><b>{number}</b></a>
            </p>
            <p className="contact-detail">
              <a href={`mailto:${email}`}><b>{email}</b></a>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
