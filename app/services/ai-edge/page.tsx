import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "AI Edge - AI-Powered Automation & Intelligence | EnterTab",
  description: "Transform your business with AI-powered automation and intelligent solutions. EnterTab's AI Edge service delivers cutting-edge automation and machine learning capabilities.",
};

export default function AIEdgePage() {
  return (
    <>
      <Header />
      <main className={`${poppins.className} py-20 md:py-32 bg-gray-50 flex flex-col items-center`}
      style={{
        background: "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
      }}>
      {/* Title */}
      <div className="w-full text-center px-4 mb-8">
        <h1 className="text-[36px] font-semibold text-[#54BF93]">
          AI Edge – AI-Powered <br></br>
          Automation & Intelligence
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/AiBg.png" 
          alt="AI Edge Solutions" 
          fill
          className="object-cover"
          unoptimized 
        />
        {/* Note: Unoptimized used here or placeholder path, adjust as needed */}
      </div>

      {/* Content and Form Row */}
      <section className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-35 rounded-3xl p-8">
          
          {/* Left Column (Content) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[36px] font-semibold text-[#54BF93] mb-6 leading-[44px] tracking-[-0.02em]">
              Streamline Operations and Elevate Customer Experience
            </h2>
            <div className="space-y-4 text-[#707072] text-[24px] font-normal leading-[32px]">
              <p>
                AI Edge enables businesses to harness the power of artificial intelligence to streamline operations, enhance customer experiences, and drive data-informed decisions.
              </p>
              <p>
                Our solutions include smart chatbots, machine learning models, and predictive analytics designed to automate routine workflows, uncover trends, and deliver measurable impact.
              </p>
              <p>
                Whether improving service delivery or optimizing internal processes, AI Edge equips B2B and B2C enterprises with the tools to innovate and scale efficiently.
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
