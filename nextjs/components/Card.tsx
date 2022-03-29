import Image from 'next/image';

interface CardProps {
  label: string;
  src: string;
  height?: number;
  width?: number;
}

export const Card = ({ label, src, height = 64, width = 64 }: CardProps) => {
  return (
    <div className="p-4 w-full md:w-auto bg-slate-500 rounded-md flex items-center flex-col">
      <span>
        <Image src={src} alt={`${label} logo`} height={height} width={width} />
      </span>
      <div className="text-slate-900 text-xl">{label}</div>
    </div>
  );
};

interface CardGroupProps {
  cards: CardProps[];
  height?: number;
  width?: number;
}

export const CardGroup = ({ cards, height, width }: CardGroupProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {cards.map(({ label, src, height: cardHeight, width: cardWidth }) => (
        <Card
          key={label}
          height={cardHeight || height}
          width={cardWidth || width}
          label={label}
          src={src}
        />
      ))}
    </div>
  );
};
