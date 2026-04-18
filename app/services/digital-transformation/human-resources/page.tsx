import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Human Resources Management - Optimize Your Workforce | EnterTab",
  description: "Streamline HR operations with EnterTab's Human Resources Management solution. Manage recruitment, payroll, performance, and employee engagement efficiently.",
};

export default function HumanResourcesPage() {
  return (
    <>
      <Header />
      <main className={`${poppins.className} py-12 sm:py-20 md:py-28 lg:py-32 bg-gray-50 flex flex-col items-center`}
      style={{
        background: "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
      }}>
      {/* Title */}
      <div className="w-full text-center px-4 mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-semibold text-[#54BF93] leading-[32px] sm:leading-[38px] md:leading-[44px] lg:leading-[52px]">
          Human Resources (HR)
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-10 sm:mb-14 md:mb-16 lg:mb-20 relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/HrBg.png" 
          alt="Human Resources Solutions" 
          fill
          className="object-cover"
          sizes="(min-width: 1536px) 1440px, 100vw"        />
      </div>

      {/* Content and Form Row */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-35 rounded-3xl p-4 sm:p-6 md:p-8">
          
          {/* Left Column (Content) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <div className="space-y-3 sm:space-y-4 text-[#707072] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-normal leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px]">
              <p>
                EnterTab’s HR solutions are designed to simplify complex people operations and create a seamless experience across the entire employee journey. From hiring and onboarding to payroll, time tracking, performance evaluation, and compliance our platform ensures that every HR function runs smoothly and efficiently.
              </p>
              <p>
                With a centralized system that brings together data, workflows, and insights, HR teams can make informed decisions, improve employee engagement, and foster a productive workplace culture. Scalable and adaptable, our solutions are built to support organizations of all sizes, driving efficiency, transparency, and alignment between people and business goals.
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
