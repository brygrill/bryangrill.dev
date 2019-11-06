import * as React from 'react';
import { Flex, Link } from 'rebass';

import { nav } from '../config';

const Nav = () => {
  return (
    <>
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
    </>
  );
};

export default Nav;
