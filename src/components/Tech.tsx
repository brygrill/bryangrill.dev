import * as React from 'react';
import { Flex, Box, Heading } from 'rebass';

const Tech = () => {
  return (
    <Box
      sx={{
        py: [2, 3, 4],
      }}
    >
      <Heading
        sx={{
          fontSize: [3, 4, 5],
          mb: 3,
        }}
      >
        Tech I Use
      </Heading>
      <Box
        sx={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }}
      >
        <Heading p={3} bg="muted">
          Hello
        </Heading>
        <Box p={3} color="background" bg="primary">
          CSS Grid
        </Box>
        <Heading p={3} bg="muted">
          Hello
        </Heading>
        <Box p={3} color="background" bg="primary">
          CSS Grid
        </Box>
        <Heading p={3} bg="muted">
          Hello
        </Heading>
        <Box p={3} color="background" bg="primary">
          CSS Grid
        </Box>
        <Heading p={3} bg="muted">
          Hello
        </Heading>
        <Box p={3} color="background" bg="primary">
          CSS Grid
        </Box>
      </Box>
    </Box>
  );
};

export default Tech;
