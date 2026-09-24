import Link from "next/link";
import PatternCTA from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import Image from "next/image";

export default function CTASection() {
  return (
    <div className="max-w-277.75 mx-auto absolute left-1/2 -top-5 lg:top-10 -translate-x-1/2 w-full px-7.5 xl:px-0">
      <div className="py-20 px-7.5 lg:p-20 bg-Peach rounded-2xl flex flex-col lg:flex-row gap-y-10 justify-between items-center relative overflow-hidden">
        <Image
          src={PatternCTA}
          alt=""
          className="absolute scale-205 top-20 right-0 "
        />
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-[40px]/10 text-white font-medium text-center lg:text-left">
            Let’s talk about your project
          </h2>
          <p className="text-white text-center lg:text-left">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className="lg:w-1/5 z-10">
          <Link
            href={"about"}
            className="px-5 py-4 bg-white uppercase rounded-lg font-medium tracking-[1px] text-[15px]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
