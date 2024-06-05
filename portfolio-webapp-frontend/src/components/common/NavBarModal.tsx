"use client";
import { useState } from "react";
import Link from "next/link";
import dataLeng from "@/libs/lenguaje/data-es.json";
import { Button, IconClose, IconDarkMode, IconLightMode, IconMenu, Text } from "@/components";
// import useDarkMode from "@/libs/hooks/useDarkMode";

const Navbar = () => {
  return (
    <nav id="MenuNavegacion" className="bg-stone-900 text-stone-100 p-4 flex justify-between items-center fixed min-w-full left-0 top-0">
      <Link href="#Inicio" className="items-center">
        <h1 className="text-lg">{dataLeng.pages.resume.personal_info.full_name}</h1>
        <h2 className="text-sm">{dataLeng.pages.resume.personal_info.profession}</h2>
      </Link>

      <button className="menuToggle"></button>

      <ul className="flex gap-8">
        <li><Link href="#Inicio" title="ir a inicio">Inicio</Link></li>
        <li><Link href="#Tecnologias" title="ir a tecnologias">Tecnologias</Link></li>
        <li><Link href="#Estudios" title="ir a estudios">Estudios</Link></li>
        <li><Link href="#Experiencias" title="ir a experiencias">Experiencias</Link></li>
        <li><Link href="#Contactame" title="ir a contactame">Contactame</Link></li>
      </ul>
    </nav>
  );
};


// const DarkModeButton = () => {
//   const [darkMode, handleSetDarkMode] = useDarkMode();

//   return (
//     <Button
//       key={1}
//       onClick={typeof handleSetDarkMode === "function" ? handleSetDarkMode : undefined}
//       styles="flex justify-between items-center gap-2"
//       title={darkMode ? dataLeng.interface.navbar.openmenu : dataLeng.interface.navbar.closemenu}
//     >
//       {darkMode ? dataLeng.interface.navbar.openmenu : dataLeng.interface.navbar.closemenu}
//       {darkMode ? <IconLightMode /> : <IconDarkMode />}
//     </Button>
//   )
// }

const NavbarModal = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenMenu(!openMenu)}
        styles="fixed top-0 right-0 m-2 sm:m-4"
        rightIcon={<IconMenu />}
      />

      {
        openMenu &&
        <div className="bg-stone-950 bg-opacity-50 aboslute top-0 left-0 fixed h-full w-full">
          <nav className="bg-stone-300 dark:bg-stone-800 absolute rounded-s-xl h-full w-3/4 sm:w-1/4 right-0 flex flex-col p-4">
            <div className="flex justify-between items-center">
              <Text text="opciones de pagina" styles="text-lg uppercase" />

              <Button title={dataLeng.interface.navbar.menu} onClick={() => setOpenMenu(!openMenu)} rightIcon={<IconClose />} />
            </div>

            <ul className="text-stone-100 flex flex-col justify-end py-4">
              {/* <li>
                <DarkModeButton />
              </li> */}
              <li><Link href="/#Inicio" title="ir a inicio">Inicio</Link></li>
              <li><Link href="/#Tecnologias" title="ir a tecnologias">Tecnologias</Link></li>
              <li><Link href="/#Estudios" title="ir a estudios">Estudios</Link></li>
              <li><Link href="/#Experiencias" title="ir a experiencias">Experiencias</Link></li>
              <li><Link href="/#Contactame" title="ir a contactame">Contactame</Link></li>
              <li><Link href="/resume" title="ir a inicio">cv</Link></li>
            </ul>
          </nav>
        </div>
      }
    </>
  )
}

export { NavbarModal };