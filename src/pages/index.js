import React, { Component } from "react";
// import { Link } from "gatsby";
import "../styles/index.sass";
import SEO from "../components/seo";
import SplashScreen from "../components/SplashScreen";
import Landing from "./landing";
import RouteTransition from "../components/RouteTransition";
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
        <RouteTransition>
          <SplashScreen />
          <Landing />
        </RouteTransition>
      </>
    );
  }
}
