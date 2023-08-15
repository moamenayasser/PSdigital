
const OurServices = async ({ locale, data }) => {
 
  return (
    <>
      <section id="services" className=" pt-2 sm:pt-20 pb-20">
        <div className=" flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 relative">
            <img src={data.ImageUrl} alt={data.Alt} />
            {/* <img
              src="/images/about-2-img.png"
              alt="about-shape"
              className="absolute right-0 top-0"
            />
            <img
              src="/images/about-2-img.png"
              alt="about-shape"
              className="absolute bottom-0 right-0"
            /> */}
          </div>
          <div className=" w-full h-96 lg:w-1/2">
            <span className="text-xl font-semibold tracking-wide text-gray-400 animate-fade-up animate-delay-[1.5s]">
              {data?.Name}
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-[#001d35] dark:text-white lg:text-4xl animate-fade-up animate-delay-[2s]">
              {data?.Name}
            </h1>
            <p className="mt-4 mb-4 text-gray-600 dark:text-gray-300 animate-fade-up animate-delay-[2.5s]">
              {data?.DescriptionShort}
            </p>

            {data?.DescriptionLong && (
              <div
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
