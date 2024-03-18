import SocialItem from "./SocialItem";
import { useState } from "react";
import Drawer from "../Drawer";
import Image from "next/image";
import ContactUsPop from "./ContactUsPop";
const Footer = ({ footerData, socialData }) => {
  const [openNav, setOpenNav] = useState(false);
  const [drawerImg, setDrawerImg] = useState("");
  const handleToggle = () => setOpenNav((prev) => !prev);

  const toggleWithImg = (imgSrc) => {
    setDrawerImg(imgSrc);
    handleToggle();
  };
  console.log(socialData);
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
          <a
            href="#"
            className="text-xl font-semibold text-center md:text-left"
          >
            View our certifacte from innovation awards
          </a>
          <div className="flex gap-3">
            <a
              className="cursor-pointer"
              onClick={() => toggleWithImg("/images/cer2.jpg")}
            >
              <img width={105} src="/images/cer.png" alt="certificate" />
            </a>
            <a
              className="cursor-pointer bg-white rounded-full w-24 h-24 text-center pt-2"
              onClick={() => toggleWithImg("/images/CeoOftheyearphoto.svg")}
            >
              <img
                width={82}
                height={82}
                className="object-contain "
                src="/images/CeoOftheyear.svg"
                alt="certificate"
              />
            </a>
          </div>
        </div>
        <Drawer
          placement="bottom"
          open={openNav}
          onClose={handleToggle}
          size="110vh"
          className="!bg-transparent"
        >
          <div
            onClick={handleToggle}
            className="absolute w-full h-full  !bg-white/70"
          ></div>
          <div className="overflow-y-auto relative flex justify-center flex-row-reverse">
            <button
              type="button"
              className="absolute right-5 md:right-1/4 top-2 rounded-full p-2.5 text-[#022441] bg-white "
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <g>
                  <g data-name="02 User">
                    <path
                      d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
                      fill="#022441"
                      opacity="1"
                      data-original="#022441"
                    ></path>
                    <path
                      d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
                      fill="#022441"
                      opacity="1"
                      data-original="#022441"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <div className="pt-10 flex justify-center">
              {drawerImg && (
                <Image
                  width={500}
                  height={500}
                  className="w-full lg:w-[450px]"
                  src={drawerImg}
                  alt="certificate"
                />
              )}
            </div>
          </div>
        </Drawer>
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
