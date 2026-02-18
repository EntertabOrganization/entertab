import SectionTitle from "../ui/SectionTitle";
import ProcessCard from "./ProcessCard";

const processSteps = [
  {
    number: "01",
    titleBlack: "Listening &",
    titleGreen: "Analysis",
    description:
      "We begin by deeply understanding your vision, goals, and challenges, conducting thorough research to align our solutions with your business needs",
    hasImage: true,
    imageLabel: "Listening & Analysis Image",
  },
  {
    number: "02",
    titleBlack: "Strategic",
    titleGreen: "Planning",
    description:
      "Our experts craft a data-driven strategy, combining market insights, technology, and innovation to build a strong foundation for your brand.",
    hasImage: true,
    imageLabel: "Strategic Planning Image",
  },
  {
    number: "03",
    titleBlack: "Optimization &",
    titleGreen: "Growth",
    description:
      "We begin by deeply understanding your vision, goals, and challenges, conducting thorough research to align our solutions with your business needs",
    hasImage: false,
  },
  {
    number: "04",
    titleBlack: "Execution &",
    titleGreen: "Implementation",
    description:
      "Our team of skilled developers, designers, and marketers bring the strategy to life, ensuring precision, quality, and seamless integration.",
    hasImage: false,
  },
];

export default function WorkingProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Working Process" className="mb-3" />
        <h3 className="text-center text-2xl md:text-3xl font-bold text-text-dark mb-12 md:mb-16">
          How We Work
        </h3>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border border-border-light rounded-2xl p-6 md:p-10">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              titleBlack={step.titleBlack}
              titleGreen={step.titleGreen}
              description={step.description}
              hasImage={step.hasImage}
              imageLabel={step.imageLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
