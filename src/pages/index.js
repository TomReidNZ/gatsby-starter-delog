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
        <div className="white-small-title">
            <h5>BEST - IN - CLASS SERVICES</h5>
          </div>
          <div className="line" />
          <ul className="services-list">
      <li className="services-list-items" key="">
        <img className="services-vector" src={"./a.svg"} />
      </li>
  </ul>         
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
