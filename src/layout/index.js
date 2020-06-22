import "./layout.css"

import "../styles/styles.css";

import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="main">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
            {/* <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
              rel="stylesheet"
            /> */}
          </Helmet>
          <main>{children}</main>
        </div>
      </>
    );
  }
}
