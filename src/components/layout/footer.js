import SocialItem from "./SocialItem";
import { useState } from "react";
import Drawer from "../Drawer";
import Image from "next/image";
const Footer = ({ footerData, socialData }) => {
  const [openNav, setOpenNav] = useState(false);
  const handleToggle = () => setOpenNav((prev) => !prev);
  // console.log(socialData);
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
        <div className="flex flex-col items-center gap-0 justify-center border-t py-2 border-white">
          <a href="#" onClick={handleToggle} className="text-xl font-semibold">
            View our certifacte from innovation awards
          </a>
          <a className="cursor-pointer" onClick={handleToggle}>
            <img width={100} src="/images/cer.png" alt="certificate" />
          </a>
        </div>
        <Drawer
          placement="bottom"
          open={openNav}
          onClose={handleToggle}
          size="110vh"
          className=" !bg-white/70"
        >
          <div className="overflow-y-auto relative">
            <button
              type="button"
              className="-m-2.5 absolute right-4 top-0 rounded-md p-2.5 text-[#022441] float-right text-xl"
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>x
            </button>
            <div className="pt-10 flex justify-center">
              <Image
                width={500}
                height={500}
                className="w-full lg:w-[450px]"
                src="/images/cer2.jpg"
                alt="certificate"
              />
            </div>
          </div>
        </Drawer>
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
