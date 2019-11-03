import * as React from 'react';
import { Box } from 'rebass';
import Layout from '../layouts';

import Header from '../components/Header';
import Social from '../components/Social';

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        minHeight: '300px',
      }}
    >
      <Header />
      <Social />
    </Box>
  </Layout>
);

export default IndexPage;
