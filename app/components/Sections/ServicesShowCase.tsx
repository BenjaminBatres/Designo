"use client";
import WebDesignImage from "../../assets/home/desktop/image-web-design-large.jpg";
import WebDesignImageTablet from "../../assets/home/tablet/image-web-design.jpg";
import WebDesignImageMobile from "../../assets/home/mobile/image-web-design.jpg";
import AppDesignImageDesktop from "../../assets/home/desktop/image-app-design.jpg";
import AppDesignImageTablet from "../../assets/home/tablet/image-app-design.jpg";
import AppDesignImageMobile from "../../assets/home/mobile/image-app-design.jpg";
import GraphicDesignImageDesktop from "../../assets/home/desktop/image-graphic-design.jpg";
import GraphicDesignImageTablet from "../../assets/home/tablet/image-graphic-design.jpg";
import GraphicDesignImageMobile from "../../assets/home/mobile/image-graphic-design.jpg";
import Service from "../ui/Service";
import { usePathname } from "next/navigation";
export default function ServicesShowCase() {
  const pathname = usePathname();
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
    <section
      className={`${pathname !== "/" ? "pt-25 pb-30 lg:py-20 px-7.5" : "pt-15 pb-20 lg:py-20 px-7.5"}`}
    >
      <div className="max-w-277.75 mx-auto grid lg:grid-cols-2 gap-x-7.5 gap-y-6">
        {services
          .filter((service) => service.path !== pathname)
          .map((service, id) => (
            <Service
              key={id}
              backgroundColor={service.backgroundColor}
              imageDesktop={service.imageDesktop}
              imageMobile={service.imageMobile}
              imageTablet={service.imageTablet}
              path={service.path}
              span={service.span}
              title={service.title}
            />
          ))}
      </div>
    </section>
  );
}
