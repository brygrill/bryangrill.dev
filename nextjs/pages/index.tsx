import type { NextPage } from 'next';
import {
  Banner,
  HomePrimaryCards,
  HomeSecondaryCards,
  HomeCloudCards,
  HomeDatabaseCards,
} from '../components';

/** Render Home page */
const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <div className="py-4">
        <HomePrimaryCards />
        <HomeSecondaryCards />
        <HomeDatabaseCards />
        <HomeCloudCards />
      </div>
    </div>
  );
};

export default Home;
