import SplashScreen from "../components/splash-screen";
import LandingPage from "../components/landing-page";
import React, { useEffect, useState } from "react";
import "../styles/index.sass";
import Seo from "../components/seo";

export default function Index() {
  const [splashScreenIsVisible, setSplashScreenIsVisible] = useState(true);

  useEffect(() => setTimeout(() => setSplashScreenIsVisible(false), 2800), [])

  return (
    <>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SplashScreen splashScreenIsVisible={splashScreenIsVisible} />
      <LandingPage splashScreenIsVisible={splashScreenIsVisible} />
    </>
  );
}
