import Image from "next/image";
import WorldClass from "../../assets/about/desktop/image-world-class-talent.jpg";
import WorldClassTablet from "../../assets/about/tablet/image-world-class-talent.jpg";
import WorldClassMobile from "../../assets/about/mobile/image-world-class-talent.jpg";
import pattern from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
export default function WorldTalentSection() {
  return (
    <section className="pb-15 sm:py-15 sm:px-7.5">
      <div className="max-w-277.75 mx-auto flex flex-col lg:flex-row sm:rounded-2xl overflow-hidden relative">
        <Image src={pattern} alt="" className="hidden sm:block absolute left-20 top-87 opacity-30"/>
        <Image src={WorldClass} alt="" className="hidden lg:block z-10"/>
        <Image src={WorldClassTablet} alt="" className="z-10 w-full hidden sm:block lg:hidden"/>
        <Image src={WorldClassMobile} alt="" className="z-10 w-full lg:hidden"/>
        <div className="px-5 sm:px-20 py-20 lg:py-0 bg-[#f7edea] flex flex-col items-center lg:items-start justify-center gap-6">
          <h2 className="text-[40px]/12 text-Peach font-medium">World-class talent</h2>
          <div className="space-y-5">
            <p className="leading-6.5 text-center lg:text-left">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="leading-6.5 text-center lg:text-left">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
