import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import ServiceCard from "./ServiceCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const services = [
  {
    title: "AI Edge – AI-Powered Automation & Intelligence",
    iconLabel: "AI",
  },
  {
    title: "Digital Transformation Hub",
    iconLabel: "DTH",
  },
  {
    title: "Mobile App Development",
    iconLabel: "App",
  },
  {
    title: "Website Development",
    iconLabel: "Web",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Our Services" className="mb-5" />

        <p
          className={`text-center text-[36px] leading-[44px] tracking-[-0.02em] font-[400] text-[#1E1E1F] mt-2 mb-8 md:mb-12 ${poppins.className}`}
        >
          We offer a wide range of digital solutions to help your business
          thrive
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${index < services.length - 1
                  ? "lg:border-r lg:border-[#AEAEB0]"
                  : ""
                } h-full`}
            >
              <ServiceCard
                title={service.title}
                iconLabel={service.iconLabel}
              />
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-8">
          <div className="mt-6 md:mt-8">
            <Button
              variant="primary"
              href="#about"
              showArrow={false}
              className="w-[181px] h-[44px] px-4 py-[10px] !rounded-[12px] justify-center bg-[#65C59D] hover:bg-[#65C59D] border-0 hover:border-0 text-[16px]"
            >
              <span>More about us</span>
              <svg
                width="15"
                height="23"
                viewBox="0 0 15 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2.86621 0.834961C2.51324 0.830097 2.16647 0.925461 1.86816 1.1084L1.84863 1.12012L1.82812 1.13086C1.502 1.30708 1.23696 1.57264 1.0625 1.89258C0.888072 2.21253 0.811487 2.57495 0.841797 2.93555L0.84375 2.9541V2.97266C0.865847 3.54835 0.935514 4.31459 0.935547 4.98828V4.99121C0.934532 5.34643 1.0317 5.6959 1.21777 6.00195C1.40388 6.308 1.67169 6.55992 1.99414 6.72852L2.0127 6.7373L2.0293 6.74805C3.4988 7.60892 4.97365 8.48282 6.45312 9.37012C7.04441 9.72422 7.64382 10.102 8.31934 10.5156L10.8467 12.0625H8.14941C7.96289 12.2094 7.80025 12.3392 7.63184 12.4639C5.88842 13.7543 4.10948 15.0863 2.32617 16.3477L2.29883 16.3652C1.99134 16.5652 1.74569 16.8435 1.58691 17.168C1.42835 17.4922 1.36249 17.8525 1.39453 18.21L1.39551 18.2197V18.2305C1.41903 18.5967 1.43139 18.9641 1.44434 19.3096C1.45748 19.6604 1.47173 19.9949 1.5 20.3252L1.50098 20.3369L1.51367 20.4766C1.55168 20.7752 1.66055 21.062 1.83301 21.3135C2.03006 21.6009 2.30292 21.8317 2.62402 21.9805C2.94543 22.1292 3.30293 22.1899 3.65723 22.1553C4.01125 22.1206 4.34827 21.9925 4.63281 21.7852L4.63965 21.7803L6.52051 20.4287C8.40166 19.0705 10.2838 17.692 12.166 16.2988L12.1719 16.2939L12.3555 16.1533C12.7729 15.8127 13.1179 15.3938 13.3701 14.9209C13.6223 14.448 13.7763 13.9313 13.8242 13.4014L13.8379 13.1738C13.8635 11.9553 13.8255 10.7362 13.7246 9.52148L13.7227 9.49609L13.7217 9.4707C13.7051 8.72473 13.4985 7.99434 13.1201 7.34668C12.7417 6.69901 12.2041 6.15381 11.5547 5.76367H11.5537L11.5498 5.76074C9.01624 4.21597 6.44727 2.68671 3.88281 1.15332L3.86816 1.14453L3.85449 1.13574C3.5618 0.944953 3.21891 0.839904 2.86621 0.834961Z"
                  stroke="white"
                  strokeWidth="1.67"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
