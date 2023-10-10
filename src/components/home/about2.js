import fetchData from "@/utils/fetchData";
import AboutData from "./aboutData";

const OurServices = async ({ data, locale }) => {
  const medias = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category/psdigitalcomponyprofile/Content/ourservices/Media`
  );
  const videoData = medias?.find((item) => item.Type === 4);
  return (
    <>
      <section id="services" className=" pt-2 sm:pt-20 pb-20">
        <div className=" flex flex-col px-6 py-10 mx-auto space-y-6 h-auto lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 relative">
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
              <source src={videoData?.Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img src={data.ImageUrl} alt={data.Alt} /> */}
          </div>
          <div className=" w-full h-auto sm:h-96 lg:w-1/2">
            <AboutData data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
