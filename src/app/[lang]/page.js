import OurServices from "@/components/home/about2";
import Clients from "@/components/home/clients";
import Intro from "@/components/home/hero";
import AboutPS from "@/components/home/ps";
import Tabs from "@/components/home/tabs";
import OurTeam from "@/components/home/team";

const HomePage = () => {

  return (
    <>
      <Intro />
      <AboutPS />
      <OurServices />
      {/* <Services /> */}
      <Tabs />
      <OurTeam />
      <Clients />
    </>
  );
};

export default HomePage;
