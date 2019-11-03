import * as React from 'react';
import { Tiles, Image } from 'rebass';

export const Social = () => {
  return (
    <Tiles width={[96, null, 128]}>
      <Image src={props.image} />
      <Image src={props.image} />
      <Image src={props.image} />
      <Image src={props.image} />
    </Tiles>
  );
};
