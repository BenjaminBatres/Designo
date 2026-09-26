import React from "react";
import HeroBanner from "../components/HeroBanner";
import WebDesignBanner from "../assets/web-design/desktop/bg-pattern-intro-web.svg";
import ProjectsSections from "../components/Sections/ProjectsSections";
import ServicesShowCase from "../components/Sections/ServicesShowCase";
export default function page() {
  return (
    <>
      <HeroBanner
        title="Web Design"
        desc="We build websites that serve as powerful marketing tools and bring
          memorable brand experiences."
        banner={WebDesignBanner}
      />
      <ProjectsSections />
      <ServicesShowCase />
    </>
  );
}
