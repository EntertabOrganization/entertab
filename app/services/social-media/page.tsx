import { Poppins } from "next/font/google";
import Button from "@/app/components/ui/Button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Social Media Management | EnterTab",
  description: "Build and grow your social media presence. EnterTab manages strategies, content, and engagement across all major platforms.",
};

export default function SocialMediaPage() {
  return (
    <main className={poppins.className}>
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[20px] top-0 h-[300px] w-[300px] rounded-full bg-primary opacity-20 blur-[100px]"
        />

        <div className="relative z-10">
          <h1 className="text-[48px] md:text-[56px] font-[700] text-[#1E1E1F] leading-[60px] md:leading-[72px] mb-6 max-w-3xl">
            Social Media Management
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#707072] leading-[28px] md:leading-[32px] mb-8 max-w-2xl font-[400]">
            Build meaningful connections with your audience across social platforms and drive community growth.
          </p>
          <Button href="#contact">Get Started</Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-6 leading-[44px] md:leading-[48px]">
              Social Strategy That Works
            </h2>
            <div className="space-y-4 text-[#707072]">
              <p className="text-[16px] leading-[24px]">
                Social media is where your customers are. We develop comprehensive strategies to build engaged communities and amplify your brand voice.
              </p>
              <p className="text-[16px] leading-[24px]">
                From content creation to community management, we handle everything so you can focus on growing your business.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-10 h-[400px] flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-[18px] text-[#707072] font-[500]">Community Building & Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-12 text-center leading-[44px]">
          Social Media Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Strategy", description: "Develop a comprehensive social media roadmap aligned with your goals." },
            { title: "Content Creation", description: "Produce engaging, platform-specific content that resonates." },
            { title: "Community Management", description: "Engage with followers, respond to comments, build relationships." },
            { title: "Analytics", description: "Track performance metrics and optimize for better engagement." },
            { title: "Paid Ads", description: "Strategic paid campaigns on Facebook, Instagram, LinkedIn, and TikTok." },
            { title: "Influencer Partnerships", description: "Connect with relevant influencers to expand your reach." },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-[600] text-[#1E1E1F] mb-3">
                {service.title}
              </h3>
              <p className="text-[16px] text-[#707072] leading-[24px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-mint/10 to-transparent rounded-2xl p-12">
        <h2 className="text-[28px] md:text-[32px] font-[700] text-[#1E1E1F] mb-8 text-center leading-[36px]">
          We Manage All Major Platforms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {["Facebook", "Instagram", "LinkedIn", "TikTok", "Twitter", "YouTube", "Pinterest", "Threads", "WhatsApp", "Snapchat"].map((platform) => (
            <div
              key={platform}
              className="bg-white border border-border-light rounded-lg p-4 text-center hover:bg-mint/50 transition-colors"
            >
              <p className="text-[14px] font-[600] text-[#1E1E1F]">{platform}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-[36px] md:text-[44px] font-[700] mb-6 leading-[44px] md:leading-[52px]">
            Grow Your Social Presence
          </h2>
          <p className="text-[18px] leading-[28px] mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s build a thriving community around your brand.
          </p>
          <Button href="#contact" variant="dark">Schedule a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
