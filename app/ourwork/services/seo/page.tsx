import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/Contact/ContactForm";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "SEO - Search Visibility That Drives Qualified Traffic | EnterTab",
  description:
    "Grow qualified traffic with EnterTab SEO services. We improve rankings, technical health, content strategy, and conversion-focused visibility for long-term search growth.",
};

export default function SeoPage() {
  return (
    <>
      <Header />
      <main
        className={`${poppins.className} py-20 md:py-32 bg-gray-50 flex flex-col items-center`}
        style={{
          background: "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
        }}
      >
        <div className="w-full text-center px-4 mb-8">
          <h1 className="text-[36px] font-semibold text-[#54BF93]">SEO</h1>
        </div>

        <div className="w-full max-w-7xl px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
          <Image
            src="/Services/DigitalMarketingBg.png"
            alt="SEO services"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-35 rounded-3xl p-4 sm:p-6 md:p-8">
            <div className="w-full md:w-1/2 flex flex-col justify-start">
              <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#54BF93] mb-4 sm:mb-6 leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] tracking-[-0.02em]">
                Turn Search Visibility Into Sustainable Growth
              </h2>
              <div className="space-y-3 sm:space-y-4 text-[#707072] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-normal leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px]">
                <p>
                  EnterTab&apos;s SEO service helps your business get discovered by the right audience at the moment they are searching for solutions like yours. We improve technical performance, on-page relevance, keyword targeting, and content structure to increase your visibility across major search engines.
                </p>
                <p>
                  Our team combines technical audits, competitor research, content planning, and ongoing optimization to build long-term search momentum. From fixing crawl issues and improving site architecture to aligning landing pages with high-intent keywords, we focus on rankings that lead to qualified traffic, stronger authority, and measurable conversions.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </section>

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
