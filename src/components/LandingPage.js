import React, { Component } from "react";
// import { Link } from "gatsby";
import "../styles/index.sass";
import { Spring, animated } from "react-spring/renderprops";
import { workData, strengthsData } from "./data";
import Logo from "../images/Logo";
import About from "./About";
import ContactCard from "./ContactCard";
import IconResume from "../images/iconResume";
import LogoGithub from "../images/LogoGithub";
import LogoCodepen from "../images/LogoCodepen";
import SEO from "./seo";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.card0 = React.createRef();
    this.card1 = React.createRef();
    this.card2 = React.createRef();
    this.card3 = React.createRef();
  }

  componentDidMount() {
    this.animateCards();
  }

  animateCards = () => {
    const cards = [this.card0.current, this.card1.current, this.card2.current, this.card3.current];
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
                  aria-label={workData[0].name}
                  href={workData[0].url}
                  className="card cardWork"
                  ref={this.card0}
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
                  aria-label={workData[1].name}
                  href={workData[1].url}
                  className="card cardWork"
                  ref={this.card1}
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
                  aria-label={workData[2].name}
                  href={workData[2].url}
                  className="card cardWork"
                  ref={this.card2}
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

              <div className="card cardContact" ref={this.card3}>
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
