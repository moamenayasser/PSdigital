"use client";
import { motion } from "framer-motion";

const Solution = ({ data }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex dark:text-white flex-col sm:flex-row text-[#001d35] rounded-[20px] mb-[30px] py-[43px] pr-[51px] pl-[49px] max-[767px]:px-[20px]"
      >
        {data?.DescriptionShort && (
          <h4 className="mb-2 text-2xl text-[#fba01c] sm:w-1/4 w-full">
            {data.DescriptionShort}
          </h4>
        )}
        <div
          className="sm:w-3/4 w-full"
          dangerouslySetInnerHTML={{ __html: data.DescriptionLong }}
        />
      </motion.div>
    </>
  );
};

export default Solution;
