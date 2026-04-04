import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Mobile App Development - iOS & Android | EnterTab",
  description: "Transform your ideas into high-performance mobile applications for iOS and Android. EnterTab's Mobile App Development service provides end-to-end development with exceptional user experiences.",
};

export default function MobileAppPage() {
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
          Mobile App Development
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/MobileDevelopmentBg.png" 
          alt="Mobile App Development" 
          fill
          className="object-cover"
          unoptimized 
        />
      </div>

      {/* Content and Form Row */}
      <section className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-35 rounded-3xl p-8">
          
          {/* Left Column (Content) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[36px] font-semibold text-[#54BF93] mb-6 leading-[44px] tracking-[-0.02em]">
              From Concept to Launch, Built for Performance
            </h2>
            <div className="space-y-4 text-[#707072] text-[24px] font-normal leading-[32px]">
              <p>
                EnterTab’s Mobile App Development service transforms your ideas into polished, high-performance applications for iOS and Android. We combine user-centric design, robust architecture, and API integration to build apps that deliver exceptional user experiences and seamless backend connectivity.
              </p>
              <p>
                Our end-to-end process covers requirements gathering, UI and UX design, agile development sprints, quality assurance, and app store deployment. Post-launch we provide analytics integration and ongoing support to optimize performance, drive user adoption, and ensure your investment continues to deliver value. Whether you need a consumer-facing app or an enterprise solution, our team tailors every aspect to your objectives and growth plans.
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
