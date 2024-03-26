"use client";
import { useState } from "react";
import Drawer from "../Drawer";
// import ToggleThemeMode from "../ToggleThemeMode";
import Certificates from "./certificates";

const HeaderInner = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleToggle = () => setOpenNav((prev) => !prev);
  return (
    <nav
      className="flex items-center justify-between p-1 md:p-2 lg:px-8 sticky top-0 bg-white z-20"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <img className="" src="/images/logo.svg" alt="logo" width={120} />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a
          href="/#services"
          className="font-semibold leading-6 text-[#001d35] dark:text-white"
        >
          Services
        </a>
        <a
          href="/#ourWork"
          className="font-semibold leading-6 text-[#001d35] dark:text-white"
        >
          Our Work
        </a>
        <a
          href="/#ourTeam"
          className="font-semibold leading-6 text-[#001d35] dark:text-white"
        >
          Our Team
        </a>
        <a
          href="/#clients"
          className="font-semibold leading-6 text-[#001d35] dark:text-white"
        >
          Clients
        </a>
        <a
          href="/#contact"
          className="font-semibold leading-6 text-[#001d35] dark:text-white"
        >
          Contact Us
        </a>
      </div>
      <Drawer
        placement="top"
        open={openNav}
        onClose={handleToggle}
        className="p-4 lg:hidden"
        size={800}
      >
        <button
          type="button"
          className="-m-2.5 float-right mr-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>x
        </button>
        <div className="flex flex-col gap-10 pt-10 overflow-y-auto">
          <a
            href="/#services"
            onClose={handleToggle}
            className="font-semibold leading-6 text-[#001d35] dark:text-white"
          >
            Services
          </a>
          <a
            href="/#ourWork"
            onClose={handleToggle}
            className="font-semibold leading-6 text-[#001d35] dark:text-white"
          >
            Our Work
          </a>
          <a
            href="/#ourTeam"
            onClose={handleToggle}
            className="font-semibold leading-6 text-[#001d35] dark:text-white"
          >
            Our Team
          </a>
          <a
            href="/#clients"
            onClose={handleToggle}
            className="font-semibold leading-6 text-[#001d35] dark:text-white"
          >
            Clients
          </a>
          <a
            href="/#contact"
            onClose={handleToggle}
            className="font-semibold leading-6 text-[#001d35] dark:text-white"
          >
            Contact Us
          </a>
        </div>
      </Drawer>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Certificates />
        {/* <ToggleThemeMode /> */}
      </div>
    </nav>
  );
};

export default HeaderInner;
