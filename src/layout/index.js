import "../styles/styles.scss";

import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import "../styles/bootstrap.scss";


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <div className="main">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
            {/* <link
              href="/fonts/fonts.css"
              rel="stylesheet"
            /> */}
          </Helmet>
          <main>{children}</main>
        </div>
    );
  }
}
