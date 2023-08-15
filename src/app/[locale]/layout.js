import { cookies } from "next/headers";
import ClientLayout from "@/components/clientLayout";
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeContext";
import fetchData from "@/utils/fetchData";
import ResourcesProvider from "@/contexts/DataContext";

export const metadata = {
  title: "PSdigital",
  description: "Digital agancy",
};

const RootLayout = async ({ children, params: { locale } }) => {
  const websiteData = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`,
    { cache: "force-cache", next: { tags: ["websiteData"] } }
  );

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en" dir="ltr" className={`${theme ? theme.value : "light"}`}>
      <body className="leading-normal tracking-normal text-white dark:bg-black dark:text-white">
        <ResourcesProvider locale={locale} data={websiteData}>
          <ThemeProvider defaultTheme={theme ? theme.value : "light"}>
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </ResourcesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
