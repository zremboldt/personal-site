import React from "react";
import { useTransition, animated } from "react-spring";
import Logo from "../images/logo";

export default function SplashScreen({ splashScreenIsVisible }) {
  const transition = useTransition(splashScreenIsVisible, {
    initial: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transition((styleProps, isVisible) => isVisible && (
    <animated.div style={styleProps} className="splashscreen">
      <div className="splashLogoContainer">
        <div className="mask" />
        <div className="mask" />
        <div className="mask" />
        <Logo />
      </div>
    </animated.div>
  ))
}
