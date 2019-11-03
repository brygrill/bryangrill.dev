import * as React from 'react';
import { Flex, Image } from 'rebass';

import { social } from '../config';

const Social = () => {
  return (
    <Flex sx={{ justifyContent: 'center' }}>
      {social.map(i => {
        return <Image src={i.src} sx={{ maxWidth: 60, mx: 3, my: 4 }} />;
      })}
    </Flex>
  );
};

export default Social;
