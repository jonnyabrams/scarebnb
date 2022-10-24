import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/scarebnb-banner.jpeg"
        layout="fill"
        objectFit="cover"
        alt="SpareBnb banner"
      />

      <div className="absolute w-full text-center top-1/2">
        <p className="text-lg text-white sm:text-xl md:text-2xl">Not sure where to go? Perfect.</p>

        <button className="px-10 py-4 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
