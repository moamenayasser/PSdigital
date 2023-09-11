"use client";
import { motion } from "framer-motion";

const teamItem = ({ data, teamItemInfo, locale }) => {
  console.log(teamItemInfo);

  return (
    <>
      <div className="relative text-center">
        <h1 className="text-[#022441] absolute left-[27px] right-0 top-[-40px] mx-auto text-center text-[180px] tracking-[24px] uppercase -z-10 max-[1024px]:text-[150px] opacity-30">
          <span className="heading-bg animate-fade-up  animate-delay-[2s]">
            Team
          </span>
        </h1>
        <motion.h5
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-[#022441] dark:text-white capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-[#fba01c] after:left-0 after:right-0 after:mx-auto after:text-center "
        >
          {data?.Name}
        </motion.h5>
        <motion.h3
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-[28px] text-[#022441] dark:text-white capitalize animate-fade-up  animate-delay-[2s]"
        >
          {data?.DescriptionShort}
        </motion.h3>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
        <div className="flex gap-8 lg:gap-16  justify-center flex-wrap animate-fade-up  animate-delay-[2s]">
          {teamItemInfo?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              key={index}
              className="text-center text-gray-500 dark:text-gray-400  hover:animate-fade-up "
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full "
                src={item?.ImageUrl}
                alt={item?.Name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item?.Name}
              </h3>
              <p>{item?.DescriptionShort}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default teamItem;
