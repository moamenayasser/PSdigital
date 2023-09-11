import fetchData from "@/utils/fetchData";
import Marquee from "react-fast-marquee";

const Clients = async ({ locale, data }) => {
  const clientsInfo = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category/${data?.UniqueName}/Content`
  );

  return (
    <div id="clients" className="pb-10 overflow-x-hidden">
      <div className="">
        <Marquee gradient="true" pauseOnHover="true">
          {clientsInfo?.map((item, index) => (
            <img
              key={index}
              className="h-[100px] w-auto object-contain m-4 dark:backdrop-brightness-0"
              src={item.ImageUrl}
              alt={item.Name}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
