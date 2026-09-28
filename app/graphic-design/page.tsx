import banner from "../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg";
import HeroBanner from "../components/HeroBanner";

import Change from "../assets/graphic-design/desktop/image-change.jpg";
import BoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import Science from "../assets/graphic-design/desktop/image-science.jpg";
import ProjectsSections from "../components/Sections/ProjectsSections";
import ServicesShowCase from "../components/Sections/ServicesShowCase";
export default function page() {
  const projects = [
    {
      image: Change,
      title: "Tim Brown",
      desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      image: BoxedWater,
      title: "Boxed Water",
      desc: "A simple packaging concept made for Boxed Water",
    },
    {
      image: Science,
      title: "Science!",
      desc: "A poster made in collaboration with the Federal Art Project",
    },
  ];
  return (
    <>
      <HeroBanner
        banner={banner}
        title="Graphic Design"
        desc="We deliver eye-catching branding materials that are 
tailored to meet your business objectives."
        bannerClassName="left-0 -top-20 lg:-top-1/2"
      />
      <ProjectsSections projects={projects} />
      <ServicesShowCase />
    </>
  );
}
