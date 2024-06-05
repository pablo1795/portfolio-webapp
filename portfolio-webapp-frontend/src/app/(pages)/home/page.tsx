import { Footer, HeaderBanner } from "./components";
import { ContentSectionLayout, CardLayout4, CardLayout5, CardWorkExperience } from "@/components";
import dataLeng from "@/libs/lenguaje/data-es.json";

export default function Home() {
  const ListWorkExperience = () => dataLeng.data.workExperience.map((work, index) =>
    <CardWorkExperience
      key={index}
      bgFigureDark={work.bgFigureDark || false}
      date={work.date}
      description={work.description}
      logo={work.logo}
      rol={work.role}
      title={work.title}
    />
  )

  const ListStudies = () => dataLeng.data.studies.map((study, index) =>
    <CardLayout5
      key={index}
      description={study.description}
      title={study.title}
      date={study.date}
    />
  )

  const ListTechnologies = () => dataLeng.data.technologies.map((technology, index) =>
    <CardLayout4
      key={index}
      description={technology.description}
      title={technology.title}
      icons={technology.technologies}
    />
  )

  return (
    <div className="flex flex-col items-center">
      <HeaderBanner />

      <main className="flex flex-col gap-6 p-10 sm:w-3/4">
        <ContentSectionLayout title="Experiencia Laboral">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ListWorkExperience />
          </div>
        </ContentSectionLayout>

        <ContentSectionLayout title="Estudios Realizados">
          <div className="grid grid-cols-3 gap-4">
            <ListStudies />
          </div>
        </ContentSectionLayout>

        <ContentSectionLayout title="tecnologias que domino">
          <div className="grid grid-cols-3 gap-4">
            <ListTechnologies />
          </div>
        </ContentSectionLayout>
      </main>

      <Footer />
    </div>
  );
}
