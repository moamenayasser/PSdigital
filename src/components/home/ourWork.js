import fetchData from "@/utils/fetchData";
import Tabs from "./tabs";

const OurWork = async ({ locale, data }) => {
  const projectsInfo = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ourWork/${locale}/Category`
  );
  // console.log(projectsInfo);
  return (
    <div id="ourWork" className="container">
      <div className="relative text-center">
        <h1 className="text-[#022441] absolute left-[27px] hidden md:block right-0 top-[-40px] mx-auto text-center text-[180px] tracking-[24px] uppercase -z-10 max-[1024px]:text-[150px] opacity-30">
          <span className="heading-bg">Work</span>
        </h1>
        <h5 className="text-[#022441] dark:text-white capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-tf after:left-0 after:right-0 after:mx-auto after:text-center ">
          {data?.Name}
        </h5>
        <h3 className="mb-[28px] text-[#022441] dark:text-white capitalize">
          {data?.DescriptionShort}
        </h3>
      </div>

      <div className="w-full max-w-7xl px-2 py-3 sm:py-16 sm:px-0 m-auto">
        <Tabs projectsData={projectsInfo} locale={locale} />
      </div>
    </div>
  );
};

export default OurWork;
