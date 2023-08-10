const Projects2 = () => {
  return (
    <section className="tf-section montono">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-6 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="group relative rounded-tr-[40px] rounded-bl-[40px]  overflow-hidden cursor-pointer mb-[30px]"
            >
              <img
                src="/images/proj/3.jpg"
                alt="urger King"
                className="w-full duration-[0.3s] group-hover:scale-[1.1]"
              />
              <div className="absolute bottom-0 left-[49px] right-[46px] p-[26px_0_26px_10px] bg-[#068297] rounded-tr-[40px] rounded-bl-[40px] text-center opacity-0 duration-[0.3s] group-hover:opacity-100 group-hover:visible group-hover:bottom-[50px] ">
                <a href="collections.html" className="h6">
                  Burger King
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="group relative rounded-tr-[40px] rounded-bl-[40px]  overflow-hidden cursor-pointer mb-[30px]"
            >
              <img
                src="/images/proj/4.jpg"
                alt="Texas Chicken"
                className="w-full duration-[0.3s] group-hover:scale-[1.1]"
              />
              <div className="absolute bottom-0 left-[49px] right-[46px] p-[26px_0_26px_10px] bg-[#068297] rounded-tr-[40px] rounded-bl-[40px] text-center opacity-0 duration-[0.3s] group-hover:opacity-100 group-hover:visible group-hover:bottom-[50px] ">
                <a href="collections.html" className="h6">
                  Texas Chicken
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              className="group relative rounded-tr-[40px] rounded-bl-[40px]  overflow-hidden cursor-pointer mb-[30px]"
            >
              <img
                src="/images/proj/5.jpg"
                alt="ZEE"
                className="w-full duration-[0.3s] group-hover:scale-[1.1]"
              />
              <div className="absolute bottom-0 left-[49px] right-[46px] p-[26px_0_26px_10px] bg-[#068297] rounded-tr-[40px] rounded-bl-[40px] text-center opacity-0 duration-[0.3s] group-hover:opacity-100 group-hover:visible group-hover:bottom-[50px] ">
                <a href="collections.html" className="h6">
                  ZEE
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Projects2;
