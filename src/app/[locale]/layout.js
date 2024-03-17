import { cookies } from "next/headers";
import ClientLayout from "@/components/clientLayout";
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeContext";
import fetchData from "@/utils/fetchData";
import ResourcesProvider from "@/contexts/DataContext";
import parse from "html-react-parser";

export const metadata = {
  title: "PSdigital",
  description: "Digital agancy",
};

const RootLayout = async ({ children, params: { locale } }) => {
  const [websiteData, footerData, projectConfig] = await Promise.all([
    fetchData(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, {
      cache: "force-cache",
      next: { tags: ["websiteData"] },
    }),
    fetchData(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/fixedFooter/${locale}/Category`
    ),
    fetchData(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/ProjectConfiguration`
    ),
  ]);
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en" dir="ltr" className={`${theme ? theme.value : "light"}`}>
      {projectConfig?.Header && <head>{parse(projectConfig?.Header)}</head>}
      <body className="leading-normal tracking-normal text-white dark:bg-black dark:text-white">
        <ResourcesProvider locale={locale} data={websiteData}>
          <ThemeProvider defaultTheme={theme ? theme.value : "light"}>
            <ClientLayout
              footerData={footerData[0]}
              socialData={websiteData?.SocialMedia}
            >
              {children}
            </ClientLayout>
          </ThemeProvider>
        </ResourcesProvider>

        {projectConfig?.Footer && parse(projectConfig?.Footer)}
      </body>
    </html>
  );
};

export default RootLayout;
