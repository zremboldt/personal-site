// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "../components/image";

const Header = ({ siteTitle }) => (
  <header className="containerLogo">
    <div className="logo">
      <Image />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
