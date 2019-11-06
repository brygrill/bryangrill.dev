import * as React from 'react';
import { Flex, Box, Link } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { social } from '../config';

const Social = () => {
  return (
    <Flex sx={{ justifyContent: 'flex-end', pt: 1 }}>
      {social.map(i => {
        return (
          <Box sx={{ mr: [1, 2] }}>
            <Link href="www.google.com" variant="nav">
              <FontAwesomeIcon icon={i.src} size="2x" />
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Social;
