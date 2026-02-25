import Image from "next/image";
import { Poppins } from "next/font/google";
import SectionTitle from "../ui/SectionTitle";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function AboutUs() {
  return (
    <section
      id="about"
      className={`relative mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 ${poppins.className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20px] top-0 h-[200px] w-[200px] rounded-full bg-primary opacity-30 blur-[80px]"
      />

      <div className="relative z-10 w-full">
        <SectionTitle title="About Us" className="mb-5" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="w-full">
            <h3 className="mb-6 text-[36px] leading-[44px] tracking-[-0.02em] font-[600] text-[#1E1E1F]">
              About EnterTab
            </h3>
            <div className="space-y-4 text-[#707072] tracking-normal">
              <p className="text-[24px] leading-[32px] font-[400] tracking-normal">
                Founded in 2015, EnterTab is a leading digital solutions
                provider in the Washington, D.C. area. It serves B2B and B2C
                clients with web development, mobile apps, UI/UX, branding, and
                digital marketing.
              </p>
              <p className="text-[24px] leading-[32px] font-[400] tracking-normal">
                The company builds scalable, data-driven solutions that enhance
                engagement and streamline operations.
              </p>
              <p className="text-[24px] leading-[32px] font-[400] tracking-normal">
                EnterTab leverages AI automation and advanced contact center
                systems to boost efficiency and customer experience.
              </p>
              <p className="text-[24px] leading-[32px] font-[400] tracking-normal">
                Its technology helps businesses grow, modernize, and stay
                competitive.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-2xl aspect-[520/360]">
              <Image
                src="/AboutUs.jpg"
                alt="About EnterTab"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
