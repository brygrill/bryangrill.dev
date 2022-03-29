import { CardGroup } from './Card';
import { primary, secondary, cloud, database } from '../config/cards';

export const HomePrimaryCards = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold pb-2">Everyday I use</h4>
      <CardGroup cards={primary} hw={108} />
    </div>
  );
};

export const HomeSecondaryCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">I also work with</h4>
      <CardGroup cards={secondary} hw={64} />
    </div>
  );
};

export const HomeCloudCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">{`I've built apps on`}</h4>
      <CardGroup cards={cloud} hw={64} />
    </div>
  );
};

export const HomeDatabaseCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">{`I've built apps with`}</h4>
      <CardGroup cards={database} hw={64} />
    </div>
  );
};
