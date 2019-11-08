import * as React from 'react';
import { Flex, Box } from 'rebass';

import Nav from './Nav';
import Social from './Social';

import { features } from '../config';

const Menu = () => {
  return (
    <Flex
      sx={{
        p: 3,
        fontWeight: 'bold',
        fontFamily: 'body',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ justifyContent: 'flex-start' }}>{features.nav && <Nav />}</Box>
      <Box sx={{ justifyContent: 'flex-end' }}>
        <Social />
      </Box>
    </Flex>
  );
};

export default Menu;
