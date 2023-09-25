"use client";
import { Tab } from "@headlessui/react";
import Projects from "./projects";
import clsx from "clsx";
import { useState } from "react";

const Tabs = ({ projectsData }) => {
  const parentCategories = projectsData?.filter(
    (item) => !item.ParentCategoryUniqueName
  );
  const dataObject = projectsData
    ?.filter((item) => item.ParentCategoryUniqueName)
    .reduce((acc, cur) => {
      acc[cur.ParentCategoryName] = acc[cur.ParentCategoryName] || [];
      acc[cur.ParentCategoryName].push(cur);
      return acc;
    }, Object.create(null));

  const [categories] = useState({ ...dataObject });
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex space-x-1 gap-2 flex-col sm:gap-6 sm:flex-row">
          {parentCategories.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                clsx(
                  "w-full rounded-[40px] text-sm font-medium uppercase leading-5",
                  {
                    "w-full bg-transparent border rounded-[40px] p-2 shadow text-[#022441] border-[#022441] dark:text-white dark:border-white":
                      selected,
                    "text-white bg-[#068297] hover:text-[#eee] p-2 w-full":
                      !selected,
                  }
                )
              }
            >
              {item.Name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(categories).map((items, index) => (
            <Tab.Panel
              key={index}
              className="rounded-xl ring-white ring-opacity-60 ring-offset-2 focus:outline-none p-3"
            >
              <Projects data={items} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Tabs;
