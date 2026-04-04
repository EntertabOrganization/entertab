import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Helpdesk Management - Customer Support Solutions | EnterTab",
  description: "Deliver exceptional customer support with EnterTab's Helpdesk Management solution. Automate ticketing, track issues, and provide faster resolutions.",
};

export default function HelpdeskPage() {
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
            Helpdesk
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/HelpdeskBg.png" 
          alt="Helpdesk Solutions" 
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
            <div className="space-y-4 text-[#707072] text-[24px] font-normal leading-[32px]">
              <p>
                EnterTab’s Helpdesk solution is designed to streamline customer support operations by centralizing all incoming requests in one intelligent and organized system. It allows support teams to categorize tickets, assign them to the right agents, and track resolution time with full transparency.
              </p>
              <p>
                Customers benefit from faster responses and consistent communication across channels including email, chat, and web forms. Managers gain access to insightful performance reports that help identify recurring issues, improve response quality, and optimize resource allocation.
              </p>
              <p>
                Whether serving internal teams or external clients, our Helpdesk solution helps businesses deliver dependable support experiences that build trust and long-term loyalty.
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
