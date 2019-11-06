import * as React from 'react';
import { Box } from 'rebass';

import ImageGrid from './ImageGrid';

import { tech } from '../config';

const Tech = () => {
  return (
    <Box
      sx={{
        py: [2, 3, 4],
      }}
    >
      <ImageGrid
        header="Everyday I work with this software"
        items={tech.everyday}
      />
      <ImageGrid
        header="I've also work with this software"
        items={tech.sometimes}
      />
    </Box>
  );
};

export default Tech;
