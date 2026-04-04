import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Purchasing - Streamline Procurement | EnterTab",
  description: "Simplify your procurement process with EnterTab's Purchasing solution. Manage suppliers, monitor spending, and optimize purchasing with data-driven insights.",
};

export default function PurchasingPage() {
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
                        Purchasing
                    </h1>
                </div>

                {/* Image Container */}
                <div className="w-full max-w-[90rem] px-4 mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
                    <Image
                        src="/Services/PurchasingBg.png"
                        alt="Purchasing Solutions"
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
                                Streamline Operations and Elevate Customer Experience
                            </h2>
                            <div className="space-y-4 text-[#707072] text-[24px] font-normal leading-[32px]">
                                <p>
                                    EnterTab’s Purchasing solution simplifies the procurement process by covering every step from requisition to order fulfillment. It helps businesses manage supplier relationships, monitor spending, and enforce internal purchasing policies with clarity and efficiency.
                                </p>
                                <p>
                                    The platform supports real-time spend tracking, custom approval workflows, and data-driven insights that empower teams to make better purchasing decisions. It connects seamlessly with other systems such as inventory, accounting, and project management. This creates a fully integrated environment where teams can control costs, reduce delays, and maintain operational transparency.
                                </p>
                                <p>
                                    Whether your business needs to source goods, raw materials, or services, EnterTab provides the tools to keep your procurement process fast, structured, and aligned with your goals.
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
