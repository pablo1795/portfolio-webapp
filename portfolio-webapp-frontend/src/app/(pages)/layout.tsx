import { NavbarModal } from "@/components";

export default function MainTemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stone-300">
      <NavbarModal />
      {children}
    </div>
  );
}
