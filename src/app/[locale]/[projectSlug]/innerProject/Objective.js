"use client";
import { motion } from "framer-motion";

const Objective = ({ data }) => {
  console.log(data);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" text-[#001d35] dark:text-white rounded-[20px] mb-[30px] py-[43px] pr-[51px] pl-[49px] max-[767px]:px-[20px] max-[767px]:pt-[8rem]"
      >
        {data?.Name && (
          <h3 className="mt-[5px] mb-[27px] max-[767px]:text-[35px]">
            {data.Name}
            <span className="block text-[18px] mt-3">
              {data.DescriptionShort}
            </span>
          </h3>
        )}
        {/* {data?.DescriptionShort && (
          <h4 className="mb-2">{data.DescriptionShort}</h4>
        )} */}
        <div dangerouslySetInnerHTML={{ __html: data.DescriptionLong }} />
      </motion.div>

      <div className="flex flex-wrap gap-10 items-center justify-start pr-[15px] mb-5 max-[767px]:mb-[30px]">
        <motion.img
          initial={{ opacity: 0, y: 50, x: -50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          src={data?.FeatureImageUrl}
          alt={data?.Name}
          className="rounded-[20px] w-full
              sm:w-[48%] h-[620px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src={data?.FeatureMediumImage}
          alt={data?.Name}
          className="rounded-[20px] w-full
             sm:w-[48%] h-[620px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          src={data?.FeatureThumbnailImage}
          alt={data?.Name}
          className="rounded-[20px]
              w-full h-[600px]"
        />
      </div>
    </>
  );
};

export default Objective;
