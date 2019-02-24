import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { workData } from "../components/data";
// import Image from "../components/image";
import Logo from "../images/Logo";
// import Header from "./header";
import WorkCard from "../components/WorkCard";
import ContactCard from "../components/ContactCard";

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
        {/* <div className="background" /> */}
        <div className="wrapper">
          <header>
            <Logo />
          </header>
          <main>{children}</main>
          <div className="ctr-right">
            <div className="ctr-work desktop">
              {workData.map((item, i) => (
                <WorkCard work={item} key={i} />
              ))}
            </div>
            <ContactCard />
          </div>
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
