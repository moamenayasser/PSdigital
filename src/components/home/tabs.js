"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Projects from "./projects";
import Projects2 from "./project2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    "UI & UX": [],
    Applications: [],
    Graghics: [],
    Developed: [],
    Shots: [],
  });

  return (
    <div className="container">
      <div class="relative text-center">
        <h1 class="text-[#022441] absolute left-[27px] right-0 top-[-40px] mx-auto text-center text-[180px] tracking-[24px] uppercase -z-10 max-[1024px]:text-[150px] opacity-30">
          <span class="heading-bg">Work</span>
        </h1>
        <h5 class="text-[#022441] capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-tf after:left-0 after:right-0 after:mx-auto after:text-center ">
          our Work
        </h5>
        <h3 class="mb-[28px] text-[#022441] capitalize">latest projects</h3>
      </div>

      <div className="w-full max-w-7xl px-2 py-3 sm:py-16 sm:px-0 m-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-1 gap-2 flex-col sm:gap-6 sm:flex-row">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-[40px] text-sm font-medium uppercase leading-5",
                    "text-white focus:outline-none  transition-[0.3s]",
                    selected
                      ? "w-full bg-[#022441] border-none rounded-[40px] p-3 shadow"
                      : "text-white bg-[#068297] hover:text-[#eee] p-3 w-full"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panel
            className={classNames(
              "rounded-xl  p-3",
              "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
            )}
          >
            <Projects />
          </Tab.Panel>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
              )}
            >
              <Projects2 />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
              )}
            >
              <Projects />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
