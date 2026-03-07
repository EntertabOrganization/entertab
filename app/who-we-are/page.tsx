import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import ArrowIcon from "../components/ui/ArrowIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Who We Are | EnterTab",
    description:
        "Learn more about EnterTab — our story, mission, values, and the team behind our innovative digital solutions.",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const beliefs = [
    {
        title: "Insight",
        description:
            "We prioritize deep human and market understanding. This continuous quest for true insight fuels innovation, ensuring every solution we deliver is highly relevant and impactful.",
    },
    {
        title: "Innovation",
        description:
            "We empower you to harness technology's momentum, specializing in the design and creation of cutting-edge digital products. Our deep understanding of market evolution allows us to move proactively, guaranteeing your brand is always positioned to exceed consumer expectations and remain firmly at the forefront of innovation.",
    },
    {
        title: "Growth",
        description:
            "Growth is our ultimate benchmark. We don't just deliver projects; we engineer digital strategies and solutions that produce measurable, sustainable expansion for your business. Our focus is on long-term performance, ensuring your investment today accelerates your success well into the future.",
    },
];

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
                <section className="relative mx-auto w-full max-w-8xl px-2 sm:px-4 lg:px-6 py-8 md:py-16 mb-7">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Left: Who We Are box (~col-4) */}
                        <div className="flex items-start justify-center">
                            <div className="px-8 py-6 inline-block">
                                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 55, lineHeight: "44px", letterSpacing: "-0.02em", textAlign: "center", color: "#54BF93", display: "block" }}>
                                    Who we are
                                </span>
                            </div>
                        </div>
                        
                        {/* Right: Description (~col-8) */}
                        <div className="lg:col-span-2 space-y-3">
                            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: 24, lineHeight: "32px", letterSpacing: 0, color: "#707072" }}>
                                Entertab is a leading digital solutions provider founded in 2015
                                and serving B2B and B2C enterprises from the Washington, D.C.
                                metropolitan area.
                            </p>
                            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: 24, lineHeight: "32px", letterSpacing: 0, color: "#707072" }}>
                                As a strategic creative and technology partner, we are committed
                                to transforming businesses. Our mission is clear: to deliver
                                innovative digital platforms and cutting-edge experiences that
                                accelerate your immediate growth and solidify your long-term
                                success.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
                    {/* Track record header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-14">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary leading-snug">
                            Our track record tells the story
                        </h2>
                        <p className="text-[#707072] text-base leading-relaxed">
                            Data-driven results ensuring quality across our worldwide operations.
                        </p>
                    </div>
                    {/* Stat items */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {[
                            { value: "5+", label: "Our branches", sub: "Local and global offices" },
                            { value: "25+", label: "Our success partners", sub: "Brands that trust us." },
                            { value: "200+", label: "Our Client Visions Realized", sub: "Experience you can count on" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-5xl sm:text-6xl font-bold text-primary mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-[#1E1E1F] font-semibold text-lg mb-1">
                                    {stat.label}
                                </p>
                                <p className="text-[#707072] text-sm">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Beliefs */}
                <section className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="border-2 border-dashed border-primary rounded-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-10 pt-8 pb-6 border-b-2 border-dashed border-primary">
                            <span className="text-lg font-semibold text-primary">
                                Our Core Beliefs
                            </span>
                        </div>
                        {/* Belief rows */}
                        {beliefs.map((belief, index) => (
                            <div
                                key={belief.title}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-10 py-12${
                                    index < beliefs.length - 1
                                        ? " border-b-2 border-dashed border-primary"
                                        : ""
                                }`}
                            >
                                {/* Left: Title + Arrow */}
                                <div className="flex items-center gap-4">
                                    <h3 className="text-5xl sm:text-6xl font-bold text-[#1E1E1F] leading-none">
                                        {belief.title}
                                    </h3>
                                    <ArrowIcon size={36} />
                                </div>
                                {/* Right: Description */}
                                <p className="text-[#707072] text-base leading-relaxed">
                                    {belief.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Companies */}
                <section
                    className="relative pt-12 overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
                    }}
                >
                </section>
            </main>

            <Footer />
        </div>
    );
}
