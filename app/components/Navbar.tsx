import Image from "next/image";
import Logo from "../assets/shared/desktop/logo-dark.png";
import Link from "next/link";
import Menu from "./Menu";
export default function Navbar() {
  const links = [
    {
      path: "/about",
      name: "Our company",
    },
    {
      path: "/locations",
      name: "Locations",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center h-25 px-6 border">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" loading="eager" className="h-6 w-full" />
      </Link>
      <ul className="hidden sm:flex gap-10.5">
        {links.map((link, id) => (
          <li key={id}>
            <Link href={link.path} className="uppercase text-sm tracking-[2px]">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Menu links={links} />
    </nav>
  );
}
