"use client";

import { useState } from "react";
import Drawer from "../Drawer";

const ContactUsPop = () => {
  const [openPop, setOpenPop] = useState(false);
  const handleToggle = () => setOpenPop((prev) => !prev);

  return (
    <>
      <button
        className="bg-white text-[#001d35] font-bold rounded-full p-3 px-7 text-base mb-6 border-white border-2 transition-all hover:bg-transparent hover:text-white"
        onClick={handleToggle}
      >
        Contact Us
      </button>
      <Drawer
        placement="bottom"
        open={openPop}
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
            <div className="w-full md:w-[500px] bg-[#eaeaea] p-11 flex flex-col gap-3 rounded-xl">
              <h3 className="text-[#001d35] text-2xl font-bold w-full text-center">
                Contact Us
              </h3>
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Name"
              />
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Email"
              />
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Phone Number"
              />
              <button
                className="bg-[#001d35] text-white w-48 m-auto mt-4 font-bold rounded-full p-3 px-7 text-base mb-6 border-[#001d35] border-2 transition-all hover:bg-transparent hover:text-[#001d35]"
                onClick={handleToggle}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ContactUsPop;
