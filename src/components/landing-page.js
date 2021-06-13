import React, { useEffect, useState } from "react";
import { aboutData, workData, socialData } from "../content";
import Logo from "../images/logo";
import ContactCard from "./contact-card";
import Strength from "./strength";
import WorkCard from "./work-card";

export default function LandingPage({ splashScreenIsVisible }) {
  const { aboutStatement, aboutStory, aboutStrengths } = aboutData;

  return (
    <div className='wrapper' className={`${splashScreenIsVisible ? 'scrollLock' : ''}`}>
      <div className="background" />
      <main>
        <header>
          <Logo />
        </header>

        <section className="aboutStatement">
          <h1>{aboutStatement.headline}</h1>
        </section>

        <section className="aboutStory">
          <h3>{aboutStory.headline}</h3>
          {aboutStory.body.map((line, i) => <p key={i}>{line}</p>)}
        </section>

        <section className="aboutStrengths">
          <h3>{aboutStrengths.headline}</h3>
          <ul>{aboutStrengths.strengthsData.map(({ strength, description }, i) => <Strength strength={strength} description={description} key={i} />)}</ul>
        </section>

        {!splashScreenIsVisible && (
          <>
            <div className="ctr-work">
              {workData.map((card, index) => (
                <WorkCard 
                  key={index} 
                  card={card} 
                  index={index} 
                />
              ))}
            </div>

            <ContactCard socialData={socialData} index={3} />
          </>
        )}
        

        <hr />
        <hr />
      </main>
    </div>
  );
}
