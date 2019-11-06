import * as React from 'react';
import { Box, Heading, Image } from 'rebass';

import undraw from '../images/undraw_code_1.svg';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: '1fr 1fr',
        '@media screen and (max-width: 40em)': {
          gridTemplateColumns: 'none',
        },
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          p: 3,
          '@media screen and (max-width: 40em)': {
            order: 1,
          },
        }}
      >
        <Heading
          sx={{
            fontSize: [4, 5, 6],
            py: 1,
          }}
        >
          Hi, my name is Bryan.
        </Heading>
        <Heading
          sx={{
            fontSize: [1, 2, 3],
          }}
        >
          I am a software developer from Pennsylvania. I work on the frontend,
          backend, and in the cloud. I especially enjoy building web
          applications with React.
        </Heading>
      </Box>
      <Box sx={{ p: 3 }}>
        <Image src={undraw} />
      </Box>
    </Box>
  );
};

export default Header;
