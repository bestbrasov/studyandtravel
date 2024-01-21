import React from "react"
import "./Home.css"
import CourseList from "../Courses/Courses";

const HeroSection = () => {
    return(
        <>
        <div className="hero">
          <div className="heroInner">
            <span>
            <h1>Study & Travel</h1>
            <h2 className="italic">Studiază și călătorește prin Europa în perioada studenției</h2>
            </span>
          </div>
        </div>
        <div className="bio">
            <h3>Cursurile de sezon le oferă studenților oportunitatea de a combina
                învățământul academic tradițional cu metode educaționale alternative.
                Prin intermediul activităților sociale și culturale desfășurate în timpul acestor cursuri,
                studenuții vor relaționa cu persoane din diferite culturi, având șansa de a crea prietenii pe viață.
                An de an, peste 2000 de studenți se alătură aventurii academice și sociale oferite de cursurile BEST.
            </h3>
        </div>
        
        <div className="courses">
            <CourseList />
        </div>
        </>
    );
}

export default HeroSection;