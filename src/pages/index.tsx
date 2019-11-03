import * as React from 'react';
import { Box } from 'rebass';
import Layout from '../layouts';

import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        minHeight: '300px',
      }}
    >
      <Header />
    </Box>
  </Layout>
);

export default IndexPage;
