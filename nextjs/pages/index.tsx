import type { NextPage } from 'next';
import {
  Banner,
  HomePrimaryCards,
  HomeFavoritesCards,
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
        <HomeFavoritesCards />
        <HomeCloudCards />
        <HomeDatabaseCards />
        <HomeSecondaryCards />
      </div>
    </div>
  );
};

export default Home;
