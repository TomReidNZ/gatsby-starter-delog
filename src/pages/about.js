import React, { Component } from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import config from "../../data/SiteConfig";

import Layout from "../layout";
import SEO from "../components/SEO";
import SocialMediaAbout from "../components/SocialMedia/about-social.js";

// import ImageHero from "../components/ImageHero";
// import TopicList from "../components/TopicList";
import "./about.scss";

class AboutPage extends Component {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { topics },
        },
        markdownRemark: featuredPostNode,
      },
      location: { pathname },
    } = this.props;
    const pageMeta = {
      title: "About",
      description: "Lorum ipsum",
      cover: "https://spaceholder.cc/400x300",
      path: `${pathname}`,
    };
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        {/* <ImageHero
          title="Tom Reid"
          subtitle="Mission statement here"
          image="https://spaceholder.cc/350x300"
          imageAlt="Tom Reid"
        /> */}
        <Container id="about-main">
          <div className="about-social-container">
            <div className="about-title-container">
              <h2 className="about-tom-reid">Tom Reid</h2>
              <h4 className="about-ml-specialist">CEO</h4>
            </div>
            <div id="about-social-main">
              <SocialMediaAbout userLinks={config.userLinks} />
            </div>
            <div className="about-text-container">
              <p>
                I am a machine learning engineer and ethics specialist. With a
                strong track record of ownership and execution in various
                fields, I have helped deliver multi-million dollar projects
                for some of the largest companies in the world. I am a founding
                member of the Partnership on AI safety-critical expert group,
                nominated by the AI Forum of New Zealand.
              </p>
              <p>
                I lead projects building solutions under extremely short
                timeframes. I build understandable solutions for traditional
                machine learning, deep learning, computer vision, and LSTM / GRU
                applications using Python (TensorFlow / Keras, PyTorch, ), R,
                React.js, and ML.NET.
              </p>
              <p>
                I've written popular online educational courses encompassing
                many different fields. I'm skilled in designing curriculums and
                simple explanations for difficult concepts.
              </p>
            </div>
          </div>
          {/* {featuredPostNode && (
            <div>
              <h2>Featured Article: {featuredPostNode.title}</h2>
              <p>{featuredPostNode.excerpt}</p>
            </div>
          )}
          <TopicList topics={topics} title="Topics" /> */}
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(fields: { slug: { eq: "how-i-built-this-site" } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        tags
        topics
        cover
        date
      }
      fields {
        slug
        filePath
        date
      }
    }
    site {
      siteMetadata {
        topics {
          title
          cover
          slug
          description
        }
      }
    }
  }
`;
