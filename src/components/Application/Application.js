// applicationSection.js
import React, { useState } from 'react';
import './Application.css';

const ApplicationSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  const questions = [
    { 
        id: 1, 
        question: 'Cine poate aplica?', 
        answer: (
            <>
            <header class="page-header">
				<h1 class="page-title">Cine poate aplica?</h1>
			</header>
			<article class="pagehentry">
				<div class="entry-content">
                    <h4>Cine poate aplica?</h4>
                    Orice student din cadrul Universităţii Transilvania poate aplica la cursurile de sezon BEST. <br />Dacă este în an terminal, acesta trebuie să fie student doar în momentul aplicării. 
                    <h4>Un student poate aplica la:</h4>
                    <ul>
                    <li>maxim 3 cursuri BEST (BEST Courses)</li>
                    <li>maxim 3 evenimente despre educație (Symposium on Education)</li>
                    </ul>
                    <h4>Un student poate participa la:</h4>
                    <ul>
                    <li>maxim 3 cursuri BEST (BEST Courses) în timpul perioadei de studii</li>
                    <li>maxim 2 cursuri BEST (BEST Courses) în sezoanele de vară</li>
                    <li>maxim 1 curs BEST (BEST Courses) pe fiecare sezon</li>
                    <li>maxim 3 evenimente despre educație (Symposium on Education) în timpul perioadei de studii</li>
                    </ul>
                </div>
            </article>
            </>
        )
    },
    { 
        id: 2, 
        question: 'Cum pot aplica?', 
        answer: (
            <>
            <header class="page-header">
              <h1 class="page-title">Cum pot aplica?</h1>
            </header>
              <article class="pagehentry">
                  <div class="entry-content">
                      Pentru a aplica la un eveniment BEST, există câteva reguli pe care trebuie să le îndeplineşti şi o procedura ce trebuie respectată:
                      <h4>O aplicaţie este formată din:</h4>
                      <ul>
                      <li>crearea contului pe <a href="https://best.eu.org" target="_blank">www.best.eu.org</a> (site-ul general BEST)</li>
                      <li>o scrisoare de motivație</li>
                      <li>răspunsul la întrebările evenimentului BEST la care aplici (pot fi de la 1 la 3 întrebări)</li>
                      </ul>
                      <h4>Ce trebuie să faci?</h4>
                      <ul>
                      <li>Mergi la lista de evenimente, alege evenimentul la care doreşti să aplici și apasă butonul “Apply”.</li>
                      <li>Introdu adresa ta de e-mail și parola, dacă nu eşti deja conectat (dacă nu ai încă un cont, înregistrează-te <a href="https://best.eu.org/account/registration.jsp" target="_blank">aici</a>).</li>
                      <li>După crearea contului, <a href="contact.php">contactează-ne</a> să ne soliciţi să-ţi validăm contul.</li>
                      <li>Aplică la cursul/cursurile pe care le-ai ales.</li>
                      <li>Plăteşte depozitul de 40 de euro la BEST Braşov, dacă ai fost acceptat la unul dintre evenimente. Această sumă o vei primi înapoi în urma participării fără probleme la curs şi a completării formularului de feedback, de dupa întoarcerea în ţară).</li>
                      <li>Caută şi găseşte o metodă de a ajunge la eveniment (avion, tren, autocar).</li>
                      <li>Participă la eveniment respectând programul realizat de Grupul Local BEST care organizează cursul.</li>
                      <li>Plăteşte taxa de participare (taxa pentru participanții din Romania este de 60% din taxa cursului ales).</li>
                      <li>Bucură-te de cele trei mese pe zi, oferite de Grupul Local BEST organizator.</li>
                      <li>Evaluează la final cursul pe <a href="https://best.eu.org/account/applications.jsp" target="_blank">www.best.eu.org</a>.</li>
                      </ul>
                      <h4>Ai întrebări?</h4>
                      Ia legătura cu noi prin responsabilul de cursuri de sezon prin telefon la numarul, email la adresa sau prin formularul de contact.
                  </div>
              </article>
            </>
          )
    },
    { 
        id: 3, 
        question: 'Cum arata scrisoarea de motivatie?', 
        answer: (
            <>
            <header class="page-header">
				<h1 class="page-title">Scrisoarea de motivaţie</h1>
			</header>
            <article class="pagehentry">
                <div class="entry-content">
                    Pentru orice curs vă decideţi să aplicaţi, trebuie să ştiţi că este necesară o scrisoare de motivaţie, în funcţie de care Grupurile Locale BEST din toată Europa îşi vor selecta participanţii. Criteriile de selecţie variază de la un grup la altul, dar scrisoarea de motivaţie are cu siguranţă cea mai mare pondere în alegerea participanţilor.
                    <br /><br />
                    Nu există o reţetă perfectă, datorită multitudinii de criterii dar cu siguranţă organizatorii

                    <h4>Vor vrea să ştie:</h4>
                    Cine eşti? Care îţi sunt studiile, pasiunile, care sunt cunoştinţele tale în domeniul cursului şi cum îţi place să te distrezi. Prezentarea ta nu trebuie să fie lungă, dar să cuprindă informaţii relevante despre preocupările tale, şi despre cum ai putea contribui tu la formarea unui grup de participanţi diversificat şi receptiv.<br /><br />

                    De ce ai ales cursul acesta? Citeşte cu atenţie descrierea cursului şi ai grijă, în cazul în care aplici la mai multe cursuri să nu le încurci. Grupurile BEST vor fi curioase să audă motivaţie ta şi de multe ori aceasta cântăreşte cel mai mult în decizia lor. Scrie motive specifice! Aşa vor şti că scrisoarea ta nu e una standard cu care aplici la toate cursurile şi interesul tău e real!
                    <br /><br />
                    De ce ai ales oraşul/ţara aceasta? Vrei sau nu, cei care vor face selecţia, întotdeauna se vor simţi puţin gâdilaţi în orgoliu dacă le dai şi un motiv legat de ţara lor pentru care vrei să mergi acolo! Nu insista însă prea mult căci există riscul să dai impresia că mergi acolo ca turist şi cursurile cad pe locul doi.
                    <br /><br />
                    Dacă la aceste informaţii adaugi şi puţină originalitate în formulare, cu siguranţă că vei avea o şansă în plus. Oricine apreciază simţul umorului şi creativitatea aşa că nu ezita să le foloseşti când ai ocazia.
                    <br /><br />
                    Acum nu mai rămâne decât să aplici! Fă-ţi curaj, apucă-te de scris şi poţi petrece o săptămână cum nici nu ai îndrăznit să speri.
                </div>
            </article>
        </>
        )
    },
    {
        id: 4,
        question: 'Cum se valideaza contul?',
        answer: (
          <>
            <header class="page-header">
                <h1 class="page-title">Validare cont</h1>
            </header>
            <article class="pagehentry">
                <div class="entry-content">
                    Pentru ca aplicaţia ta la curs să devină vizibilă, trebuie să ai contul activat.

                    <h4>Cum îmi activez contul?</h4>
                    <ul>
                        <li>Trimite-ne un mesaj prin <a href="contact.php">formularul de contact</a>, specificând următoarele:
                        <ul>
                            <li>numele complet</li>
                            <li>adresa de email</li>
                            <li>numărul de telefon</li>
                            <li>facultatea</li>
                            <li>anul universitar</li>
                            <li>când eşti disponibil pentru a fi contactat telefonic</li>
                        </ul></li>
                        <li>Te vom contacta telefonic pentru confirmarea cererii şi pentru o scurtă conversaţie în limba engleză.</li>
                        <li>Dacă totul este în regulă, vei avea contul activat în cel mai scurt timp.</li>
                    </ul>
                </div>
            </article>
          </>
        )
    },
    { 
        id: 5, 
        question: 'Ce benficii si responsabilitati am?', 
        answer: (
            <>
            <header class="page-header">
                <h1 class="page-title">Beneficii şi responsabilităţi</h1>
			</header>
            <article class="pagehentry">
                <div class="entry-content">
                    <h4>Beneficii</h4>
                    Organizatorii vă vor oferi fără niciun cost suplimentar:
                    <ul>
                        <li>Un „kit de supravieţuire” care conţine informaţii despre eveniment. Acest kit va fi oferit cu cel puţin trei saptamani înaintea începerii evenimentului.</li>
                        <li>Aproximativ 20 de ore de cursuri academice pe săptămână (cursuri, vizite la companii, studii de caz, lucru de laborator şi sesiuni de training)</li>
                        <li>Materiale de curs scrise în limba engleză</li>
                        <li>Un certificat de participare</li>
                        <li>Transport gratuit la sesiunile de curs şi la toate activităţile organizate</li>
                        <li>Un program cultural/social</li>
                        <li>Trei mese pe zi, cel putin o masă caldă, pe parcursul întregului eveniment, inclusiv în weekend</li>
                        <li>Facilităţi de dormit corespunzătoare precum şi acces la un duş</li>
                    </ul>
                    Ce nu este inclus:
                    <ul>
                        <li>Călătoria la eveniment şi întoarcerea de la acesta</li>
                        <li>Băuturi şi alimente suplimentare</li>
                        <li>Unele din activitatile de seară (de exemplu biletul la club)</li>
                        <li>Asigurarea de călătorie şi de sănătate</li>
                    </ul>

                    <h4>Responsabilităţi</h4>
                    Există anumite cerinţe care trebuie respectate pentru a putea participa la un eveniment BEST:
                    <ul>
                        <li>Dacă eşti sigur că vei participa la un curs unde ai fost acceptat, nu uita să achiţi aceast depozit către Grupul Local BEST Brașov. Este necesar, pentru a confirma participarea la eveniment.</li>
                        <li>În timpul evenimentului, participanţii trebuie să se comporte într-o manieră civilizată, respectând oamenii, independent de naţionalitate sau convingerile lor şi în conformitate cu legile ţării în care evenimentul are loc.</li>
                        <li>Participanţii trebuie să informeze grupul Local BEST care organizează evenimentul despre data de sosire la locaţia specificată pe site-ul evenimentului cu cel puțin o săptămâna înainte de începerea evenimentului.</li>
                        <li>Participanţii trebuie să sosească la locaţia specificată pe site-ul evenimentului cel târziu în Ziua Sosirii la oră specificată. Participanţii urmând să plece cel mai devreme în Ziua Plecării.</li>
                        <li>La evenimentele cu o componentă academică, participanţii trebuie să fie prezenţi la întreaga parte academică a evenimentului. Participanţii trebuie să fie la timp la începutul sesiunilor academice.</li>
                        <li>Participanţii trebuie să participe activ la toate activităţile și nu pot părăsi grupul cu excepţia cazurilor convenite cu organizatorii</li>
                        <li>În timpul evenimentului participanţii trebuie să plătească taxa de participare specificată, această taxă variind în funcţie de țara din care provin.</li>
                        <li>Participanţii nu pot consuma băuturi alcoolice sau să fie sub influența băuturilor alcoolice în timpul cursurilor academice, sau alte activităţi stabilite în avans de către organizatori.</li>
                        <li>Dacă nu sunt motive medicale, participanţii nu pot consuma substanţe cu efect stupefiant sau medicamente cu efecte similare.</li>
                        <li>Participanţii nu vor dormi în timpul cursurilor academice sau în timpul altor activităţi stabilite de organizatori.</li>
                        <li>Participanţii vor trebui să plătească orice obiecte deteriorate, dacă se dovedeşte că a fost deteriorat de către aceştia.</li>
                        <li>Participanţii au obligaţia de a completa formularul de evaluare a evenimentului, pe site-ul BEST, după participare. Acest lucru trebuie făcut înainte de termenul limită specificat pe site-ul BEST.</li>
                    </ul><br /><br />
                    <strong>Important:</strong> Depozitul va fi returnat după ce ai participat la eveniment, ţi-ai respectat responsabilităţile și ai răspuns la mai mult de 70% din întrebările din formularul de evaluare de pe site-ul BEST.
					</div>
				</article>
            </>
        )
    }
  ];

  const handleQuestionClick = (id) => {
    // Actualizează starea pentru a afișa doar răspunsul pentru întrebarea selectată
    setSelectedQuestion(id);
  };

  return (
    <>
        <div className="hero">
            <div className="heroInner">
            </div>
        </div>
        <div className="application-section">
            <div className="application-content">
                <div className="application-list">
                {questions.map((q) => (
                    <div
                    key={q.id}
                    className={`application-item ${selectedQuestion === q.id ? 'selected' : ''}`}
                    onClick={() => handleQuestionClick(q.id)}
                    >
                    {q.question}
                    </div>
                ))}
                </div>
                <div className="application-answer">
                {selectedQuestion !== null && <>{questions.find((q) => q.id === selectedQuestion)?.answer}</>}
                </div>
            </div>
        </div>
    </>
  );
};

export default ApplicationSection;
