"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const ProjectIntro = ({ data }) => {
  return (
    <>
      <div className="mb-[30px] w-full relative bg-[#001d35] h-[80vh]  block pb-10 pt-6">
        <Marquee className="overflow-hidden" autoFill="true">
          {data?.Name && (
            <h1 className=" text-white text-xl sm:text-[12rem] tracking-[2px] whitespace-break-spaces leading-[16rem] opacity-10">
              {data.Name}{" "}
            </h1>
          )}
        </Marquee>
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-0 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex gap-10 sm:pt-[12%] whitespace-nowrap w-full sm:w-[50%] mb-2"
              dangerouslySetInnerHTML={{ __html: data.DescriptionLong }}
            />

            <motion.div
              className="w-full sm:w-[50%]"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                width={500}
                height={450}
                src={data?.ImageUrl}
                alt={data?.Name}
                className="rounded-[20px] object-cover w-full h-[450px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectIntro;
