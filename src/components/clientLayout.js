"use client";
// import AnimatedCursor from "./AnimatedCursor";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const ClientLayout = (props) => {
  const { children, footerData, socialData } = props;

  return (
    <>
      {/* <AnimatedCursor /> */}
      <Header />
      <div className=" min-h-screen flex flex-col justify-between">
        <main className="flex flex-col flex-grow w-full">{children}</main>
      </div>
      <Footer footerData={footerData} socialData={socialData} />
    </>
  );
};

export default ClientLayout;
