import Image from "next/image";
import ExpressImg from "../../assets/web-design/desktop/image-express.jpg";
import TransferImg from "../../assets/web-design/desktop/image-transfer.jpg";
import PhotonImg from "../../assets/web-design/desktop/image-photon.jpg";
import BuilderImg from "../../assets/web-design/desktop/image-builder.jpg";
import BlogerImg from "../../assets/web-design/desktop/image-blogr.jpg";
import CampImg from "../../assets/web-design/desktop/image-camp.jpg";
import Leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";

export default function ProjectsSections() {
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
    <section className="pt-10 sm:py-15 px-7.5 relative">
      <Image
        src={Leaf}
        alt=""
        loading="eager"
        className="hidden md:block absolute -top-50 left-0 -z-10 "
      />
      <div className="max-w-277.75 mx-auto grid lg:grid-cols-3 gap-x-7.5 gap-y-8">
        {projects.map((project, id) => (
          <div
            key={id}
            className="grid sm:grid-cols-2 items-center lg:grid-cols-1 bg-[#fdf3f0] rounded-2xl"
          >
            <Image
              src={project.image}
              alt=""
              loading="eager"
              className="lg:rounded-t-2xl"
            />
            <div className="flex flex-col items-center p-8 gap-2">
              <h2 className="text-xl text-Peach font-medium tracking-[5px] uppercase">
                {project.title}
              </h2>
              <p className="text-center leading-6.25">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
