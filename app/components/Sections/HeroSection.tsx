import Image from "next/image";
import HeroPhone from "../../assets/home/desktop/image-hero-phone.png";
import HeroHome from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="sm:pt-6 pb-20 sm:px-8">
      <div className="max-w-277.75 mx-auto px-4 sm:px-0 bg-Peach flex flex-col items-center pt-20 relative h-210.75 lg:h-160 overflow-hidden sm:rounded-2xl">
        <div className="lg:absolute top-[22%] left-[8%] flex flex-col items-center lg:items-start gap-6 sm:gap-8 max-w-135 z-10">
          <h1 className="text-white text-[32px] sm:text-5xl/12 font-medium text-center lg:text-left">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-center lg:text-left text-[15px]/6.25 sm:text-base/6.25">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link
            href={"/"}
            className="px-8 py-4 bg-white text-[15px] font-medium uppercase rounded-lg inline-block sm:mt-2"
          >
            Learn more
          </Link>
        </div>
        {/* Hero Home Image */}
        <Image src={HeroHome} alt="" className="absolute -right-10 sm:right-0" />
        
        <div className="absolute top-[53%] xs:top-[35%] lg:-top-10 lg:-right-15 scale-150 xs:scale-100">
          <Image src={HeroPhone} alt="" className="" />
        </div>
      </div>
    </section>
  );
}
