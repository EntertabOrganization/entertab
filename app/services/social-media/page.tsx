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
          Social Media Management
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/SocialMediaBg.png" 
          alt="Social Media Management" 
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
              Turning Social Channels into Powerful Marketing Tools
            </h2>
            <div className="space-y-4 text-[#707072] text-[24px] font-normal leading-[32px]">
              <p>
                EnterTab’s Social Media Management service helps businesses grow and connect with their audience across platforms like Instagram, Facebook, LinkedIn, and TikTok. We handle everything from content planning and creative design to scheduling, publishing, and community engagement.
              </p>
              <p>
                Our approach ensures that your brand voice remains consistent while each post is tailored to drive interaction, reach, and relevance. We analyze performance data to refine strategies, boost engagement, and maximize ROI. Whether your goal is brand awareness, lead generation, or customer retention, we turn your social channels into active, results-focused marketing tools.
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
