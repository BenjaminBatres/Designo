import banner from "../assets/app-design/desktop/bg-pattern-intro-app.svg";
import HeroBanner from "../components/HeroBanner";
import ServicesShowCase from "../components/Sections/ServicesShowCase";
import ProjectsSections from "../components/Sections/ProjectsSections";

import AirFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import EyeCam from "../assets/app-design/desktop/image-eyecam.jpg";
import Faceit from "../assets/app-design/desktop/image-faceit.jpg";
import Todo from "../assets/app-design/desktop/image-todo.jpg";
import Loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
export default function page() {
  const projects = [
    {
      image: AirFilter,
      title: "Airfilter",
      desc: "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      image: EyeCam,
      title: "Eyecam",
      desc: "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      image: Faceit,
      title: "Photon",
      desc: "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      image: Todo,
      title: "Builder",
      desc: "A todo app that features cloud sync with light and dark mode",
    },
    {
      image: Loopstudios,
      title: "Blogr",
      desc: "A VR experience app made for Loopstudios",
    },
  ];
  return (
    <>
      <HeroBanner
        bannerClassName="sm:-top-40 left-0"
        banner={banner}
        title="App Design"
        desc="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      <ProjectsSections projects={projects} />
      <ServicesShowCase />
    </>
  );
}
