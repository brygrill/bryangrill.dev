import * as React from 'react';
import { Box } from 'rebass';
import Layout from '../layouts';

import Header from '../components/Header';
import Tech from '../components/Tech';

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        pt: [5, 6],
      }}
    >
      <Header />
    </Box>
    <Box
      sx={{
        pt: [5, 6],
      }}
    >
      <Tech />
    </Box>
  </Layout>
);

export default IndexPage;
