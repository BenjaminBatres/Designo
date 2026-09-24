import Image from "next/image";
import Passionate from "../../assets/home/desktop/illustration-passionate.svg";
import ResourceFul from "../../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../../assets/home/desktop/illustration-friendly.svg";
import Leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";
export default function FeaturesSection() {
  const features = [
    {
      image: Passionate,
      title: "Passionate",
      desc: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      gradient: "bg-linear-to-r",
    },
    {
      image: ResourceFul,
      title: "ResourceFul",
      desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      gradient: "bg-linear-to-t",
    },
    {
      image: Friendly,
      title: "Friendly",
      desc: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      gradient: "bg-linear-to-b",
    },
  ];
  return (
    <section className="pt-10 pb-20 lg:py-20 px-7.5 relative overflow-hidden">
      <Image
        src={Leaf}
        alt=""
        className="hidden md:block absolute -bottom-30 -right-1/4 lg:right-0 -z-10 rotate-180"
      />
      <div className="max-w-277.75 mx-auto grid lg:grid-cols-3 gap-20 sm:gap-7.5">
        {features.map((feat, id) => (
          <div
            className="flex flex-col sm:flex-row lg:flex-col items-center gap-12"
            key={id}
          >
            <figure
              className={`${feat.gradient} to-[#5D0202]/0 from-[#5D0202]/10 rounded-full sm:w-1/2`}
            >
              <Image
                src={feat.image}
                alt=""
                className="size-full object-cover"
              />
            </figure>
            <div className="flex flex-col items-center sm:items-start lg:items-center gap-8 sm:gap-4 lg:gap-8">
              <h2 className="text-xl uppercase font-medium tracking-[5px] text-Black">
                {feat.title}
              </h2>
              <p className="text-center sm:text-left lg:text-center leading-6.5">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
