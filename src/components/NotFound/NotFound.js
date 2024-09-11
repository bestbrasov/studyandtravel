import React from 'react';
import './NotFound.css'; // Importă fișierul CSS pentru stilizare

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-hero">
        <div className="heroInner-404">
          <h1>404</h1>
          <h2>Pagina Nu A Fost Găsită</h2>
          <p>Ne pare rău, pagina pe care o căutați nu există.</p>
          <a href="/" className="home-link">Întoarce-te la Pagina Principală</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
