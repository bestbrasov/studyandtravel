// About.js
import React from 'react';
import "./FAQ.css";

const FAQ = () => {
  return (
    <>
      <div className='faq-hero'>
        <div className="heroInner"></div>
      </div>
      <div className="wrapper">
        <div>
          <header className="page-header">
            <h1 className="page-title">
              <b>FAQ</b>
            </h1>
          </header>
          <div className="content">
            <h4>1. Care este taxa maximă pentru un eveniment de educație (Event on Education)?</h4>
            În ceea ce îi privește pe participanții români, aceștia plătesc o taxă de participare care reprezintă
            doar 60% din costul cursului pe care îl aleg. Această politică tarifară are scopul de a face educația mai
            accesibilă și de a încuraja membrii comunității să se implice activ la aceste cursuri.

            <h4>2. Care este motivul pentru care evenimentele BEST au prețuri atât de accesibile?</h4>
            Grupul Local BEST care se ocupă de organizarea cursurilor face eforturi constante pentru a stabili
            colaborări cu organizații, companii și universitatea noastră. Scopul acestei colaborări este să
            strângem fonduri suplimentare pentru a sprijini procesul de organizare al cursurilor BEST. Resursele
            obținute prin aceste colaborări sunt importante pentru a acoperi diferite costuri necesare, precum
            materialele de studiu, facilitățile și susținerea financiară pentru participanți. Prin intermediul
            acestor colaborări se pot menține costurile cât mai accesibile și odată cu acestea și o experiență de
            învățare de calitate în cadrul programelor BEST.

            <h4>3. Care este procedura pentru selectarea participanților?</h4>
            Grupul local BEST organizator primește toate scrisorile de motivație ale studenților care au aplicat pentru
            curs, urmând să selecteze participanții în funcție de mai multe criterii cum ar fi: locația geografică,
            având în vedere că de obicei se alege un singur student dintr-un oraș sau o țară; creativitatea și
            originalitatea scrisorii de motivație prezentate de aplicanți; experiența anterioară a candidaților în
            domeniul abordat în cadrul cursului.

            <h4>4. Ce ar trebui să fac în cazul în care nu am fost ales să particip la un eveniment?</h4>
            Dacă nu ai fost acceptat la evenimentul respectiv, nu trebuie să te descurajezi. În schimb, poți să-ți
            analizezi aplicația și să lucrezi la îmbunătățirea ei pentru viitoarele oportunități. Aprofundează-ți
            cunoștințele sau abilitățile și nu ezita să revii cu o aplicație mai pregătită pentru a obține
            acceptarea în viitor.

            <h4>5. Se pot obține credite ECTS în urma participării la un eveniment BEST?</h4>
            După încheierea procesului de evaluare finală în cadrul cursului, vei primi un certificat BEST care
            servește drept dovadă a participării și va oferi o descriere detaliată a conținutului cursului.
            Certificatul BEST va fi autentificat prin intermediul ștampilei universității și a semnăturii profesorului
            coordonator, iar pe lângă acestea, va include informații cu privire la numărul de credite ECTS alocat
            cursului, oferind astfel o recunoaștere oficială a eforturilor și a performanțelor tale în cadrul acestuia.

            <h4>6. Trebuie să completez formularul de evaluare online la un moment specific?</h4>
            Participanții la fiecare curs trebuie să completeze un formular de evaluare după încheierea evenimentului și
            înainte de data limită specificată pentru fiecare sezon, detaliile fiind disponibile pe pagina  
            <a href="/application"> aplicare</a> la secțiunea beneficii. În cazul în care un participant omite să furnizeze
            o evaluare pentru eveniment, acesta va primi doar jumătate din depozitul inițial.

            <h4>7. Unde pot accesa formularul de evaluare?</h4>
            Pentru a completa formularul de evaluare este necesar să intri în contul tău și să accesezi secțiunea
            <a href="https://best.eu.org/account/applications.jsp">"My Applications"</a>, iar acolo îl vei avea disponibil.
            Asigură-te că ești autentificat pentru a putea accesa acest formular și pentru a-ți exprima evaluarea cu privire
            la evenimentul respectiv.
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
