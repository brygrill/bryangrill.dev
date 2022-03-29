import { CardGroup } from './Card';
import { primary, favorite, secondary, cloud, database } from '../config/cards';

export const HomePrimaryCards = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold pb-2">Everyday I use</h4>
      <CardGroup
        cards={primary}
        height={120}
        width={120}
        cols="md:grid-cols-2"
      />
    </div>
  );
};

export const HomeFavoritesCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">I love working with</h4>
      <CardGroup cards={favorite} height={108} width={108} />
    </div>
  );
};

export const HomeCloudCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">{`I've built apps on`}</h4>
      <CardGroup cards={cloud} />
    </div>
  );
};

export const HomeDatabaseCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">{`I've built apps with`}</h4>
      <CardGroup cards={database} />
    </div>
  );
};

export const HomeSecondaryCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">I also develop with</h4>
      <CardGroup cards={secondary} cols="md:grid-cols-4" />
    </div>
  );
};
