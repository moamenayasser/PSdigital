import OurServices from "@/components/home/about2";
import Clients from "@/components/home/clients";
import Intro from "@/components/home/hero";
import AboutPS from "@/components/home/ps";
import OurWork from "@/components/home/ourWork";
import OurTeam from "@/components/home/team";
import fetchData from "@/utils/fetchData";
import Header from "@/components/layout/header";

export async function generateMetadata({ params: { locale } }) {
  const [websiteData, seoData] = await Promise.all([
    fetchData(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, {
      cache: "force-cache",
      next: { tags: ["websiteData"] },
    }),
    fetchData(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/SEO/${locale}/PSdigital/Index`
    ),
  ]);

  return {
    metadataBase: new URL(process.env.BASE_URL.replace("/API", "")),

    title: seoData?.PageTitle,
    description: seoData?.PageDescription,
    keywords: seoData?.PageKeywords,

    openGraph: {
      title: seoData?.OGtitle,
      description: seoData?.OGdescription,
      images: [{ url: seoData?.OGimage, width: 32, height: 32 }],
      url: websiteData?.FrontUrl,
      type: seoData?.OGtype,
    },

    twitter: {
      title: seoData?.Twittertitle,
      description: seoData?.Twitterdescription,
      images: [seoData?.Twitterimage],
      siteId: websiteData?.FrontUrl,
    },
  };
}

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

  const heroData = introData?.find((item) => item.PageTitle === "heroSection");

  const aboutData = introData?.find(
    (item) => item.PageTitle === "aboutSection"
  );
  const servicesData = introData?.find(
    (item) => item.PageTitle === "servicesSection"
  );
  return (
    <>
      <Header />
      {heroData && <Intro locale={locale} data={heroData} />}
      {clientsData && <Clients locale={locale} data={clientsData} />}
      {aboutData && <AboutPS locale={locale} data={aboutData} />}
      {servicesData && <OurServices locale={locale} data={servicesData} />}
      {workData && <OurWork locale={locale} data={workData} />}
      {teamData && <OurTeam locale={locale} data={teamData} />}
    </>
  );
};

export default HomePage;
