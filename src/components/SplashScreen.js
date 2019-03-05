import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import Logo from "../images/Logo";

export default class SplashScreen extends Component {
  render() {
    const { showSplashScreen } = this.props;
    return (
      <Transition
        native
        items={showSplashScreen}
        initial={{ opacity: 1 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {showSplashScreen =>
          showSplashScreen &&
          (props => (
            <animated.div style={props} className="splashscreen">
              <div className="splashLogoContainer">
                <div className="mask" />
                <div className="mask" />
                <div className="mask" />
                <Logo />
              </div>
            </animated.div>
          ))
        }
      </Transition>
    );
  }
}
