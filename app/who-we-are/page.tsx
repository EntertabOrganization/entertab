import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Who We Are | EnterTab",
    description:
        "Learn more about EnterTab — our story, mission, values, and the team behind our innovative digital solutions.",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const values = [
    {
        title: "Innovation",
        description:
            "We stay ahead of technology trends to deliver forward-thinking solutions that give our clients a competitive edge.",
        icon: "💡",
    },
    {
        title: "Integrity",
        description:
            "We operate with full transparency and hold ourselves accountable to the highest standards in everything we do.",
        icon: "🤝",
    },
    {
        title: "Excellence",
        description:
            "We are relentless in our pursuit of quality — crafting solutions that not only meet expectations but exceed them.",
        icon: "⭐",
    },
    {
        title: "Partnership",
        description:
            "We view every client relationship as a long-term partnership, growing and evolving alongside the businesses we serve.",
        icon: "🌱",
    },
];

export default function WhoWeArePage() {
    return (
        <div className={poppins.className}>
            <Header />

            <main>
                {/* Hero Banner */}
                <section
                    className="relative pt-12 overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
                    }}
                >
                    <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex justify-center mt-16">
                        <div
                            className="relative w-full overflow-hidden"
                            style={{
                                maxWidth: 1317,
                                height: 563,
                                borderRadius: 30,
                            }}
                        >
                            <Image
                                src="/WhoWeAre.png"
                                alt="Who We Are at EnterTab"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay: Heading */}
                            <div className="absolute top-8 left-8">
                                <h2
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontWeight: 400,
                                        fontSize: 60,
                                        lineHeight: "72px",
                                        letterSpacing: "-0.02em",
                                        color: "#FFFFFF",
                                        textAlign: "left",
                                        width: 705,
                                        height: 216,
                                    }}
                                >
                                    Where innovation fuels brands and accelerates growth
                                </h2>
                            </div>
                            {/* Overlay: CTA Button — bottom left */}
                            <div className="absolute bottom-8 left-8">
                                <Button
                                    href="#contact"
                                    showArrow={true}
                                    className="w-[181px] h-[44px] px-4 py-[10px] !rounded-[12px] justify-center bg-[#606063] hover:bg-[#606063] border-0 hover:border-0 text-[16px]"
                                >
                                    Get in Touch
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="relative mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[20px] top-0 h-[200px] w-[200px] rounded-full bg-primary opacity-20 blur-[80px]"
                    />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle title="About EnterTab" className="mb-5" />
                            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-[#1E1E1F] mb-6">
                                Building Digital Solutions Since 2015
                            </h2>
                            <div className="space-y-4 text-[#707072] text-lg leading-relaxed">
                                <p>
                                    Founded in 2015, EnterTab is a leading digital solutions
                                    provider based in the Washington, D.C. area. We serve B2B and
                                    B2C clients across the globe with web development, mobile apps,
                                    UI/UX design, branding, and digital marketing.
                                </p>
                                <p>
                                    We build scalable, data-driven solutions that enhance
                                    engagement and streamline operations — helping businesses of all
                                    sizes grow, modernize, and stay competitive in an ever-evolving
                                    digital landscape.
                                </p>
                                <p>
                                    At EnterTab, we leverage AI automation and advanced contact
                                    center systems to boost efficiency and elevate the customer
                                    experience. Our team of experts is committed to delivering
                                    measurable results through every project we undertake.
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-2xl aspect-[520/360] shadow-xl">
                            <Image
                                src="/AboutUs.jpg"
                                alt="The EnterTab team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="bg-[#F7F9F8] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-[96rem]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EDE9]">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#1E1E1F] mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-[#707072] text-lg leading-relaxed">
                                    To empower businesses through innovative, reliable, and
                                    scalable digital solutions — enabling them to reach their full
                                    potential in the digital economy.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#E8EDE9]">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <span className="text-2xl">🔭</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#1E1E1F] mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-[#707072] text-lg leading-relaxed">
                                    To be the most trusted digital transformation partner for
                                    businesses worldwide — setting the standard for excellence,
                                    creativity, and impact in the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-14">
                        <SectionTitle title="Our Values" className="mb-4 justify-center" />
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E1E1F]">
                            The Principles That Guide Us
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-2xl border border-[#E8EDE9] bg-white p-8 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-2xl">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#1E1E1F] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-[#707072] leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-[#1E1E1F] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-[96rem]">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {[
                                { value: "10+", label: "Years of Experience" },
                                { value: "200+", label: "Projects Delivered" },
                                { value: "50+", label: "Team Members" },
                                { value: "98%", label: "Client Satisfaction" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-[#A0A0A2] text-sm sm:text-base">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
