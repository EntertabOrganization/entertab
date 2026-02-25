import SectionTitle from "../ui/SectionTitle";
import ProcessCard from "./ProcessCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const processSteps = [
  {
    number: "01",
    titleBlack: "Listening &",
    titleGreen: "Analysis",
    description:
      "We begin by deeply understanding your vision, goals, and challenges, conducting thorough research to align our solutions with your business needs",
    imageSrc: "/service1.png",
    imageAlt: "Listening & Analysis",
  },
  {
    number: "02",
    titleBlack: "Strategic",
    titleGreen: "Planning",
    description:
      "Our experts craft a data-driven strategy, combining market insights, technology, and innovation to build a strong foundation for your brand.",
    imageSrc: "/service2.png",
    imageAlt: "Strategic Planning",
  },
  {
    number: "03",
    titleBlack: "Optimization &",
    titleGreen: "Growth",
    description:
      "We begin by deeply understanding your vision, goals, and challenges, conducting thorough research to align our solutions with your business needs",
    imageSrc: "/service3.png",
    imageAlt: "Optimization & Growth",
  },
  {
    number: "04",
    titleBlack: "Execution &",
    titleGreen: "Implementation",
    description:
      "Our team of skilled developers, designers, and marketers bring the strategy to life, ensuring precision, quality, and seamless integration.",
    imageSrc: "/service4.png",
    imageAlt: "Execution & Implementation",
  },
];

export default function WorkingProcess() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Working Process" className="mb-2" />
        <h3
          className={`${poppins.className} text-center text-text-dark font-normal text-[36px] leading-[44px] tracking-[-0.02em] mb-8 md:mb-12`}
        >
          How We Work
        </h3>
    
        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              titleBlack={step.titleBlack}
              titleGreen={step.titleGreen}
              description={step.description}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
