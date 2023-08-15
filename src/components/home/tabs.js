"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Projects from "./projects";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({data}) => {
    let [categories] = useState({
      "UI & UX": [],
      Applications: [],
      Graghics: [],
      Developed: [],
      Shots: [],
    });
   console.log(data);
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex space-x-1 gap-2 flex-col sm:gap-6 sm:flex-row">
          {data?.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-[40px] text-sm font-medium uppercase leading-5",
                  "text-white focus:outline-none  transition-[0.3s]",
                  selected
                    ? "w-full bg-[#022441] border-none rounded-[40px] p-2 shadow"
                    : "text-white bg-[#068297] hover:text-[#eee] p-2 w-full"
                )
              }
            >
              {item?.Name}
            </Tab>
          ))}
        </Tab.List>
        {/* {data?.map((item, index) => (
          <Tab.Panel
            key={index}
            className={classNames(
              "rounded-xl  p-3",
              "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
            )}
          >
            <Projects data={item} />
          </Tab.Panel>
        ))} */}
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
            <Projects />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
            )}
          >
            <Projects />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
            )}
          >
            <Projects />
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
    </>
  );
};

export default Tabs;
