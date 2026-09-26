import Image from "next/image";
import Pattern from "../assets/shared/desktop/bg-pattern-small-circle.svg";
interface TProp {
  banner: string;
  title: string;
  desc: string;
}

export default function HeroBanner({ banner, title, desc }: TProp) {
  return (
    <div className="sm:pt-8 pb-10 sm:pb-16 lg:pb-20 sm:px-7.5">
      <div className="max-w-277.75 mx-auto py-30 px-7.5 sm:px-0 sm:py-18 bg-Peach sm:rounded-2xl flex flex-col gap-6 items-center text-white relative overflow-hidden">
        <Image
          src={banner}
          alt=""
          loading="eager"
          className="hidden sm:block absolute sm:-top-40 right-0"
        />
        <Image
          src={Pattern}
          alt=""
          loading="eager"
          className="sm:hidden absolute top-10 right-10 scale-170"
        />
        <h2 className="text-[32px]/9 sm:text-5xl font-medium up z-10">
          {title}
        </h2>
        <p className="max-w-sm text-center z-10 text-[15px]/6.25">{desc}</p>
      </div>
    </div>
  );
}
