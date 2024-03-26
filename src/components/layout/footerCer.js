import { useState } from "react";
import Drawer from "../Drawer";
import Image from "next/image";

const FooterCer = () => {
  const [openNav, setOpenNav] = useState(false);
  const [drawerImg, setDrawerImg] = useState("");
  const handleToggle = () => setOpenNav((prev) => !prev);

  const toggleWithImg = (imgSrc) => {
    setDrawerImg(imgSrc);
    handleToggle();
  };

  return (
    <>
      <div className="flex flex-col items-center gap-0 justify-center border-t py-2 border-white">
        <a href="#" className="text-xl font-semibold text-center md:text-left">
          View our certifacte from innovation awards
        </a>
        <div className="flex gap-3">
          <a
            className="cursor-pointer"
            onClick={() => toggleWithImg("/images/cer2.jpg")}
          >
            <img
              className="rounded-full"
              width={95}
              src="/images/innovation.svg"
              alt="certificate"
            />
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
              width="15"
              height="15"
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
    </>
  );
};

export default FooterCer;
