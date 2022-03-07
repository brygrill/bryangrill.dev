import * as React from 'react';
import { Box, Text, Link, Heading } from 'rebass';

import Layout from '../components/Layout';

const CreditsPage = () => (
  <Layout maxWidth={962}>
    <Box
      sx={{
        py: [3, 5],
        px: [1, 3, 5],
      }}
    >
      <Heading sx={{ p: 2 }}>This site was built with:</Heading>
      <Box sx={{ px: 4, py: 1 }}>
        <Text>
          Built with: <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
        </Text>
        <Text>
          Starter:{' '}
          <Link href="https://github.com/resir014/gatsby-starter-typescript-plus">
            gatsby-starter-typescript-plus
          </Link>
        </Text>
        <Text>
          Styled with: <Link href="https://rebassjs.org/">Rebass</Link>
        </Text>
        <Text>
          Logos: <Link href="https://svgporn.com/">SVG Porn</Link>
        </Text>
        <Text>
          Illustration: <Link href="https://undraw.co/">unDraw</Link>
        </Text>
      </Box>
    </Box>
  </Layout>
);

export default CreditsPage;
