const Services = () => {
  return (
    <section className="pb-[100px]">
      <div className="container max-[1024px]:mt-[200px] max-[767px]:mt-0">
        <div className="flex gap-0 max-[900px]:flex-col sm:gap-10">
          <div className="hover:animate-wiggle">
            <div className="box-item max-[1024px]:max-w-full rounded-tr-[40px] rounded-bl-[40px] max-w-[270px] w-full max-h-[326px] cursor-pointer inline-table p-[60px_43px_36px_43px] bg-[#001d35]">
              <img
                src="/images/hosting.png"
                alt="Monteno"
                className="mb-[36px]"
              />
              <a href="#" className="h5 mb-[8px]">
                Huge Collection
              </a>
              <p className="mt-[14px] leading-[1.7] mb-[16px]">
                Oficia dese runt mollit anim id est labo met, consectetur adipis
              </p>
            </div>
          </div>
          <div className="hover:animate-wiggle">
            <div className="box-item max-[1024px]:max-w-full rounded-tr-[40px] rounded-bl-[40px] max-w-[270px] w-full max-h-[326px] cursor-pointer inline-table p-[60px_43px_36px_43px] bg-[#001d35] mt-[60px]">
              <img
                src="/images/provision.png"
                alt="Monteno"
                className="mb-[36px]"
              />
              <a href="#" className="h5 mb-[8px]">
                Top Resource
              </a>
              <p className="mt-[14px] leading-[1.7] mb-[16px]">
                Oficia dese runt mollit anim id est labo met, consectetur adipis
              </p>
            </div>
          </div>
          <div className="hover:animate-wiggle">
            <div className="box-item max-[1024px]:max-w-full max-[1024px]:mt-[60px] rounded-tr-[40px] rounded-bl-[40px] max-w-[270px] w-full max-h-[326px] cursor-pointer inline-table p-[60px_43px_36px_43px] bg-[#001d35]">
              <img
                src="/images/badge.png"
                alt="Monteno"
                className="mb-[36px]"
              />
              <a href="#" className="h5 mb-[8px]">
                High Quality
              </a>
              <p className="mt-[14px] leading-[1.7] mb-[16px]">
                Oficia dese runt mollit anim id est labo met, consectetur adipis
              </p>
            </div>
          </div>
          <div className="hover:animate-wiggle">
            <div className="box-item max-[1024px]:max-w-full rounded-tr-[40px] rounded-bl-[40px] max-w-[270px] w-full max-h-[326px] cursor-pointer inline-table p-[60px_43px_36px_43px] bg-[#001d35] mt-[60px]">
              <img src="/images/chat.png" alt="Monteno" className="mb-[36px]" />
              <a href="#" className="h5 mb-[8px]">
                Big Community
              </a>
              <p className="mt-[14px] leading-[1.7] mb-[16px]">
                Oficia dese runt mollit anim id est labo met, consectetur adipis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
