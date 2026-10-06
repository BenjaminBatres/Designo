import Image, { StaticImageData } from "next/image";
import Leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";

interface TProjects {
  image: StaticImageData;
  title: string;
  desc: string;
}
interface TProps {
  projects: TProjects[];
}

export default function ProjectsSections({ projects }: TProps) {
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
              width={500}
              className="lg:rounded-t-2xl "
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
