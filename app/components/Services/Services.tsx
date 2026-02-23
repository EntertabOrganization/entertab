import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "AI Edge – AI-Powered Automation & Intelligence",
    iconColor: "#D4A843",
    iconLabel: "AI",
  },
  {
    title: "Digital Transformation Hub",
    iconColor: "#D45B5B",
    iconLabel: "DTH",
  },
  {
    title: "Mobile App Development",
    iconColor: "#3EBD93",
    iconLabel: "App",
  },
  {
    title: "Website Development",
    iconColor: "#B07D5B",
    iconLabel: "Web",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Our Services" className="mb-2" />

        <p className="text-center text-text-dark text-lg md:text-xl font-medium mt-2 mb-8 md:mb-12">
          We offer a wide range of digital solutions to help your business
          thrive
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${
                index < services.length - 1
                  ? "lg:border-r lg:border-border-light"
                  : ""
              }`}
            >
              <ServiceCard
                title={service.title}
                iconColor={service.iconColor}
                iconLabel={service.iconLabel}
              />
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" href="#services">
            Show all services
          </Button>
        </div>
      </div>
    </section>
  );
}
