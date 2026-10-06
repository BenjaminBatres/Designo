import CanadaMap from "../../assets/locations/desktop/image-map-canada.png";
import CanadaMapTablet from "../../assets/locations/tablet/image-map-canada.png";
import AustraliaMap from "../../assets/locations/desktop/image-map-australia.png";
import UkMap from "../../assets/locations/desktop/image-map-united-kingdom.png";
import AustraliaMapTablet from "../../assets/locations/tablet/image-map-australia.png";
import UkMapTablet from "../../assets/locations/tablet/image-map-uk.png";
import CountryDetails from "../ui/CountryDetails";

export default function CountryDetailsSection() {
  const countryDetails = [
    {
      imageDesktop: CanadaMap,
      imageTablet: CanadaMapTablet,
      title: "Canada",
      address: [
        "Designo Central Office",
        "3886 Wellington Street",
        "Toronto Ontario M9C 3J5",
      ],
      contacts: ["Contact", "P : +1 253-863-8967", "M : contact@designo.co"],
    },
    {
      imageDesktop: AustraliaMap,
      imageTablet: AustraliaMapTablet,
      title: "Australia",
      address: [
        "Designo AU Office",
        "19 Balonne Street",
        "New South Wales 2443",
      ],
      contacts: ["Contact", "P : (02) 6720 9092", "M : contact@designo.au"],
    },
    {
      imageDesktop: UkMap,
      imageTablet: UkMapTablet,
      title: "United Kingdom",
      address: ["Designo AK Office", "13  Colorado Way", "Rhyd-y-fro SA8 9GA"],
      contacts: ["Contact", "P : 078 3115 1400", "M : contact@designo.uk"],
    },
  ];
  return (
    <section className="sm:pt-8 pb-35 sm:pb-20 sm:px-7.5 ">
      <div className="max-w-277.75 mx-auto space-y-7.5">
        {countryDetails.map((detail, id) => (
          <CountryDetails
            key={id}
            title={detail.title}
            imageDesktop={detail.imageDesktop}
            imageTablet={detail.imageTablet}
            address={detail.address}
            contact={detail.contacts}
          />
        ))}
      </div>
    </section>
  );
}
