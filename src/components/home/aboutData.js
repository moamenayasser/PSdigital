"use client";
import { motion } from "framer-motion";
const AboutData = ({ data }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-left"
      >
        <h1 className="text-[#022441] absolute left-[0] hidden md:block top-[-40px] mx-auto text-center text-[120px] tracking-[8px] uppercase -z-10 max-[1024px]:text-[100px] opacity-20">
          <span className="heading-bg">Services</span>
        </h1>
        <h5 className="text-[#022441] dark:text-white capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-[#fba01c] after:left-0  after:mx-auto after:text-left ">
          {data?.Name}
        </h5>
        <h3 className="mb-[28px] text-[#022441] dark:text-white capitalize">
          {data?.Name}
        </h3>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 mb-4 text-gray-600 dark:text-gray-300  "
      >
        {data?.DescriptionShort}
      </motion.p>

      {data?.DescriptionLong && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          dangerouslySetInnerHTML={{ __html: data?.DescriptionLong }}
        />
      )}
    </>
  );
};

export default AboutData;
