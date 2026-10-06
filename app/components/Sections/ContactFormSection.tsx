import Image from "next/image";
import Pattern from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import PatternMobile from "../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
export default function ContactFormSection() {
  const inputFields = [
    {
      type: "text",
      id: "text",
      stateKey: "text",
      placeholder: "Name",
    },
    {
      type: "email",
      id: "email",
      stateKey: "email",
      placeholder: "Email Address",
    },
    {
      type: "text",
      id: "phone",
      stateKey: "phone",
      placeholder: "Phone",
    },
    {
      type: "textarea",
      id: "Message",
      stateKey: "Message",
      placeholder: "Your message",
      row: 4,
    },
  ];
  return (
    <div className="sm:pt-9 pb-20 sm:px-7.5">
      <div className="max-w-277.75 mx-auto">
        <div className="bg-Peach sm:rounded-2xl grid lg:grid-cols-2 items-center py-20 lg:py-15 gap-10 lg:gap-20 px-5 sm:px-13 lg:px-20 relative overflow-hidden">
          <Image
            src={Pattern}
            alt=""
            className="hidden sm:block absolute -top-35"
          />
          <Image
            src={PatternMobile}
            alt=""
            className="sm:hidden absolute scale-200 top-1/4 left-1/4"
          />
          <div className="space-y-8 z-10">
            <h2 className="text-white font-medium text-5xl text-center sm:text-left">
              Contact Us
            </h2>
            <p className="text-white text-center sm:text-left">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <div className="space-y-9 sm:space-y-3">
            {inputFields.map((field) => (
              <div key={field.id}>
                {field.type === "textarea" ? (
                  <textarea
                    name=""
                    id=""
                    placeholder={field.placeholder}
                    rows={field.row}
                    className="py-3 px-4 text-white placeholder:text-white/60 focus:border-b-3 w-full outline-0 border-b border-white"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="py-3 px-4 w-full outline-0 border-b border-white focus:border-b-3 placeholder:text-white/60 text-white"
                  />
                )}
              </div>
            ))}
            <div className="flex justify-center sm:justify-end">
              <div className="py-4 px-12 bg-white rounded-[10px] uppercase font-medium text-[15px] cursor-not-allowed hover:bg-Light-Peach duration-300 hover:text-white">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
