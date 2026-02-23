import SectionTitle from "../ui/SectionTitle";

export default function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-16 bg-mint/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="About Us" className="mb-8 md:mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-6">
              About EnterTab
            </h3>
            <div className="space-y-4 text-text-gray text-base leading-relaxed">
              <p>
                Founded in 2015, EnterTab is a leading digital solutions
                provider in the Washington, D.C. area. It serves B2B and B2C
                clients with web development, mobile apps, UI/UX, branding, and
                digital marketing.
              </p>
              <p>
                The company builds scalable, data-driven solutions that enhance
                engagement and streamline operations.
              </p>
              <p>
                EnterTab leverages AI automation and advanced contact center
                systems to boost efficiency and customer experience.
              </p>
              <p>
                Its technology helps businesses grow, modernize, and stay
                competitive.
              </p>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] h-[300px] md:h-[360px] img-placeholder rounded-2xl text-lg">
              About Image
              <br />
              (AI-themed illustration)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
