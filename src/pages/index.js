import React, { Component } from "react";
// import { Link } from "gatsby";
import "../styles/index.sass";
import SplashScreen from "../components/SplashScreen";
import SEO from "../components/seo";
import { navigate } from "@reach/router";

export default class IndexPage extends Component {
  componentDidMount() {
    this.navigateToLanding();
  }

  navigateToLanding = () => {
    setTimeout(() => {
      navigate(`/landing`);
    }, 3000);
  };

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SplashScreen />
      </>
    );
  }
}
