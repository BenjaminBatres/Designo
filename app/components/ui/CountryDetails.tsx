import Image, { StaticImageData } from "next/image";
import pattern from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

interface ICountryDetails {
  imageDesktop: StaticImageData;
  imageTablet: StaticImageData;
  title: string;
  address: string[];
  contact: string[];
}

export default function CountryDetails({
  imageDesktop,
  imageTablet,
  title,
  address,
  contact,
}: ICountryDetails) {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:nth-2:flex-row-reverse sm:gap-7.5">
      <div className="bg-[#fdf3f0] sm:px-20 py-20 lg:py-0 flex flex-col items-center sm:items-start gap-4 justify-center sm:rounded-2xl lg:w-[70%] relative">
        <Image src={pattern} alt="" className="absolute bottom-0 left-0" />
        <h2 className="text-Peach text-[32px] sm:text-[40px] font-medium">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-7.5 sm:gap-30">
          <div className="space-y-2">
            {address.map((info, id) => (
              <p key={id} className="nth-1:font-bold text-center sm:text-left">
                {info}
              </p>
            ))}
          </div>
          <div className="space-y-2">
            {contact.map((info, id) => (
              <p key={id} className="nth-1:font-bold text-center sm:text-left">
                {info}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Image src={imageDesktop} alt="" className="hidden lg:block rounded-2xl" />
      <Image src={imageTablet} alt="" className="lg:hidden sm:rounded-2xl w-full h-80 object-cover" />
    </div>
  );
}
