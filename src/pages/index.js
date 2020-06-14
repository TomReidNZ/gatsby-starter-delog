import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import { getArticlesFromPostEdges } from "../utility/articles";

import "./index.scss";

class Index extends React.Component {
  render() {
    const pageMeta = {
      title: "AI Engineering Limited",
      description: "A full-service technology agency",
      cover: "https://spaceholder.cc/400x300",
      path: "/",
    };
    const {
      data: {
        site: {
          siteMetadata: { topics },
        },
        allMarkdownRemark: { edges: postEdges },
      },
    } = this.props;
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        {/* <Container className="main-page-body"> */}
        <div className="section purple-section">
          <div className="section-wrapper">
          <img className="section-logo" src={"./a.svg"} />
          <div className="title-container">
            <h1>Making better technology, together.</h1>
          </div>
          </div>
        </div>
        <div className="dev">
          <div className="section section-2">
            <div className="content-wrapper">
              <div className="purple-small-title">
                <h5>BLEEDING-EDGE EXPERTISE</h5>
              </div>
              <div className="section-content">
                You need a partner that's with you on the cutting edge, who
                understands what you're working on, and who can translate that
                knowledge for any audience - from the C-suite down.
              </div>
            </div>
            <div className="image-section-center">
              <div className="image-section-wrapper">
                <img
                  className="section-2-image"
                  src={"./images/section-2-image.png"}
                />
              </div>
            </div>
          </div>
          <div className="section purple-section section-3">
            <div className="title-wrapper">
              <h5 className="white-small-title">BEST - IN - CLASS SERVICES</h5>
              <div className="line" />
            </div>
            <div className="services-list">
              <div className="item-wrapper">
                <div className="image-wrapper">
                  <img
                    className="services-vector v23"
                    src={"./images/ai_and_ml.svg"}
                  />
                </div>
                <div className="service-title">
                  <h5>AI AND ML</h5>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="image-wrapper">
                  <img
                    className="services-vector v21"
                    src={"./images/online_education.svg"}
                  />
                </div>
                <div className="service-title online-h5">
                  <h5>ONLINE EDUCATION</h5>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="image-wrapper">
                  <img
                    className="services-vector v23"
                    src={"./images/responsible_ai.svg"}
                  />
                </div>
                <div className="service-title">
                  <h5>RESPONSIBLE AI</h5>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="image-wrapper">
                  <img className="services-vector v22" src={"./images/b.svg"} />
                </div>
                <div className="service-title">
                  <h5>HEALTHCARE</h5>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="image-wrapper">
                  <img
                    className="services-vector v20"
                    src={"./images/strategy.svg"}
                  />
                </div>
                <div className="service-title">
                  <h5>STRATEGY</h5>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="image-wrapper">
                  <img
                    className="services-vector v23"
                    src={"./images/software.svg"}
                  />
                </div>
                <div className="service-title">
                  <h5>SOFTWARE</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-4">
            <div className="lady-image-wrapper">
              <img className="lady-image" src={"./images/lady.jpg"} />
            </div>
            <div className="purple-container">
              <div className="purple-small-title">
                <h5>A FULL SERVICE AGENCY</h5>
              </div>
              <div className="section-content">
                You need a partner that can deliver projects end-to-end? That's
                us.
                <br></br>
                <br></br>
                We can cover every part of the process, saving you from dealing
                with too many vendors, and most importantly, delivering a
                polished project on time.
              </div>
            </div>
          </div>
          <div className="section purple-section section-5">
            <div className="purple-section-content">
              Coding samples.<br></br>
              Curriculum building.<br></br>
              Medical imaging.<br></br>
              Everything data.
              <div className="line-bottom" />
            </div>
          </div>
        </div>
        {/* </Container> */}
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        topics {
          title
          slug
          description
          cover
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 580)
          timeToRead
          frontmatter {
            title
            tags
            topics
            cover
            date
          }
        }
      }
    }
  }
`;
