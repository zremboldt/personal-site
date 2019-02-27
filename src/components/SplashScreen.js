import React, { Component } from "react";
import Logo from "../images/Logo";

export default class SplashScreen extends Component {
  state = {
    opacityTo0: false,
    displayToNone: false
  };

  // Hide the splashscreen after 3 seconds.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacityTo0: true });
    }, 2800);
  }

  // After splashscreen is hidden, set the CSS property display to none.
  componentDidUpdate() {
    if (this.state.opacityTo0) {
      setTimeout(() => {
        this.setState({ displayToNone: true });
      }, 200);
    }
  }

  render() {
    const { opacityTo0, displayToNone } = this.state;
    return (
      <div
        className="splashscreen"
        style={{
          opacity: opacityTo0 ? 0 : 1,
          display: displayToNone ? "none" : "flex"
        }}
      >
        <div className="splashLogoContainer">
          <div className="mask" />
          <div className="mask" />
          <div className="mask" />
          <Logo />
        </div>
      </div>
    );
  }
}
