import React from "react";
// import { Link } from "gatsby";
import "../styles/baseStyles.css";
import "../styles/index.sass";

import Layout from "../components/layout";
import WorkCard from "../components/WorkCard";
// import Image from "../components/image";
import ArrowDown from "../images/ArrowDown";
import SEO from "../components/seo";
import IconEmail from "../images/IconEmail";
import LogoGithub from "../images/LogoGithub";
import LogoInstagram from "../images/LogoInstagram";
import LogoDribbble from "../images/LogoDribbble";
import LogoCodepen from "../images/LogoCodepen";
import LogoLinkedin from "../images/LogoLinkedin";

const work = [
  {
    name: "GitHub",
    text: "Most of my more involved projects and ideas can be found here.",
    url: "https://github.com/zacaree"
  },
  {
    name: "Codepen",
    text: "This is the coding laboratory where some of my fun experiments live.",
    url: "https://codepen.io/Zacaree/"
  }
];

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
          <li className="strength">
            <div className="strengthLabel">
              <p>Ideation</p>
              <ArrowDown />
            </div>
            <div className="sub">
              <p>
                "People who are especially talented in the Ideation theme are fascinated by ideas.
                They are able to find connections between seemingly disparate phenomena."
              </p>
            </div>
          </li>
          <li className="strength">
            <div className="strengthLabel">
              <p>Relator</p>
              <ArrowDown />
            </div>
            <div className="sub">
              <p>
                "People who are especially talented in the Relator theme enjoy close relationships
                with others. They find deep satisfaction in working hard with friends to achieve a
                goal."
              </p>
            </div>
          </li>
          <li className="strength">
            <div className="strengthLabel">
              <p>Empathy</p>
              <ArrowDown />
            </div>
            <div className="sub">
              <p>
                "People who are especially talented in the Empathy theme can sense the feelings of
                other people by imagining themselves in others’ lives or others’ situations."
              </p>
            </div>
          </li>
          <li className="strength">
            <div className="strengthLabel">
              <p>Achiever</p>
              <ArrowDown />
            </div>
            <div className="sub">
              <p>
                "People who are especially talented in the Achiever theme have a great deal of
                stamina and work hard. They take great satisfaction from being busy and productive."
              </p>
            </div>
          </li>
          <li className="strength">
            <div className="strengthLabel">
              <p>Intellection</p>
              <ArrowDown />
            </div>
            <div className="sub">
              <p>
                "People who are especially talented in the Intellection theme are characterized by
                their intellectual activity. They are introspective and appreciate intellectual
                discussions."
              </p>
            </div>
          </li>
        </ul>
      </section>
      {/* <hr /> */}
    </div>

    <div className="ctr-right">
      <div className="ctr-Work">
        {work.map(item => (
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

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
