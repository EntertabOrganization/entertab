import { Poppins } from "next/font/google";
import Button from "@/app/components/ui/Button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Digital Transformation Hub | EnterTab",
  description: "Modernize your business operations with comprehensive digital transformation strategies. EnterTab helps you navigate digital change successfully.",
};

export default function DigitalTransformationPage() {
  return (
    <main className={poppins.className}>
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[0] sm:left-[20px] top-0 h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] rounded-full bg-primary opacity-20 blur-[100px]"
        />

        <div className="relative z-10">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-[700] text-[#1E1E1F] leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[72px] mb-4 sm:mb-6 max-w-3xl">
            Digital Transformation Hub
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#707072] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mb-6 sm:mb-8 max-w-2xl font-[400]">
            Transform your organization with our comprehensive digital strategy, technology integration, and change management solutions.
          </p>
          <Button href="#contact">Get Started</Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-[700] text-[#1E1E1F] mb-4 sm:mb-6 leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[48px]">
              Reimagine Your Business
            </h2>
            <div className="space-y-3 sm:space-y-4 text-[#707072]">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]">
                Digital transformation isn&apos;t just about technology—it&apos;s about rethinking your entire business model. We guide you through every step of your digital journey.
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]">
                From strategy and planning to implementation and optimization, our team ensures your organization emerges stronger, more agile, and better positioned for future growth.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-10 h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🌐</div>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#707072] font-[500]">End-to-End Digital Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-[700] text-[#1E1E1F] mb-8 sm:mb-10 md:mb-12 text-center leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[44px]">
          Our Transformation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { title: "Strategy & Assessment", description: "Evaluate your current state and develop a clear roadmap for digital transformation." },
            { title: "Cloud Migration", description: "Move your infrastructure to the cloud and unlock scalability and cost savings." },
            { title: "Process Optimization", description: "Streamline operations and eliminate inefficiencies with digital-first processes." },
            { title: "Technology Stack", description: "Select and implement the right tools and platforms for your organization." },
            { title: "Change Management", description: "Guide your team through transformation with training and support." },
            { title: "Data & Analytics", description: "Build a data-driven culture with actionable insights and analytics." },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] text-[#1E1E1F] mb-3">
                {service.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#707072] leading-[20px] sm:leading-[22px] md:leading-[24px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 text-center text-white">
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-[700] mb-4 sm:mb-6 leading-[32px] sm:leading-[40px] md:leading-[44px] lg:leading-[52px]">
            Start Your Digital Journey Today
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Our experts are ready to help you navigate digital transformation.
          </p>
          <Button href="#contact" variant="dark">Schedule a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
