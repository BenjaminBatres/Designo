
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import RightArrow from "../../assets/shared/desktop/icon-right-arrow.svg"

interface Services {
    path: string
    title: string
    imageDesktop: StaticImageData
    imageTablet: StaticImageData
    imageMobile: StaticImageData
    backgroundColor: string
    span: string
}
export default function Service({backgroundColor, imageDesktop, imageMobile, imageTablet, path, span, title}:Services) {
    return (
    <Link
      href={path}
      className={`relative rounded-2xl overflow-hidden group ${span}`}
    >
      <Image
        src={imageDesktop}
        alt=""
        loading="eager"
        className="w-full hidden lg:block"
      />
      <Image
        src={imageTablet}
        alt=""
        loading="eager"
        className="w-full hidden sm:block lg:hidden"
      />
      <Image
        src={imageMobile}
        alt=""
        loading="eager"
        className="w-full sm:hidden h-62 object-cover"
      />
      <div
        className={`absolute inset-0 bg-Dark-Grey/50 hover:bg-Peach/80 flex flex-col items-center justify-center gap-3 sm:gap-6 duration-300`}
      >
        <h2 className="text-[28px]/9 tracking-[1.4px] font-medium sm:text-[40px]/12 text-white text-center">
          {title}
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-white uppercase text-[15px] tracking-[5px]">
            View Project{" "}
          </span>
          <Image src={RightArrow} alt="" />
        </div>
      </div>
    </Link>
  );
}
