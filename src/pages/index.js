import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <meta
          name="w3l-domain-verification"
          content="5ea0cfd50b5c6CF_Domain_verify"
        />
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {/* {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />} */}
      </Helmet>
      <HeroHeader />
      <h2>Who we are</h2>
      <p>
        We are a small team of high-end experts and enthusiastic intermediates.
        We work with small companies to some of the largest companies in the
        world.
      </p>
      <h2>What we do</h2>
      <p>
        End-to-end project delivery for AI, web, and cloud projects.
        Development, data science, marketing, online education, and project
        management. We offer support contracts to ensure everything keeps
        working.
      </p>
      <h2>Why we're different</h2>
      <p>
        We are efficient remote contractors without the overheads, maximizing
        value creation for organizations. We focus on making our clients
        successful and long-term relationships. We can scale quickly, never ship
        a substandard product, and we always deliver.
      </p>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
