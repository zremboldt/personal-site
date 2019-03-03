import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";
import Logo from "../images/Logo";

export default class SplashScreen extends Component {
  render() {
    return (
      <Spring
        native
        config={{ delay: 2800, tension: 120, friction: 60 }}
        from={{ opacity: 1 }}
        to={{ opacity: 0 }}
      >
        {props => (
          <animated.div style={props} className="splashscreen">
            <div className="splashLogoContainer">
              <div className="mask" />
              <div className="mask" />
              <div className="mask" />
              <Logo />
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}
