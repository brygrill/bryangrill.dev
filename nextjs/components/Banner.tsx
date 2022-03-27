import Image from 'next/image';
import bannerImg from '../public/images/banner.svg';

/** Render Hero image and Banner text */
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8">
      <span className="p-2 md:p-0 md:pr-2">
        <h1 className="text-6xl font-bold">Hi!</h1>
        <h3 className="text-2xl">
          {`I'm Bryan and I'm software developer. I work on the frontend, backend,
        and in the cloud.`}
        </h3>
      </span>
      <span>
        <Image src={bannerImg} alt="Hero image" />
      </span>
    </div>
  );
};

export default Banner;
