import React, { Component } from "react";
import "../styles/index.sass";
import SEO from "../components/seo";
import SplashScreen from "../components/SplashScreen";
import LandingPage from "../components/LandingPage";

export default class IndexPage extends Component {
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
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SplashScreen showSplashScreen={showSplashScreen} />
        <LandingPage showSplashScreen={showSplashScreen} />
      </>
    );
  }
}
