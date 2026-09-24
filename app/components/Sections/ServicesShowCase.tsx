import Image from "next/image";
import WebDesignImage from "../../assets/home/desktop/image-web-design-large.jpg";
import WebDesignImageTablet from "../../assets/home/tablet/image-web-design.jpg";
import WebDesignImageMobile from "../../assets/home/mobile/image-web-design.jpg";
import AppDesignImageDesktop from "../../assets/home/desktop/image-app-design.jpg";
import AppDesignImageTablet from "../../assets/home/tablet/image-app-design.jpg";
import AppDesignImageMobile from "../../assets/home/mobile/image-app-design.jpg";
import GraphicDesignImageDesktop from "../../assets/home/desktop/image-graphic-design.jpg";
import GraphicDesignImageTablet from "../../assets/home/tablet/image-graphic-design.jpg";
import GraphicDesignImageMobile from "../../assets/home/mobile/image-graphic-design.jpg";
import RightArrow from "../../assets/shared/desktop/icon-right-arrow.svg"

import Link from "next/link";
export default function ServicesShowCase() {
  const services = [
    {
      imageDesktop: WebDesignImage,
      imageTablet: WebDesignImageTablet,
      imageMobile: WebDesignImageMobile,
      title: "Web Design",
      path: "/web-design",
      span: "row-span-2",
      backgroundColor: "bg-Black/60 lg:bg-Peach/80",
    },
    {
      imageDesktop: AppDesignImageDesktop,
      imageTablet: AppDesignImageTablet,
      imageMobile: AppDesignImageMobile,
      title: "App Design",
      path: "/app-design",
      span: "row-span-1",
      backgroundColor: "bg-Black/60",
    },
    {
      imageDesktop: GraphicDesignImageDesktop,
      imageTablet: GraphicDesignImageTablet,
      imageMobile: GraphicDesignImageMobile,
      title: "Graphic Design",
      path: "/graphic-design",
      span: "row-span-1",
      backgroundColor: "bg-Black/60",
    },
  ];
  return (
    <section className="pt-15 pb-20 lg:py-20 px-7.5">
      <div className="max-w-277.75 mx-auto grid lg:grid-cols-2 gap-x-7.5 gap-y-6">
        {services.map((service, id) => (
          <Link
            href={service.path}
            key={id}
            className={`relative rounded-2xl overflow-hidden ${service.span}`}
          >
            <Image
              src={service.imageDesktop}
              alt=""
              loading="eager"
              className="w-full hidden lg:block"
            />
            <Image
              src={service.imageTablet}
              alt=""
              loading="eager"
              className="w-full hidden sm:block lg:hidden"
            />
            <Image
              src={service.imageMobile}
              alt=""
              loading="eager"
              className="w-full sm:hidden"
            />
            <div
              className={`absolute inset-0 ${service.backgroundColor} flex flex-col items-center justify-center gap-3 sm:gap-6`}
            >
              <h2 className="text-[28px]/9 tracking-[1.4px] font-medium sm:text-[40px]/12 text-white text-center">{service.title}</h2>
              <div className="flex items-center gap-4">
                <span className="text-white uppercase text-[15px] tracking-[5px]">
                  View Project{" "}
                </span>
              <Image src={RightArrow} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
