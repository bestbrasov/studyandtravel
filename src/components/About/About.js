// About.js
import React from 'react';
import './About.css';

export default function About() {
  return (
    <>
      <div className="hero">
        <div className="heroInner"></div>
      </div>
      <div className='wrapper'>
      <div>
          <header className="page-header">
            <h1 className="page-title">
              <b>Despre</b>
            </h1>
          </header>
          <div className="content">
            <p>
              Pe parcursul fiecărui an, BEST organizează o serie de activități, ce oferă studenților de la universitățile tehnice și nu numai șansa de a-și aprofunda domeniile de studiu, de a lega prietenii noi, dar și contacte, perfecționându-și în același timp și limba engleză.
              Fiecare eveniment BEST adună un grup de aproximativ 20-30 de studenți, ce au același scop: experiențe unice, pline de distracție, departe de cotidianul universitar.
              </p>
              <p>
              Cursurile de sezon le oferă studenților oportunitatea de a combina învățământul academic tradițional cu metode educaționale alternative. Prin intermediul activităților sociale și culturale desfășurate în timpul acestor cursuri, studenții vor relaționa
              cu persoane din diferite culturi, având șansa de a crea prietenii pe viață. An de an, peste 2000 de studenți se alătură aventurii academice și sociale oferite de cursurile BEST.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
