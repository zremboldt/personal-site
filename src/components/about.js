import React from "react";
import Strength from "./strength";

export default function About({ data }) {
  return (
    <>
      <section className="aboutStatement">
        <h1>Drawing from a strong background in design, I build engaging user focused experiences from initial concept to final deployment.</h1>
      </section>

      <section className="aboutStory">
        <h3>My Road to Code</h3>
        <p>I’ve been working in the creative industry for nearly 10 years now as a visual designer but I’ve always had that itch to bring my work to life and make it interactive.</p>
        <p>I dabbled in code here and there but finally decided to go for it in 2016 and become a web/software developer. I’ve never looked back, pouring myself into it daily, always excited for what I’ll build/learn next.</p>
      </section>

      <section className="aboutStrengths">
        <h3>Strengths - Gallup's StrengthsFinder</h3>
        <ul>{data.map(({ strength, description }, i) => <Strength strength={strength} description={description} key={i} />)}</ul>
      </section>
    </>
  );
};
