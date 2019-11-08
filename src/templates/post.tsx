import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const PostTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Layout maxWidth={768}>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <h2>{data.markdownRemark.frontmatter.date}</h2>
    <h3>By: {data.site.siteMetadata.author.name}</h3>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
