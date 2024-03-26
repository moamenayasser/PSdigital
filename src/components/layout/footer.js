import SocialItem from "./SocialItem";

import ContactUsPop from "./ContactUsPop";
import FooterCer from "./footerCer";

const Footer = ({ footerData, socialData }) => {
  return (
    <div
      id="contact"
      className="w-full pt-20 flex items-center justify-center bg-[#001d35]"
    >
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-4xl sm:text-7xl font-bold  text-center md:text-left">
          <h1 className="w-full md:w-2/3">{footerData?.Name}</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between text-center md:text-left">
          <div className="flex-1">
            <p className="w-full md:w-2/3 text-gray-400 pb-7">
              {footerData?.DescriptionShort}
            </p>
            <ContactUsPop />
          </div>
          {socialData?.length !== 0 && (
            <div className="md:pt-0 mb-4 sm:mb-0">
              <div className="flex flex-wrap justify-center gap-2">
                {socialData?.map((item, index) => (
                  <SocialItem key={index} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
        <FooterCer />
        <div className="flex flex-col">
          <hr className="border-gray-300" />
          <p className="w-full text-center my-12 text-gray-border-gray-300">
            Copyright © 2024 PSdigital
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
