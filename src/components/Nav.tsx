import * as React from 'react';
import { Flex, Link } from 'rebass';

const items = [
  { title: 'Home', href: '#!' },
  { title: 'Projects', href: '#projects' },
  { title: 'Articles', href: '#articles' },
  { title: 'Snippets', href: '#snippets' },
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
          <Link variant="nav" sx={{ fontSize: [2, 3] }} href={i.href}>
            {i.title}
          </Link>
        );
      })}
    </Flex>
  );
};

export default Nav;
