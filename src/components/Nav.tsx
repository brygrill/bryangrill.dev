import * as React from 'react';
import { Flex, Link } from 'rebass';

const items = [
  { title: 'HOME', href: '#!' },
  { title: 'PROJECTS', href: '#projects' },
  { title: 'ARTICLES', href: '#articles' },
  { title: 'CODE', href: '#code' },
];

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
      {items.map(i => {
        return (
          <Link
            variant="nav"
            sx={{ fontSize: [1, 2, 3], mx: [2, 3], p: 0 }}
            href={i.href}
          >
            {i.title}
          </Link>
        );
      })}
    </Flex>
  );
};

export default Nav;
