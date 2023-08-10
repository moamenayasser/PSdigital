const Banner = () => {
  return (
    <section class="tf-section hero-slider text-[#001d35]">
      <div class="py-0 lg:!py-[85px]">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="">
            <div class="pt-[24px]">
              <h6
                data-aos="fade-up"
                data-aos-duration="1000"
                class="leading-[3.2] relative mb-[6px] before::content-[''] before:w-[36px] before:h-[5px] before:absolute before:bottom-0 before:left-0 before:bg-[#fd562a] "
              >
                We are Monteno NFT
              </h6>
              <h2 data-aos="fade-up" data-aos-duration="1000" class="mb-[26px]">
                Collect Next Generation NFTs Today{" "}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                class="text-[24px] mb-[43px]"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium{" "}
              </p>
              <a
                data-aos="fade-up"
                data-aos-duration="1000"
                href="about.html"
                class="btn-action style-2"
              >
                Get Connected
              </a>
            </div>
          </div>
          <div class="">
            <div class="flex lg:justify-end justify-between pt-[50px] lg:pt-0 ">
              <div class="swiper-container swiper mySwiper1 swiper-h touch-pan-x lg:!ml-[30px] ml-0 mr-0 h-[570px]">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="item bg-1">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-container swiper mySwiper2 swiper-h  touch-pan-x lg:!ml-[30px] mr-0 h-[570px]">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="item bg-1">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="item bg-1">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-container swiper mySwiper3 swiper-h d-m-none touch-pan-x !ml-[30px] mr-0 h-[570px] min-[1025px]:block hidden">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="item bg-1">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="/images/hero2.png" alt="Monteno" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
