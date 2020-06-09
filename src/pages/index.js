import React from "react";
import { graphql, Link } from "gatsby";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Layout from "../layout";
import SEO from "../components/SEO";
import { getArticlesFromPostEdges } from "../utility/articles";
import ArticleList from "../components/ArticleList";
import ImageHero from "../components/ImageHero";
import TopicList from "../components/TopicList";

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
    const articles = getArticlesFromPostEdges(postEdges);
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        {/* <Container className="main-page-body"> */}
        <div className="section purple-section">
          <img className="section-logo" src={"./a.svg"} />
          <div className="title-container">
            <h1>Making better technology, together.</h1>
          </div>
        </div>
        <div className="section section-2">
          <div className="purple-small-title">
            <h5>BLEEDING-EDGE EXPERTISE</h5>
          </div>
          <div className="section-content">
            You need a partner that's with you on the cutting edge, who
            understands what you're working on, and who can translate that
            knowledge for any audience - from the C-suite down.
          </div>
        </div>
        <div className="section purple-section">
          <div className="title-wrapper">
            <h5 className="white-small-title">BEST - IN - CLASS SERVICES</h5>
          <div className="line" />
          </div>
          <div className="services-list">
            <div className="services-list-items" key="ai_and_ml">
              <div className="image-wrapper">
                <img
                  className="services-vector"
                  src={"./images/ai_and_ml.svg"}
                />
              </div>
              <h5 className="service-title">AI AND ML</h5>
            </div>
            <div className="services-list-items" key="online_education">
              <div className="image-wrapper">
                <img
                  className="services-vector"
                  src={"./images/online_education.svg"}
                />
              </div>
              <h5 className="service-title">ONLINE EDUCATION</h5>
            </div>
            <div className="services-list-items" key="responsible_ai">
              <div className="image-wrapper">
                <img
                  className="services-vector"
                  src={"./images/responsible_ai.svg"}
                />
              </div>
              <h5 className="service-title">RESPONSIBLE AI</h5>
            </div>
            <div className="services-list-items" key="ai_and_ml">
              <div className="image-wrapper">
                <img className="services-vector" src={"./images/b.svg"} />
              </div>
              <h5 className="service-title">HEALTHCARE</h5>
            </div>
            <div className="services-list-items" key="strategy">
              <div className="image-wrapper">
                <img
                  className="services-vector"
                  src={"./images/strategy.svg"}
                />
              </div>
              <h5 className="service-title">STRATEGY</h5>
            </div>
            <div className="services-list-items" key="software">
              <div className="image-wrapper">
                <img
                  className="services-vector"
                  src={"./images/software.svg"}
                />
              </div>
              <h5 className="service-title">SOFTWARE</h5>
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
