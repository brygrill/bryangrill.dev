import * as React from 'react';
import { Flex, Box, Heading, Image } from 'rebass';

const ImageGrid = ({
  header,
  items,
  size,
  repeat,
}: {
  header: string;
  items: { src: string; id: string }[];
  size: string;
  repeat: number;
}) => {
  return (
    <Box sx={{ pb: 5 }}>
      <Heading
        sx={{
          fontSize: [2, 3, 4],
          mb: 4,
        }}
      >
        {header}
      </Heading>
      <Box
        sx={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: `repeat(${repeat}, minmax(128px, 1fr))`,
          '@media screen and (max-width: 40em)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          },
        }}
      >
        {items.map(i => {
          return (
            <Flex
              key={i.id}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Image src={i.src} sx={{ p: 2, width: ['80%', size] }} />
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default ImageGrid;
