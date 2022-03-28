import type { NextPage } from 'next';
import { Banner, HomePrimaryCards, HomeSecondaryCards } from '../components';

/** Render Home page */
const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <HomePrimaryCards />
      <HomeSecondaryCards />
    </div>
  );
};

export default Home;
