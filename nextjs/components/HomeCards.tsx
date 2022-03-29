import { CardGroup } from './Card';
import { primary, secondary } from '../config/cards';

export const HomePrimaryCards = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold pb-2">Everyday I Work With</h4>
      <CardGroup cards={primary} hw={108} />
    </div>
  );
};

export const HomeSecondaryCards = () => {
  return (
    <div className="pt-6 md:pt-10">
      <h4 className="text-xl font-semibold pb-2">
        I Also Have Experience With
      </h4>
      <CardGroup cards={secondary} hw={64} />
    </div>
  );
};
