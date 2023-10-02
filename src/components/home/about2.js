"use client";

import { motion } from "framer-motion";

const OurServices = ({ data }) => {
  console.log(data);
  return (
    <>
      <section id="services" className=" pt-2 sm:pt-20 pb-20">
        <div className=" flex flex-col px-6 py-10 mx-auto space-y-6 h-auto lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* <video src="/images/ps.mp4" autoPlay></video> */}
            <video
              className="w-full h-[600px] object-contain"
              width="320"
              height="240"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/ps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img src={data.ImageUrl} alt={data.Alt} /> */}
          </motion.div>
          <div className=" w-full h-auto sm:h-96 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative text-left"
            >
              <h1 className="text-[#022441] absolute left-[0]  top-[-40px] mx-auto text-center text-[150px] tracking-[8px] uppercase -z-10 max-[1024px]:text-[150px] opacity-20">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
