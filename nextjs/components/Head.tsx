import { useMemo } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { nav } from '../config';

const baseTitle = 'Bryan Grill - Software Developer';

/** Render Next.js Head component across pages */
export const Head = () => {
  const { route } = useRouter();
  const title = useMemo(() => {
    const match = nav.find(({ href }) => href === route);
    return match ? `${match.label} | ${baseTitle}` : baseTitle;
  }, [route]);
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="description"
        content="Personal website of software developer Bryan Grill. He enjoys working with React, TypeScript, and NodeJS."
      />
      <meta property="og:title" content="Bryan Grill - Software Developer" />
      <meta
        property="og:description"
        content="Personal website of software developer Bryan Grill."
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
