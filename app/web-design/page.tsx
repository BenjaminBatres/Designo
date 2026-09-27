import HeroBanner from "../components/HeroBanner";
import WebDesignBanner from "../assets/web-design/desktop/bg-pattern-intro-web.svg";
import ProjectsSections from "../components/Sections/ProjectsSections";
import ServicesShowCase from "../components/Sections/ServicesShowCase";

import ExpressImg from "../assets/web-design/desktop/image-express.jpg";
import TransferImg from "../assets/web-design/desktop/image-transfer.jpg";
import PhotonImg from "../assets/web-design/desktop/image-photon.jpg";
import BuilderImg from "../assets/web-design/desktop/image-builder.jpg";
import BlogerImg from "../assets/web-design/desktop/image-blogr.jpg";
import CampImg from "../assets/web-design/desktop/image-camp.jpg";
export default function page() {
  const projects = [
    {
      image: ExpressImg,
      title: "Express",
      desc: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      image: TransferImg,
      title: "Transfer",
      desc: "Site for low-cost money transfers and sending money within seconds",
    },
    {
      image: PhotonImg,
      title: "Photon",
      desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      image: BuilderImg,
      title: "Builder",
      desc: "Connects users with local contractors based on their location",
    },
    {
      image: BlogerImg,
      title: "Blogr",
      desc: "Blogr is a platform for creating an online blog or publication",
    },
    {
      image: CampImg,
      title: "Camp",
      desc: "Get expert training in coding, data, design, and digital marketing",
    },
  ];
  return (
    <>
      <HeroBanner
        bannerClassName="sm:-top-40 right-0"
        title="Web Design"
        desc="We build websites that serve as powerful marketing tools and bring
          memorable brand experiences."
        banner={WebDesignBanner}
      />
      <ProjectsSections projects={projects}/>
      <ServicesShowCase />
    </>
  );
}
