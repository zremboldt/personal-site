import React, { Component } from "react";
// import { Link } from "gatsby";
import "../styles/index.sass";

import { workData, strengthsData } from "../components/data";
import Logo from "../images/Logo";
import SplashScreen from "../components/SplashScreen";
import WorkCard from "../components/WorkCard";
import ContactCard from "../components/ContactCard";
import Strength from "../components/Strength";
import SEO from "../components/seo";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.card1 = React.createRef();
    this.card2 = React.createRef();
    this.card3 = React.createRef();
  }

  componentDidMount() {
    const cards = [this.card1.current, this.card2.current, this.card3.current];

    const animate = (el, cl) => {
      for (let i = 0; i < el.length; i++) {
        setTimeout(() => {
          el[i].classList.add(cl);
        }, 3200 + 125 * i);
      }
    };

    animate(cards, "fadeInLeft");
  }

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SplashScreen />
        <div className="background" />
        <div className="wrapper">
          <header>
            <Logo />
          </header>

          <section className="aboutStatement">
            <h1>
              Drawing from a strong background in design, I build engaging user focused experiences
              from concept to final development.
            </h1>
          </section>

          <section className="aboutStory">
            <h3>My Road to Code</h3>
            <p>
              I’ve been working in the creative industry for nearly 10 years now as a
              multidisciplinary graphic designer but I’ve always had that itch to bring my work to
              life and make it interactive.
            </p>
            <p>
              I dabbled in code here and there but finally decided to go for it in 2016 and become a
              developer. I’ve never looked back, pouring myself into it daily, always excited for
              what I’ll build/learn next.
            </p>
          </section>

          <section className="aboutStrengths">
            <h3>Strengths - Gallup's StrengthsFinder</h3>
            <ul>
              {strengthsData.map((strength, i) => (
                <Strength strength={strength} key={i} />
              ))}
            </ul>
          </section>

          <div className="ctr-work">
            <a href={workData[0].url} className="card cardWork" ref={this.card1}>
              <WorkCard work={workData[0]} />
            </a>
            <a href={workData[1].url} className="card cardWork" ref={this.card2}>
              <WorkCard work={workData[1]} />
            </a>
          </div>

          <div className="card cardContact" ref={this.card3}>
            <ContactCard />
          </div>

          <hr />
          <hr />
        </div>
      </>
    );
  }
}
