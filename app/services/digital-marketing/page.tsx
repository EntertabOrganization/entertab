import { Poppins } from "next/font/google";
import Button from "@/app/components/ui/Button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Digital Marketing | EnterTab",
  description: "Grow your business with strategic digital marketing. EnterTab delivers SEO, paid ads, and integrated marketing strategies.",
};

export default function DigitalMarketingPage() {
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
            Digital Marketing
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#707072] leading-[28px] md:leading-[32px] mb-8 max-w-2xl font-[400]">
            Drive growth with data-driven digital marketing strategies that reach and engage your audience.
          </p>
          <Button href="#contact">Get Started</Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-6 leading-[44px] md:leading-[48px]">
              Strategic Digital Growth
            </h2>
            <div className="space-y-4 text-[#707072]">
              <p className="text-[16px] leading-[24px]">
                Digital marketing requires strategy, creativity, and continuous optimization. We combine data-driven insights with creative campaigns to drive real results.
              </p>
              <p className="text-[16px] leading-[24px]">
                From SEO to paid advertising, email marketing to social media, we create integrated campaigns that reach your audience where they are.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-10 h-[400px] flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-[18px] text-[#707072] font-[500]">Results-Driven Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-12 text-center leading-[44px]">
          Marketing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "SEO", description: "Improve visibility in search results and drive organic traffic." },
            { title: "Paid Advertising", description: "Google Ads, Facebook, Instagram, and LinkedIn campaigns." },
            { title: "Email Marketing", description: "Nurture leads and retain customers through email." },
            { title: "Content Marketing", description: "Strategic content that attracts and engages your audience." },
            { title: "Analytics & Reporting", description: "Measure performance and optimize for better ROI." },
            { title: "Marketing Automation", description: "Streamline campaigns and personalize at scale." },
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

      {/* CTA Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-[36px] md:text-[44px] font-[700] mb-6 leading-[44px] md:leading-[52px]">
            Grow Your Business Today
          </h2>
          <p className="text-[18px] leading-[28px] mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s create a marketing strategy that drives growth.
          </p>
          <Button href="#contact" variant="dark">Schedule a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
