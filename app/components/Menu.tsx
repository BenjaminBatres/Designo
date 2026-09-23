"use client";
import Image from "next/image";
import MenuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../assets/shared/mobile/icon-close.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Links {
  path: string;
  name: string;
}

interface TProps {
  links: Links[];
}

export default function Menu({ links }: TProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, []);
  return (
    <div className="sm:hidden">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {isOpen ? (
          <Image src={CloseIcon} alt="" />
        ) : (
          <Image src={MenuIcon} alt="" />
        )}
      </div>
      <div
        className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} bg-black/50 fixed inset-0 top-30 duration-500`}
      />
      <div
        className={`sm:hidden fixed inset-0 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"} top-30 duration-500 `}
      >
        <div className="bg-Black px-6 py-12">
          <ul className="flex flex-col gap-8">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.path}
                  className="uppercase text-2xl tracking-[2px] text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
