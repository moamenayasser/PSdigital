"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const AboutPS = ({ locale, data }) => {
  return (
    <div className="bg-slate-900 py-[3rem] relative">
      <Marquee
        speed={15}
        className="absolute overflow-hidden top-[-100px] ps-bg"
      >
        <h1 className="z-1 font-bold text-white text-xl sm:text-[14rem] leading-[20rem] flex opacity-5">
          {data?.Name}
        </h1>
      </Marquee>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-18 py-[4rem] space-y-8">
        <div className="max-w-7xl text-center mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl leading-[4rem] text-white"
          >
            {data?.DescriptionShort}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};
export default AboutPS;
