// "use client";
import fetchData from "@/utils/fetchData";
// import { motion } from "framer-motion";

const OurTeam = async ({ locale, data }) => {
  const teamInfo = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category/${data?.UniqueName}/Content`
  );

  return (
    <section id="ourTeam" className="container">
      <div className="relative text-center">
        <h1 className="text-[#022441] absolute left-[27px] hidden md:block right-0 top-[-40px] mx-auto text-center text-[180px] tracking-[24px] uppercase -z-10 max-[1024px]:text-[150px] opacity-30">
          <span className="heading-bg ">Team</span>
        </h1>
        <h5 className="text-[#022441] dark:text-white capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-[#fba01c] after:left-0 after:right-0 after:mx-auto after:text-center ">
          {data?.Name}
        </h5>
        <h3 className="mb-[28px] text-[#022441] dark:text-white capitalize ">
          {data?.DescriptionShort}
        </h3>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
        <div className="flex lg:gap-16 justify-center flex-wrap">
          {teamInfo?.map((item, index) => (
            <div
              key={index}
              className="text-center text-gray-500 w-1/2 md:w-auto hover:animate-fade-up "
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
