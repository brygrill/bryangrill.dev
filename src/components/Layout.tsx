import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Box } from 'rebass';

import '../styles/index.css';

import Menu from './Menu';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
          ]}
        />
        <Menu />
        <Box
          sx={{
            mx: 'auto',
            // maxWidth: 768,
            p: [2, 3, 4],
            fontFamily: 'body',
          }}
        >
          <main>{children}</main>
        </Box>
      </div>
    )}
  />
);

export default IndexLayout;
