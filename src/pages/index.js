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

class Index extends React.Component {
  render() {
    const pageMeta = {
      title: "AI Engineering Limited",
      description: "A full-service technology agency",
      cover: "https://spaceholder.cc/400x300",
      path: "/"
    };
    const {
      data: {
        site: {
          siteMetadata: { topics }
        },
        allMarkdownRemark: { edges: postEdges }
      }
    } = this.props;
    const articles = getArticlesFromPostEdges(postEdges);
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        {/* <Container className="main-page-body"> */}
          <div className="section-1">
            <img src={"./a.svg"}/>
            <h1 className="title">Making better technology, together.</h1>
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
