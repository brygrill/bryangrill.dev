import Image from 'next/image';
import bannerImg from '../public/images/banner.svg';

/** Render Hero image and Banner text */
export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center pt-8 pb-8 md:pb-20">
      <span className="p-2 pb-6 md:p-0 md:pr-4">
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
