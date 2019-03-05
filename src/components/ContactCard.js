import React, { Component } from "react";
import IconEmail from "../images/IconEmail";
import LogoGithub from "../images/LogoGithub";
import LogoInstagram from "../images/LogoInstagram";
import LogoDribbble from "../images/LogoDribbble";
import LogoCodepen from "../images/LogoCodepen";
import LogoLinkedin from "../images/LogoLinkedin";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class ContactCard extends Component {
  state = {
    value: "zremboldt@gmail.com",
    copied: false
  };

  componentDidUpdate() {
    if (this.state.copied) {
      setTimeout(() => {
        console.log("ran");
        this.setState({ copied: false });
      }, 3500);
    }
  }

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    return (
      <>
        <div className="ctr-Text">
          <h3>Say Hi :)</h3>
          <p>
            I'm available for remote projects. If you’d like to build something together, get in
            touch.
          </p>
        </div>

        <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
          <div className="email btn">
            <div className={`txt-address ${this.state.copied ? "address-active" : ""}`}>
              <IconEmail />
              <p>zremboldt@gmail.com</p>
            </div>
            <div className={`txt-copied ${this.state.copied ? "copied-active" : ""}`}>
              <p>Address copied.</p>
              <p>Can't wait to hear from you!</p>
            </div>
          </div>
        </CopyToClipboard>

        <div className="social">
          <a
            aria-label="Dribbble"
            href="https://dribbble.com/RemboldtDesign"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoDribbble />
          </a>
          <a
            aria-label="CodePen"
            href="https://codepen.io/Zacaree/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoCodepen />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/zacaree"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoGithub />
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/zremboldt/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/zac-remboldt/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLinkedin />
          </a>
        </div>
      </>
    );
  }
}
