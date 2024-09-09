import ProjectIntro from "./innerProject/projectIntro";
import Objective from "./innerProject/Objective";
import Solution from "./innerProject/Solution";
import Results from "./innerProject/Results";
import Conclusion from "./innerProject/Conclusion";
import fetchData from "@/utils/fetchData";
import HeaderInner from "@/components/layout/headerInner";
import Link from "next/link";

// export async function generateMetadata({ params: { locale, projectSlug } }) {
//   const [websiteData, seoData] = await Promise.all([
//     fetchData(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, {
//       cache: "force-cache",
//       next: { tags: ["websiteData"] },
//     }),
//     fetchData(
//       `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/PSdigitalIntro/${locale}/Category/${projectSlug}`
//     ),
//   ]);

//   return {
//     title: seoData?.PageTitle,
//     description: seoData?.PageDescription,
//     keywords: seoData?.PageKeywords,

//     openGraph: {
//       title: seoData?.OGtitle,
//       description: seoData?.OGdescription,
//       images: [{ url: seoData?.OGimage, width: 32, height: 32 }],
//       url: websiteData?.FrontUrl,
//       type: seoData?.OGtype,
//     },

//     twitter: {
//       title: seoData?.Twittertitle,
//       description: seoData?.Twitterdescription,
//       images: [seoData?.Twitterimage],
//       siteId: websiteData?.FrontUrl,
//     },
//   };
// }

const InnerProject = async ({ params: { locale, projectSlug } }) => {
  const innerProjectData = await fetchData(
    `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ourWork/${locale}/Category/${projectSlug}/Content`
  );

  const projectIntro = innerProjectData?.find(
    (item) => item.PageTitle?.trim() === "projectIntro"
  );
  const projectObjective = innerProjectData?.find(
    (item) => item.PageTitle?.trim() === "Objective"
  );
  const projectSolution = innerProjectData?.find(
    (item) => item.PageTitle?.trim() === "Solution"
  );
  const projectResults = innerProjectData?.find(
    (item) => item.PageTitle?.trim() === "Results"
  );
  const projectConclusion = innerProjectData?.find(
    (item) => item.PageTitle?.trim() === "Conclusion"
  );

  console.log(innerProjectData);
  return (
    <>
      <HeaderInner />
      <section>
        {projectIntro && <ProjectIntro data={projectIntro} />}

        <div className="flex justify-center max-[900px]:flex-col-reverse gap-10">
          <div className="w-[80%] max-[900px]:w-[100%] ">
            {projectObjective && <Objective data={projectObjective} />}
            {projectSolution && <Solution data={projectSolution} />}
            {projectResults && <Results data={projectResults} />}
            {projectConclusion && <Conclusion data={projectConclusion} />}
            <div className="text-center">
              <Link
                href="/#ourWork"
                className="bg-[#001d35] border-[#001d35] border-2 text-white mb-20 font-bold rounded-full p-3 px-7 text-base transition-all hover:bg-transparent hover:text-[#001d35]"
              >
                Back to all Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerProject;
