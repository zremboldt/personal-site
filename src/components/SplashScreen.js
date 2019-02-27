import React, { Component } from "react";
import Logo from "../images/Logo";

export default class SplashScreen extends Component {
  render() {
    return (
      <div className="splashscreen" style={this.props.style}>
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
