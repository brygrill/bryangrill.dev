import * as React from 'react';
import { Box } from 'rebass';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Tech from '../components/Tech';

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        py: [3, 5],
        px: 2,
      }}
    >
      <Header />
    </Box>
    <Box
      sx={{
        py: [3, 5],
        px: [1, 3, 5],
      }}
    >
      <Tech />
    </Box>
  </Layout>
);

export default IndexPage;
