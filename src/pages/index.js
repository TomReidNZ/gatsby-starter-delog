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
      title: "A full-service technology agency",
      description: "Artificial intelligence specialists",
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
        <ImageHero
          title="A full-service technology agency specializing in Artificial Intelligence"
          subtitle="We partner with clients to drive better business outcomes with best-in-class AI, communications, software development, and everything in between."
        />
        <Container className="main-page-body">
        <ul className="post-list list-unstyled">
          <li className="post-list__item" key="who-we-are">
            <Card className="blog-card">
              <Card.Body>
                <div className="desktop-container">
                <Card.Title>
                  <h4>
                      <div className="title-article">Who we are</div>
                  </h4>
                </Card.Title>
                </div>
                <div className="article-preview">We are a small team of high-end experts and enthusiastic intermediates.
        We work with small companies to some of the largest companies in the
        world.</div>
              </Card.Body>
            </Card>
          </li>
          <li className="post-list__item" key="what-we-do">
            <Card className="blog-card">
              <Card.Body>
                <div className="desktop-container">
                <Card.Title>
                  <h4>
                      <div className="title-article">What we do</div>
                  </h4>
                </Card.Title>
                </div>
                <div className="article-preview">End-to-end project delivery for AI, web, and cloud projects.
        Development, data science, marketing, online education, and project
        management. We offer support contracts to ensure everything keeps
        working.</div>
              </Card.Body>
            </Card>
          </li>
          <li className="post-list__item" key="why-were-different">
            <Card className="blog-card">
              <Card.Body>
                <div className="desktop-container">
                <Card.Title>
                  <h4>
                      <div className="title-article">Why we're different</div>
                  </h4>
                </Card.Title>
                </div>
                <div className="article-preview">We are efficient remote contractors without the overheads, maximizing
        value creation for organizations. We focus on making our clients
        successful and long-term relationships. We can scale quickly, never ship
        a substandard product, and we always deliver.</div>
              </Card.Body>
            </Card>
          </li>
      </ul>
          <div className="button-container">
          </div>
          <hr />
        </Container>
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
