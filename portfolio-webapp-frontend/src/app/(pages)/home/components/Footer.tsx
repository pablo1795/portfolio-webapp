import Link from "next/link";
import { ContentSectionLayout } from "@/components";

const Footer = () =>
  <footer className="w-full p-10">
    <ContentSectionLayout title="Informacion de Contacto">
      <div className="flex justify-evenly">
        <article className="flex flex-col gap-4">
          <h3 className="text-md text-uppercase text-xl font-bold">Contacto</h3>

          <ul className="flex gap-6">
            <li>
              <span className="text-uppercase text-bold">telefono: </span>
              <Link href="tel:3813698820" target="_blank" className="link" title="mi numero telefonico">0381-153-698820</Link>
            </li>
            <li>
              <span className="text-uppercase text-bold">correo electronico: </span>
              <Link href="mailto:pablo.diaz1795@gmail.com" target="_blank" className="link"
                title="mi correo electronico">pablo.diaz1795@gmail.com</Link>
            </li>
          </ul>
        </article>
      </div>
    </ContentSectionLayout>
  </footer>

export { Footer };
