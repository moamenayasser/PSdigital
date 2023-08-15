import Marquee from "react-fast-marquee";

// "use client";
const AboutPS = ({ locale, data }) => {
  return (
    <div className="bg-slate-900 relative">
      <Marquee className="absolute top-[20%] ps-bg">
        <h1 className="z-1 font-bold text-white text-xl sm:text-[14rem] leading-[14rem] flex opacity-5">
          {data?.Name}
        </h1>
      </Marquee>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          {/* <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-white text-3xl sm:text-5xl">
              {data?.Name}
            </h1>
          </div> */}

          <div className="max-w-7xl text-center mx-auto">
            <h2 className="text-5xl leading-[4rem] text-white">
              {data?.DescriptionShort}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPS;
