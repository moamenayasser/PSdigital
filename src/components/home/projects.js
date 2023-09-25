import Link from "next/link";

const Projects = ({ data }) => {
  return (
    <section className="tf-section montono">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 pt-6">
          {data?.map((item, index) => (
            <Link
              className="group flex flex-col h-full hover:shadow-lg bg-gray-50 dark:bg-gray-950 transition-all duration-300 rounded-[30px] p-3 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
              href={`/${item.UniqueName}`}
              key={index}
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-[20px] h-[300px]"
                  src={item?.ImageUrl}
                  alt={item?.Name}
                />
              </div>
              <div className="mt-6 mb-2">
                <h3 className="text-3xl text-center font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white capitalize">
                  {item?.Name}
                </h3>
                <p className="mt-4 mb-4 text-gray-600 dark:text-gray-300">
                  {" "}
                  short description for brand short and description for brand
                  description
                </p>
                <p className="text-[#fba01c] flex gap-1 group-hover:text-[#001d35] group transition justify-center dark:text-white">
                  Read more{" "}
                  <svg
                    className="-rotate-45 mt-1 group-hover:fill-[#001d35] fill-[#fba01c] dark:fill-white"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 512.009 512.009"
                  >
                    <g>
                      <path
                        d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </p>
              </div>
              {/* <div className="flex items-center gap-x-3 flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mt-1 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  Websites
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mt-1 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  IOS
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium mt-1 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  andriod
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium mt-1 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Marketing
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mt-1 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  Facebook
                </span>
              </div> */}
            </Link>
          ))}
          {/* ))} */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
