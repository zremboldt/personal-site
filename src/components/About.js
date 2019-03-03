import React from "react";
import Strength from "./Strength";

const About = props => {
  return (
    <>
      <section className="aboutStatement">
        <h1>
          Drawing from a strong background in design, I build engaging user focused experiences from
          concept to final development.
        </h1>
      </section>

      <section className="aboutStory">
        <h3>My Road to Code</h3>
        <p>
          I’ve been working in the creative industry for nearly 10 years now as a multidisciplinary
          graphic designer but I’ve always had that itch to bring my work to life and make it
          interactive.
        </p>
        <p>
          I dabbled in code here and there but finally decided to go for it in 2016 and become a
          developer. I’ve never looked back, pouring myself into it daily, always excited for what
          I’ll build/learn next.
        </p>
        <p>
          Most recently on this journey I’ve been diving into the fundamentals of computer science;
          exploring data structures and algorithms and learning ways to determine the pros/cons of
          each in a given situation.
        </p>
      </section>

      <section className="aboutStrengths">
        <h3>Strengths - Gallup's StrengthsFinder</h3>
        <ul>
          {props.data.map((strength, i) => (
            <Strength strength={strength} key={i} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;
