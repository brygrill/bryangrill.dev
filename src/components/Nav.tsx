import * as React from 'react';
import { Flex, Link } from 'rebass';

import { nav } from '../config';

const Nav = () => {
  return (
    <Flex
      sx={{
        p: 3,
        fontWeight: 'bold',
        fontFamily: 'body',
        justifyContent: 'center',
      }}
    >
      {nav.map(i => {
        return (
          <Link
            variant="nav"
            sx={{ fontSize: [1, 2, 3], mx: [2, 3], p: 0 }}
            href={`#${i.href}`}
          >
            {i.title}
          </Link>
        );
      })}
    </Flex>
  );
};

export default Nav;
