import Image from "next/image";
import BannerHeroDesktop from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import AboutImgDesktop from "../../assets/about/desktop/image-about-hero.jpg";
import AboutImgTablet from "../../assets/about/tablet/image-about-hero.jpg";
import AboutImgMobile from "../../assets/about/mobile/image-about-hero.jpg";
import Leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg"
export default function AboutSection() {
  return (
    <div className="sm:pt-8 sm:pb-20 sm:px-7.5 relative">
      <Image src={Leaf} alt="" className="hidden lg:block absolute -left-7 top-1/2"/>
      <div className="max-w-277.75 mx-auto flex flex-col-reverse lg:flex-row sm:rounded-2xl overflow-hidden">
        <div className="bg-Peach text-white flex flex-col gap-8 justify-center py-20 lg:py-0 px-5 sm:px-20 relative">
          <h2 className="font-medium text-[32px]/9 sm:text-5xl text-center lg:text-left z-10">
            About Us
          </h2>
          <p className="leading-6.75 text-center lg:text-left z-10">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
          <Image
            src={BannerHeroDesktop}
            alt=""
            className="absolute left-20 sm:left-0 -top-1/2 sm:top-auto rotate-50 lg:rotate-0"
          />
        </div>

        <Image
          src={AboutImgDesktop}
          alt=""
          className="hidden lg:block w-full"
        />
        <Image
          src={AboutImgTablet}
          alt=""
          className="hidden sm:block lg:hidden w-full"
        />
        <Image src={AboutImgMobile} alt="" className="sm:hidden w-full" />
      </div>
    </div>
  );
}
