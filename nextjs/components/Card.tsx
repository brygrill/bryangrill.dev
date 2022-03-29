import Image from 'next/image';

interface CardProps {
  label: string;
  hw: number;
  src: string;
}

export const Card = ({ label, hw, src }: CardProps) => {
  return (
    <div className="p-4 w-full md:w-auto bg-slate-500 rounded-md flex items-center flex-col">
      <span>
        <Image src={src} alt={`${label} logo`} height={hw} width={hw} />
      </span>
      <div className="text-slate-900 text-xl">{label}</div>
    </div>
  );
};

interface CardGroupProps {
  cards: Omit<CardProps, 'hw'>[];
  hw: number;
}

export const CardGroup = ({ cards, hw }: CardGroupProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {cards.map(({ label, src }) => (
        <Card key={label} hw={hw} label={label} src={src} />
      ))}
    </div>
  );
};
