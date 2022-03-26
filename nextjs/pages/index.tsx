import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bryan Grill</title>
        <meta
          name="description"
          content="Software Developer | TypeScript | React | NodeJS"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </main>
    </div>
  );
};

export default Home;
