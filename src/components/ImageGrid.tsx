import * as React from 'react';
import { Card, Flex, Box, Heading, Image } from 'rebass';

const ImageGrid = ({
  header,
  items,
  size,
  repeat,
}: {
  header: string;
  items: { src: string; id: string; label?: string }[];
  size: string;
  repeat: number;
}) => {
  return (
    <Box sx={{ pb: 5 }}>
      <Heading
        sx={{
          fontSize: [3, 4, 5],
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
        {items
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map(i => {
            return (
              <Flex
                key={i.id}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '15rem',
                    backgroundColor: '#5e5e5e1a',
                  }}
                >
                  <Image
                    src={i.src}
                    sx={{ p: 2, width: ['80%', size], minHeight: '175px' }}
                  />
                  <Heading>{i.label || i.id}</Heading>
                </Card>
              </Flex>
            );
          })}
      </Box>
    </Box>
  );
};

export default ImageGrid;
