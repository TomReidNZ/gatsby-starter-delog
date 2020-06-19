import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";

import "./index.scss";

class Index extends React.Component {
  render() {
    const pageMeta = {
      title: "AI Engineering Limited",
      description: "A full-service technology agency",
      cover: "https://spaceholder.cc/400x300",
      path: "/",
    };
    // const {
    //   data: {
    //     site: {
    //       siteMetadata: {  },
    //     },
    //     allMarkdownRemark: {  },
    //   },
    // } = this.props;
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        <div className="section purple-section">
          <img className="section-logo" src={"./a.svg"} alt="logo" />
          <h1>Making better technology, together.</h1>
        </div>
        <div className="section section-2">
          <div className="content-wrapper">
            <h5 className="purple-small-title">BLEEDING-EDGE EXPERTISE</h5>
            <div className="section-content">
              You need a partner that's with you on the cutting edge, who
              understands what you're working on, and who can translate that
              knowledge for any audience - from the C-suite down.
            </div>
          </div>
          <div className="image-section-center">
            <div className="image-section-wrapper">
              <div className="image-2-wrapper">
                <img
                  className="section-2-image"
                  src={"./images/section-2-image.jpg"}
                  alt="suit with a brain"
                />
              </div>
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
                  alt="brain"
                />
              </div>
              <h5 className="service-title">AI AND ML</h5>
            </div>
            <div className="item-wrapper">
              <div className="image-wrapper">
                <img
                  className="services-vector v21"
                  src={"./images/online_education.svg"}
                  alt="computer screen with graduation hat"
                />
              </div>
              <h5 className="service-title online-h5">ONLINE EDUCATION</h5>
            </div>
            <div className="item-wrapper">
              <div className="image-wrapper">
                <img
                  className="services-vector v23"
                  src={"./images/responsible_ai.svg"}
                  alt="hands shaking"
                />
              </div>
              <h5 className="service-title">RESPONSIBLE AI</h5>
            </div>
            <div className="item-wrapper">
              <div className="image-wrapper">
                <img
                  className="services-vector v22"
                  src={"./images/b.svg"}
                  alt="phone with medical gear"
                />
              </div>
              <h5 className="service-title">HEALTHCARE</h5>
            </div>
            <div className="item-wrapper">
              <div className="image-wrapper">
                <img
                  className="services-vector v20"
                  src={"./images/strategy.svg"}
                  alt="clipboard"
                />
              </div>
              <h5 className="service-title">STRATEGY</h5>
            </div>
            <div className="item-wrapper">
              <div className="image-wrapper">
                <img
                  className="services-vector v23"
                  src={"./images/software.svg"}
                  alt="brackets"
                />
              </div>
              <h5 className="service-title">SOFTWARE</h5>
            </div>
          </div>
        </div>
        <div className="section section-4">
          <div className="lady-image-grid">
            {/* <div className="lady-section-wrapper"> */}
              <div className="lady-image-wrapper">
                <img
                  className="lady-image"
                  src={"./images/lady.jpg"}
                  alt="lady with tablet"
                />
              </div>
            {/* </div> */}
          </div>
          <div className="content-wrapper">
            <div className="content-grid">
              <h5 className="purple-small-title">A FULL SERVICE AGENCY</h5>
              <p className="section-content c1">
                You need a partner that can deliver projects end-to-end? That's
                us.
              </p>
              <p className="section-content">
                We can cover every part of the process, saving you from dealing
                with too many vendors, and most importantly, delivering a
                polished project on time.
              </p>
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
        <div className="section section-6">
          <div className="form-wrapper">
            <h5 className="form-title">WE CAN'T WAIT TO WORK WITH YOU</h5>
            <div className="section-content">Contact us</div>
            <form
              className="form-container"
              action="https://sendmail.w3layouts.com/SubmitContactForm"
              method="post"
            >
              <div className="form-input f-name">
                <label htmlFor="w3lName">Name:</label>
                <input type="text" name="w3lName" id="w3lName" />
              </div>
              <div className="form-input f-email">
                <label htmlFor="w3lSender">Email:</label>
                <input type="email" name="w3lSender" id="w3lSender" />
              </div>
              <div className="form-input-hide">
                <label htmlFor="w3lSubject">Subject</label>
                <input
                  type="text"
                  name="w3lSubject"
                  id="w3lSubject"
                  value="contact-form"
                  readOnly
                />
              </div>
              <div className="form-input f-message">
                <label htmlFor="w3lMessage">Message:</label>
                <textarea name="w3lMessage" id="w3lMessage"></textarea>
              </div>
              <div
                className="f-button"
                style={{ display: "grid", justifyContent: "end" }}
              >
                <input
                  type="submit"
                  className="button -primary"
                  style={{ marginRight: 0 }}
                  value="SEND"
                />
              </div>
            </form>
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
