import * as React from 'react';
import { Link as GLink } from 'gatsby';
import { Link } from 'rebass';

import { nav } from '../config';

const Nav = () => {
  return (
    <>
      {nav.map(i => {
        return (
          <Link
            key={i.title}
            variant="nav"
            sx={{ fontSize: [1, 2, 3], mx: [2, 3], p: 0 }}
            href={i.href}
            as={GLink}
          >
            {i.title}
          </Link>
        );
      })}
    </>
  );
};

export default Nav;
