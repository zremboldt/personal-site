import React from "react";
// import { Link } from "gatsby";
import "../styles/baseStyles.css";
import "../styles/index.sass";

import { workData, strengthsData } from "../components/data";
import Layout from "../components/layout";
import WorkCard from "../components/WorkCard";
import Strength from "../components/Strength";
import SEO from "../components/seo";

import IconEmail from "../images/IconEmail";
import LogoGithub from "../images/LogoGithub";
import LogoInstagram from "../images/LogoInstagram";
import LogoDribbble from "../images/LogoDribbble";
import LogoCodepen from "../images/LogoCodepen";
import LogoLinkedin from "../images/LogoLinkedin";
// import { CopyToClipboard } from "react-copy-to-clipboard";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="ctr-about">
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
      </section>

      <section className="aboutStrengths">
        <h3>Strengths - Gallup's StrengthsFinder</h3>
        <ul>
          {strengthsData.map(strength => (
            <Strength strength={strength} />
          ))}
        </ul>
      </section>
      {/* <hr /> */}
    </div>

    <div className="ctr-right">
      <div className="ctr-Work">
        {workData.map(item => (
          <WorkCard work={item} />
        ))}
        {/* <hr /> */}
      </div>

      <div className="ctr-Contact">
        <div className="card cardContact">
          <div className="ctr-Text">
            <h3>Say Hi :)</h3>
            <p>
              I'm available for remote projects. If you’d like to build something together, get in
              touch.
            </p>
          </div>

          <div className="email btn" data-clipboard-text="remboldtdesign@gmail.com">
            <div className="txt-address">
              <IconEmail />
              <p>remboldtdesign@gmail.com</p>
            </div>
            <div className="txt-copied">
              <p>Address copied.</p>
              <p>Can't wait to hear from you!</p>
            </div>
          </div>

          <div className="social">
            <a href="https://dribbble.com/RemboldtDesign" className="btn">
              <LogoDribbble />
            </a>
            <a href="https://codepen.io/Zacaree/" className="btn">
              <LogoCodepen />
            </a>
            <a href="https://github.com/zacaree" className="btn">
              <LogoGithub />
            </a>
            <a href="https://www.instagram.com/zremboldt/" className="btn">
              <LogoInstagram />
            </a>
            <a href="https://www.linkedin.com/in/zac-remboldt/" className="btn">
              <LogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
