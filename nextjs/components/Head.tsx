import NextHead from 'next/head';

/** Render Next.js Head component across pages */
export const Head = () => {
  return (
    <NextHead>
      <title>Bryan Grill</title>
      <link rel="icon" href="/favicon.png" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="description"
        content="Personal website of software developer Bryan Grill. He enjoys working with React, Next.js, and TypeScript."
      />
      <meta property="og:title" content="Bryan Grill - Software Developer" />
      <meta
        property="og:description"
        content="Bryan Grill | Sofware Developer | React | NodeJS | TypeScript"
      />
      <meta
        property="og:image"
        content="https://bryangrill.dev/_next/static/media/banner.05498a78.svg"
      />
      <meta property="og:url" content="https://bryangrill.dev" />
      <meta
        name="twitter:card"
        content="Personal website of software developer Bryan Grill"
      />
      <meta
        property="og:site_name"
        content="Personal website of software developer Bryan Grill"
      />
      <meta name="twitter:image:alt" content="Banner image" />
    </NextHead>
  );
};
