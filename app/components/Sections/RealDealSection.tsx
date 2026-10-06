import Image from "next/image";
import RealDeal from "../../assets/about/desktop/image-real-deal.jpg";
import RealDealTablet from "../../assets/about/tablet/image-real-deal.jpg";
import Pattern1 from  "../../assets/shared/desktop/bg-pattern-two-circles.svg"
import Pattern2 from  "../../assets/shared/desktop/bg-pattern-three-circles.svg"
export default function RealDealSection() {
  return (
    <section className="pt-20 pb-35 sm:py-20 sm:px-7.5">
      <div className="max-w-277.75 mx-auto flex flex-col-reverse lg:flex-row rounded-2xl overflow-hidden">
        <div className="bg-[#f7edea] flex flex-col items-center lg:items-start justify-center px-5 sm:px-20 py-20 gap-6 relative">
            <Image src={Pattern1} alt="" className="hidden lg:block absolute bottom-0 left-0"/>
            <Image src={Pattern2} alt="" className="lg:hidden absolute sm:bottom-10 right-0"/>
          <h2 className="text-Peach text-[32px] sm:text-[40px] font-medium">The real deal</h2>
          <p className="text-[15px] sm:text-base text-center lg:text-left">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[15px] sm:text-base text-center lg:text-left">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <Image src={RealDeal} alt="" loading="eager" className="hidden lg:block"/>
        <Image src={RealDealTablet} alt="" loading="eager" className="lg:hidden w-full"/>
      </div>
    </section>
  );
}
