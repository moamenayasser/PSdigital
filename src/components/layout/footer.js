import SocialItem from "./SocialItem";

const Footer = ({ footerData, socialData }) => {
  console.log(socialData);
  return (
    <div
      id="contact"
      className="w-full pt-20 flex items-center justify-center bg-[#001d35]"
    >
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-4xl sm:text-7xl font-bold">
          <h1 className="w-full md:w-2/3">{footerData?.Name}</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400 pb-10">
            {footerData?.DescriptionShort}
          </p>
          {socialData?.length !== 0 && (
            <div className="pt-6 md:pt-0 mb-4 sm:mb-0">
              <div className="flex flex-wrap justify-center gap-2">
                {socialData?.map((item, index) => (
                  <SocialItem key={index} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <hr className="border-gray-300" />
          <p className="w-full text-center my-12 text-gray-border-gray-300">
            Copyright © 2023 PSdigital
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
