import React, { useEffect, useRef } from "react";
import { workData, strengthsData, socialData } from "../content";
import Logo from "../images/logo";
import About from "./about";
import ContactCard from "./contact-card";
import IconResume from "../images/icon-resume";
import LogoGithub from "../images/logo-github";
import LogoCodepen from "../images/logo-codepen";

export default function LandingPage({ splashScreenIsVisible }) {
  const cardRef0 = useRef();
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  
  useEffect(() => {
    const cardRefs = [cardRef0.current, cardRef1.current, cardRef2.current, cardRef3.current];
    cardRefs.forEach((card, i) => {
      setTimeout(() => card.classList.add("fadeInLeft"), 3200 + 125 * i);
    });
  }, [])

  return (
    <div className='wrapper' className={`${splashScreenIsVisible ? 'scrollLock' : ''}`}>
      <div className="background" />
      <main>
        <header>
          <Logo />
        </header>

        <About data={strengthsData} />

        <div className="ctr-work">
          <a
            aria-label={workData[0].name}
            href={workData[0].url}
            ref={cardRef0}
            className="card cardWork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{workData[0].name}</h3>
            <p>{workData[0].text}</p>
            <div className="tab">
              <IconResume />
            </div>
          </a>
          <a
            ref={cardRef1}
            aria-label={workData[1].name}
            href={workData[1].url}
            className="card cardWork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{workData[1].name}</h3>
            <p>{workData[1].text}</p>
            <div className="tab">
              <LogoGithub />
            </div>
          </a>
          <a
            ref={cardRef2}
            aria-label={workData[2].name}
            href={workData[2].url}
            className="card cardWork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{workData[2].name}</h3>
            <p>{workData[2].text}</p>
            <div className="tab">
              <LogoCodepen />
            </div>
          </a>
        </div>

        <div className="card cardContact" ref={cardRef3}>
          <ContactCard socialData={socialData} />
        </div>

        <hr />
        <hr />
      </main>
    </div>
  );
}
