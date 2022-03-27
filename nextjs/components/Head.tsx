import NextHead from 'next/head';

/** Render Next.js Head component across pages */
const Head = () => {
  return (
    <NextHead>
      <title>Bryan Grill</title>
      <meta
        name="description"
        content="Software Developer | TypeScript | React | NodeJS"
      />
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  );
};

export default Head;
