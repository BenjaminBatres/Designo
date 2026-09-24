import Link from "next/link";
import CTASection from "./Sections/CTASection";
import Image from "next/image";
import Logo from "../assets/shared/desktop/logo-light.png";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import YoutubeIcon from "../assets/shared/desktop/icon-youtube.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import PinterestIcon from "../assets/shared/desktop/icon-pinterest.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";
export default function Footer() {
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

  const address = [
    "Designo Central Office",
    "3886 Wellington Street",
    "Toronto Ontario M9C 3J5",
  ];
  const contacts = [
    "Contact Us (Central Office)",
    "P : +1 253-863-8967",
    "M : contact@designo.co",
  ];

  const socials = [
    FacebookIcon,
    YoutubeIcon,
    TwitterIcon,
    PinterestIcon,
    InstagramIcon,
  ];
  return (
    <section className="pt-60 relative">
      <CTASection />
      <footer className="pt-50 sm:pt-45 pb-15 px-7.5 bg-Black">
        <div className="max-w-277.75 mx-auto space-y-8">
          <div className="flex flex-col items-center sm:flex-row justify-between sm:border-b border-white/10 sm:pb-12 gap-10 flex-wrap">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logo"
                loading="eager"
                className="h-6.75 w-50 sm:w-full"
              />
            </Link>
            <ul className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10.5">
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.path}
                    className="uppercase text-sm tracking-[2px] text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-10 flex-wrap">
            <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-20 lg:gap-50">
              <div className="flex flex-col items-center sm:items-start gap-2">
                {address.map((contact, id) => (
                  <p key={id} className="text-white/50 nth-1:font-bold">
                    {contact}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                {contacts.map((contact, id) => (
                  <p key={id} className="text-white/50 font-bold">
                    {contact}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {socials.map((social, id) => (
                <Image key={id} src={social} alt="" />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
