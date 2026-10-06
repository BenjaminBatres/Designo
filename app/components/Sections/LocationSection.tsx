import Image from "next/image";
import Canada from "../../assets/shared/desktop/illustration-canada.svg";
import Australia from "../../assets/shared/desktop/illustration-australia.svg";
import UnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import Link from "next/link";
export default function LocationSection() {
  const locations = [
    {
      image: Canada,
      title: "Canada",
      gradient: "bg-linear-to-b",
    },
    {
      image: Australia,
      title: "Australia",
      gradient: "bg-linear-to-r",
    },
    {
      image: UnitedKingdom,
      title: "United Kingdom",
      gradient: "bg-linear-to-t",
    },
  ];
  return (
    <section className="py-10">
      <div className="max-w-277 mx-auto grid lg:grid-cols-3 gap-12 lg:gap-0">
        {locations.map((location, id) => (
          <div key={id} className="flex flex-col items-center gap-12">
            <figure
              className={`${location.gradient} to-[#5D0202]/0 from-[#5D0202]/10 rounded-full lg:w-1/2`}
            >
              <Image src={location.image} alt="" />
            </figure>
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-xl font-medium uppercase tracking-[5px]">
                {location.title}
              </h2>
              <Link
                href={"/location"}
                className="bg-Peach px-5 py-3 rounded-lg text-white uppercase text-[15px] hover:bg-Peach/70 duration-300"
              >
                See location
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
