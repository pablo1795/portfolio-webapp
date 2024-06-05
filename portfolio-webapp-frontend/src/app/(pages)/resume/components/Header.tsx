import dataLeng from "@/libs/lenguaje/data-es.json";
import { Text } from "@/components";

const Header = () => {
  const ListProfessions = () => <div className="flex flex-col items-center sm:items-end">
    {dataLeng.pages.resume.personal_info.professions.map((info, index) =>
      // <h2 key={index} className="text-stone-700 darktext-stone-300 xl:text-lg font-bold uppercase text-nowrap">{info}</h2>
      <Text tag="h2" key={index} text={info} styles="text-stone-700 xl:text-lg uppercase text-nowrap" font="font-semibold" />
    )}
  </div>

  return (
    <header className="grid sm:grid-cols-2 sm:justify-between sm:items-center gap-1 sm:gap-2">
      <Text tag="h1" text={dataLeng.pages.resume.title.cv} styles="text-stone-900 text-3xl md:text-4xl uppercase text-center sm:text-left" font="font-black" />

      <ListProfessions />
    </header>
  );
}

export { Header };
