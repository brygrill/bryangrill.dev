import Image from 'next/image';
import reactImg from '../public/images/logos/react.svg';

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface CardProps {
  label: string;
  hw: number;
  src: string;
}

export const Card = ({ label, hw, src }: CardProps) => {
  return (
    <div className="p-4 w-full md:w-auto bg-slate-600 rounded-md flex items-center flex-col">
      <span>
        <Image src={src} alt="Hero image" height={hw} width={hw} />
      </span>
      <div className="text-slate-900 text-xl">{label}</div>
    </div>
  );
};

export const CardGroup = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {test.map((item) => (
        <Card key={item} hw={96} label="React" src={reactImg} />
      ))}
    </div>
  );
};
