import React, { Component } from "react";
// import { Link } from "gatsby";
import "../styles/index.sass";
import { Spring, animated } from "react-spring/renderprops";
import { workData, strengthsData } from "./data";
import Logo from "../images/Logo";
import WorkCard from "./WorkCard";
import ContactCard from "./ContactCard";
import About from "./About";
import SEO from "./seo";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.card1 = React.createRef();
    this.card2 = React.createRef();
    this.card3 = React.createRef();
    this.card4 = React.createRef();
  }

  componentDidMount() {
    this.animateCards();
  }

  animateCards = () => {
    const cards = [this.card1.current, this.card2.current, this.card3.current, this.card4.current];
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("fadeInLeft");
      }, 3200 + 125 * i);
    });
  };

  render() {
    const { showSplashScreen } = this.props;
    return (
      <Spring
        native
        config={{ delay: 1000, tension: 100, friction: 10 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <animated.div style={props} className={`wrapper ${showSplashScreen ? "scrollLock" : ""}`}>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

            <div className="background" />
            <main>
              <header>
                <Logo />
              </header>

              <About data={strengthsData} />

              <div className="ctr-work">
                <a
                  href={workData[2].url}
                  className="card cardWork"
                  ref={this.card1}
                  target="_blank"
                >
                  <WorkCard work={workData[2]} />
                </a>
                <a
                  href={workData[0].url}
                  className="card cardWork"
                  ref={this.card2}
                  target="_blank"
                >
                  <WorkCard work={workData[0]} />
                </a>
                <a
                  href={workData[1].url}
                  className="card cardWork"
                  ref={this.card3}
                  target="_blank"
                >
                  <WorkCard work={workData[1]} />
                </a>
              </div>

              <div className="card cardContact" ref={this.card4}>
                <ContactCard />
              </div>

              <hr />
              <hr />
            </main>
          </animated.div>
        )}
      </Spring>
    );
  }
}
