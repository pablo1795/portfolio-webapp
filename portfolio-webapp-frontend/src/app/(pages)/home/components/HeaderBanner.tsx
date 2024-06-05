"use client"
import { useRouter } from "next/navigation";
import { Button, Text, ContentSectionLayout } from "@/components";

const HeaderBanner = () => {
  const router = useRouter();

  return (
    <section className="h-screen w-full items flex flex-col justify-between gap-10">
      <Text text="ESPACIO" />
      <div className="flex flex-col gap-2 self-center">
        <div className="flex items-end gap-2">
          <Text text="¡Hola mundo!" styles="text-5xl" />
          <Text text="soy" styles="text-3xl" />
        </div>

        <Text text="Pablo Diaz" styles="text-7xl" />

        <div className="flex flex-col gap-1">
          <Text text="operador de computadoras" styles="text-2xl text-center" />
          <Text text="programador web" styles="text-2xl" />
          <Text text="tecnico de PC" styles="text-2xl text-right" />
          <Text text="tecnico de celulares" styles="text-2xl" />
          <Text text="instruido en informatica" styles="text-2xl text-center" />
        </div>

        <Button onClick={() => router.push("/resume")} text="INGRESAR AL CV" styles="self-center" />
      </div>

      <div className="self-end">
        <ContentSectionLayout title="mis principios">
          <ul className="flex flex-wrap justify-center sm:flex-col gap-2">
            <li className="bg-yellow-500 py-2 px-4 rounded-full"><Text text="respeto" /></li>
            <li className="bg-yellow-500 py-2 px-4 rounded-full"><Text text="lealtad y seguridad" /></li>
            <li className="bg-yellow-500 py-2 px-4 rounded-full"><Text text="pasion, compromiso y dedicacion" /></li>
            <li className="bg-yellow-500 py-2 px-4 rounded-full"><Text text="discrecion" /></li>
            <li className="bg-yellow-500 py-2 px-4 rounded-full"><Text text="con ganas de trabajar" /></li>
          </ul>
        </ContentSectionLayout>
      </div>
    </section>
  );
};

export { HeaderBanner };