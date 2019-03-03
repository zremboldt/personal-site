import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";
import Logo from "../images/Logo";

export default class SplashScreen extends Component {
  state = { showSplashScreen: true };

  componentDidMount() {
    this.hideSplashScreen();
  }

  hideSplashScreen = () => {
    setTimeout(() => {
      this.setState({ showSplashScreen: false });
    }, 2800);
  };

  render() {
    const { showSplashScreen } = this.state;
    return (
      // <Spring
      //   native
      //   config={{ delay: 2700, tension: 120, friction: 40 }}
      //   from={{ opacity: 1 }}
      //   to={{ opacity: 0 }}
      // >
      //   {props => (
      <Transition
        native
        items={showSplashScreen}
        initial={{ opacity: 1 }}
        // from={{ opacity: 1 }}
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
      // </Spring>
    );
  }
}
