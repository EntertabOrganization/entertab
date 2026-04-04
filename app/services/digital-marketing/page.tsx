import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Digital Marketing - Data-Driven Growth Strategies | EnterTab",
  description: "Build your online presence with precision-targeted campaigns. EnterTab's Digital Marketing service includes SEO, paid ads, social media, and email marketing.",
};

export default function DigitalMarketingPage() {
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
          Digital Marketing
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/DigitalMarketingBg.png" 
          alt="Digital Marketing" 
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
              Driving Measurable Growth Through Digital Marketing
            </h2>
            <div className="space-y-4 text-[#707072] text-[24px] font-normal leading-[32px]">
              <p>
                EnterTab’s Digital Marketing service helps businesses build a strong online presence and reach the right audience with precision. We create tailored, data-driven campaigns that align with your brand goals and customer behavior across platforms like Google, Facebook, Instagram, and LinkedIn.
              </p>
              <p>
                Our services include SEO, paid advertising, social media strategy, email marketing, and performance analytics. We focus on optimizing every touchpoint in the customer journey—from awareness to conversion—ensuring maximum ROI and long-term brand impact. Whether you’re launching a new product or scaling your presence, we turn your digital channels into powerful growth engines.
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
