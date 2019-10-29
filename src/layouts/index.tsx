import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';

import 'modern-normalize';
import '../styles/normalize';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

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
        <ThemeProvider theme={theme}>
          <header>Navigation</header>
          <div>{children}</div>
        </ThemeProvider>
      </div>
    )}
  />
);

export default IndexLayout;
