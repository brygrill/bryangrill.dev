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
        header="Everyday I use"
        items={tech.everyday}
        size="70%"
        repeat={4}
      />
      <ImageGrid
        header="I also worked with"
        items={tech.sometimes}
        size="60%"
        repeat={5}
      />
    </Box>
  );
};

export default Tech;
