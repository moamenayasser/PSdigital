import fetchData from "@/utils/fetchData";
import Link from "next/link";

// const Projects = () => {
const Projects = ({ data }) => {
  // const media = await fetchData(
  //   `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category/ourwork/Content/website/Media`
  // );

  return (
    <section className="tf-section montono">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 pt-6">
          {/* <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-tr-[40px] rounded-bl-[40px] p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-tr-[40px] rounded-bl-[40px] h-[300px]"
                src="/images/proj/ASTK.jpg"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                ASTK
              </h3>
            </div>
            <div className="flex items-center gap-x-3 flex-wrap">
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
            </div>
          </a>
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-tr-[40px] rounded-bl-[40px] p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-tr-[40px] rounded-bl-[40px] h-[300px]"
                src="/images/proj/Burger king.jpg"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Burger king
              </h3>
            </div>
            <div className="flex items-center gap-x-3 flex-wrap">
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
            </div>
          </a>
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-tr-[40px] rounded-bl-[40px] p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-tr-[40px] rounded-bl-[40px] h-[300px]"
                src="/images/proj/texas chicken.jpg"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Texas Chicken
              </h3>
            </div>
            <div className="flex items-center gap-x-3 flex-wrap">
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
            </div>
          </a> */}
          {/* tesssst */}
          {/* {media?.map((item, index) => ( */}
          {data?.map((item, index) => (
            <Link
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-tr-[40px] rounded-bl-[40px] p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
              href={`/${item.UniqueName}`}
              key={index}
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-tr-[40px] rounded-bl-[40px] h-[300px]"
                  src={item?.ImageUrl}
                  alt={item?.Name}
                />
              </div>
              <div className="my-6">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                  Texas Chicken for food delivery
                </h3>
              </div>
              <div className="flex items-center gap-x-3 flex-wrap">
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
              </div>
            </Link>
          ))}
          {/* ))} */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
