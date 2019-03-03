import React, { Component } from "react";
import "../styles/index.sass";
import SEO from "../components/seo";
import SplashScreen from "../components/SplashScreen";
import LandingPage from "../components/LandingPage";

export default class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SplashScreen />
        <LandingPage />
      </>
    );
  }
}
