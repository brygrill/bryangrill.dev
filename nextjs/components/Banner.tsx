import Image from 'next/image';

/** Render Hero image and Banner text */
const Banner = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Banner image here</h1>{' '}
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </div>
  );
};

export default Banner;
