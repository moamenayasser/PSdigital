"use client";
import { motion } from "framer-motion";

const Results = ({ data }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-10 py-8">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-[50%] text-[#001d35] dark:text-white rounded-[20px] mb-[30px] py-[43px] pr-[51px] pl-[49px] max-[767px]:px-[20px]"
        >
          {data?.DescriptionShort && (
            <h4 className="mb-2">{data.DescriptionShort}</h4>
          )}
          <div dangerouslySetInnerHTML={{ __html: data.DescriptionLong }} />
        </motion.div>
        <div className="w-full sm:w-[50%]">
          <motion.img
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={data?.ImageUrl}
            alt={data?.Name}
            className="rounded-[20px] h-[400px] object-cover
              w-full "
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full mb-8"
      >
        <img
          src={data?.FeatureMediumImage}
          alt={data?.Name}
          className="rounded-[20px]
              w-full h-[500px] object-cover"
        />
      </motion.div>
    </>
  );
};

export default Results;
