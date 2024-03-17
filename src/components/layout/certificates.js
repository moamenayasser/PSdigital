import { useState } from "react";
import Drawer from "../Drawer";
import Image from "next/image";
const Certificates = () => {
  const [openNav, setOpenNav] = useState(false);
  const [drawerImg, setDrawerImg] = useState("");
  const handleToggle = () => setOpenNav((prev) => !prev);

  const toggleWithImg = (imgSrc) => {
    setDrawerImg(imgSrc);
    handleToggle();
  };
  // console.log(socialData);
  return (
    <>
      <div className="flex gap-1">
        <a
          className="cursor-pointer"
          onClick={() => toggleWithImg("/images/cer2.jpg")}
        >
          <img width={80} src="/images/cer.png" alt="certificate" />
        </a>
        <a
          className="cursor-pointer bg-gray-100 rounded-full w-20 h-20 text-center pt-2"
          onClick={() => toggleWithImg("/images/CeoOftheyearphoto.svg")}
        >
          <img width={65} src="/images/CeoOftheyear.svg" alt="certificate" />
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

export default Certificates;
