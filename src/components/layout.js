import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
// import Image from "../components/image";
import Logo from "../images/Logo";
// import Header from "./header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="background" />
        <div className="wrapper">
          <header>
            <Logo />
          </header>
          <main>{children}</main>
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
