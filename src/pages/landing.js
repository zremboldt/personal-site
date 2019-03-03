import React, { Component } from "react";
// import { Link } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";

import { workData, strengthsData } from "../components/data";
import Logo from "../images/Logo";
import WorkCard from "../components/WorkCard";
import ContactCard from "../components/ContactCard";
import About from "../components/About";
import SEO from "../components/seo";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.card1 = React.createRef();
    this.card2 = React.createRef();
    this.card3 = React.createRef();
  }

  componentDidMount() {
    this.animateCards();
  }

  animateCards = () => {
    const cards = [this.card1.current, this.card2.current, this.card3.current];
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("fadeInLeft");
      }, 500 + 125 * i);
    });
  };

  render() {
    return (
      <PageTransition transitionTime={500}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div className="background" />
        <div className="wrapper">
          <header>
            <Logo />
          </header>

          <About data={strengthsData} />

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
      </PageTransition>
    );
  }
}
