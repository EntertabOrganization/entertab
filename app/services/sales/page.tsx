import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Sales Management - Accelerate Revenue Growth | EnterTab",
  description: "Boost sales performance with EnterTab's Sales Management solution. Manage leads, track opportunities, and close deals faster with powerful tools.",
};

export default function SalesPage() {
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
                        Sales Management
                    </h1>
                </div>

                {/* Image Container */}
                <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
                    <Image
                        src="/Services/SalesManagementBg.png"
                        alt="Sales Management"
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
                                    EnterTab’s Sales Management solution helps businesses take full control of the sales cycle. From lead capture and opportunity tracking to quotations, invoicing, and deal closure, every stage is managed within a centralized and intuitive platform.
                                </p>
                                <p>
                                    The system provides sales teams with up-to-date information, helping them prioritize leads, follow up effectively, and close deals faster. With built-in reporting, performance dashboards, and customer interaction history, managers gain the insights needed to improve forecasting, monitor KPIs, and refine sales strategies.
                                </p>
                                <p>
                                    Whether you operate in a B2B or B2C environment, our solution adapts to your sales structure, supports collaboration across departments, and ensures that your team remains focused, responsive, and results-driven
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
