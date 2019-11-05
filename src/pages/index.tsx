import * as React from 'react';
import { Box } from 'rebass';
import Layout from '../layouts';

import Header from '../components/Header';
import Social from '../components/Social';
import Tech from '../components/Tech';

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        minHeight: '300px',
      }}
    >
      <Header />
      <Social />
      <Tech />
    </Box>
  </Layout>
);

export default IndexPage;
