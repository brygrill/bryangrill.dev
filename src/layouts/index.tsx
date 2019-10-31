import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Box } from 'rebass';

import '../styles/index.css';

import Nav from '../components/Nav';

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
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Nav />
        <Box
          sx={{
            // maxWidth: 512,
            mx: 'auto',
            p: 2,
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
