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
          Hi!
        </Heading>
        <Heading
          sx={{
            fontSize: [1, 2, 3],
          }}
        >
          I'm Bryan and I'm software developer. I work on the frontend, backend,
          and in the cloud.
        </Heading>
      </Box>
      <Box sx={{ p: 3 }}>
        <Image src={undraw} />
      </Box>
    </Box>
  );
};

export default Header;
