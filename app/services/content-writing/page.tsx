import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Marketing Content Writing - High-Impact Digital Content | EnterTab",
  description: "Craft compelling content that resonates with your audience. EnterTab's Marketing Content Writing service covers website copy, landing pages, and all digital platforms.",
};

export default function ContentWritingPage() {
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
          Marketing Content Writing
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/MarketingContentBg.png" 
          alt="Marketing Content Writing" 
          fill
          className="object-cover"
          unoptimized 
        />
        {/* Note: Unoptimized used here or placeholder path, adjust as needed */}
      </div>

      {/* Content and Form Row */}
      <section className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-35 rounded-3xl p-4 sm:p-6 md:p-8">
          
          {/* Left Column (Content) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#54BF93] mb-4 sm:mb-6 leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] tracking-[-0.02em]">
              Comprehensive Digital Content Solutions for Maximum Brand Impact
            </h2>
            <div className="space-y-3 sm:space-y-4 text-[#707072] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-normal leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px]">
              <p>
                EnterTab’s Marketing Content Writing service helps businesses tell their story with clarity, creativity, and purpose. We craft content that resonates with your target audience, strengthens your brand voice, and supports your marketing objectives across all digital platforms.
              </p>
              <p>
                Our work covers website copy, landing pages, ad campaigns, social media captions, product descriptions, and email sequences. Every piece is written with your goals in mind—whether it’s generating leads, boosting engagement, or building trust. Backed by research and aligned with your brand strategy, our content turns ideas into results and helps your message stand out in a noisy market.
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

        </div>
      </section>
      {/* section back to all services */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
          <Link href="/services" className="text-[#54BF93] hover:text-[#54BF93]/80">
            &larr; Back to all services
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
