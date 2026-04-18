import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Inventory Management - Optimal Stock Control | EnterTab",
  description: "Manage inventory efficiently with EnterTab's Inventory Management solution. Track stock levels, reduce waste, and optimize supply chain operations.",
};

export default function InventoryPage() {
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
          Inventory Management
        </h1>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[90rem] px-4 mb-10 sm:mb-14 md:mb-16 lg:mb-20 relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <Image 
          src="/Services/InventoryBg.png" 
          alt="Inventory Management Solutions" 
          fill
          className="object-cover"
          sizes="(min-width: 1536px) 1440px, 100vw"        />
      </div>

      {/* Content and Form Row */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-35 rounded-3xl p-4 sm:p-6 md:p-8">
          
          {/* Left Column (Content) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#54BF93] mb-4 sm:mb-6 leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] tracking-[-0.02em]">
              Streamline Operations and Elevate Customer Experience
            </h2>
            <div className="space-y-3 sm:space-y-4 text-[#707072] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-normal leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px]">
              <p>
                EnterTab’s Inventory Management solutions provide end-to-end visibility and control across every stage of your inventory lifecycle, from procurement and storage to fulfillment and restocking. Designed for growing businesses and multi-location operations, our system ensures accurate tracking, efficient stock movement, and seamless coordination between suppliers, warehouses, and sales teams.
              </p>
              <p>
                With real-time dashboards, smart alerts, and built-in reporting tools, businesses can anticipate demand, avoid overstock or stockouts, and optimize warehouse utilization. The solution supports batch and serial tracking, barcode scanning, and integrates easily with sales, purchasing, and accounting modules—giving decision-makers a clear view of inventory performance and its impact on profitability.
              </p>
              <p>
                Whether you’re in retail, wholesale, or manufacturing, EnterTab’s inventory system helps you stay agile, reduce operational costs, and respond quickly to changing market demands
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
