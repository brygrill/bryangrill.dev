import * as React from 'react';
import { Flex, Box, Heading } from 'rebass';

const Header = () => {
  return (
    <Box
      sx={
        {
          // p: [2, 3, 4],
        }
      }
    >
      <Heading
        sx={{
          fontSize: [4, 5, 6],
          py: 1,
        }}
      >
        Hi, my name is Bryan.
      </Heading>
      <Heading fontSize={[1, 2, 3]}>
        I am a software developer from Pennsylvania. I work on the frontend,
        backend, and in the cloud. I especially enjoy building web applications
        with React.
      </Heading>
    </Box>
  );
};

export default Header;
