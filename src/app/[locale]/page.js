import OurServices from "@/components/home/about2";
import Clients from "@/components/home/clients";
import Intro from "@/components/home/hero";
import AboutPS from "@/components/home/ps";
import OurWork from "@/components/home/ourWork";
import OurTeam from "@/components/home/team";
import fetchData from "@/utils/fetchData";

const HomePage = async ({ params: { locale } }) => {
  const homeData = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category`
  );
   const companyProfile = homeData?.find(
     (item) => item.PageTitle === "PSdigital compony profile"
   );

   const workData = homeData?.find((item) => item.PageTitle === "workSection");
   const teamData = homeData?.find((item) => item.PageTitle === "teamSection");
   const clientsData = homeData?.find(
     (item) => item.PageTitle === "clientsSection"
   );
  
  const introData = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category/${companyProfile?.UniqueName}/Content`
  );

  const heroData = introData?.find(
    (item) => item.PageTitle === "heroSection"
  );

  const aboutData = introData?.find(
    (item) => item.PageTitle === "aboutSection"
  );
  const servicesData = introData?.find(
    (item) => item.PageTitle === "servicesSection"
  );
  return (
    <>
      {heroData && <Intro locale={locale} data={heroData} />}
      {aboutData && <AboutPS locale={locale} data={aboutData} />}
      {servicesData && <OurServices locale={locale} data={servicesData} />}
      {workData && <OurWork locale={locale} data={workData} />}
      {teamData && <OurTeam locale={locale} data={teamData} />}
      {clientsData && <Clients locale={locale} data={clientsData} />}
      {/* <Intro /> */}
      {/* <AboutPS /> */}
      {/* <OurServices /> */}
      {/* <Services /> */}
      {/* <Tabs /> */}
      {/* <OurTeam /> */}
      {/* <Clients /> */}
    </>
  );
};

export default HomePage;
