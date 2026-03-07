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
                <section className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
                    {/* Track record header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
                        <h2 className="lg:col-span-5 text-4xl font-semibold text-primary leading-snug flex justify-center lg:justify-start">
                            Our track record tells the story
                        </h2>
                        <p className="lg:col-span-7" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: 24, lineHeight: "32px", letterSpacing: 0, color: "#707072" }}>
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
                                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 72, lineHeight: "80px", letterSpacing: 0, color: "#54BF93" }}>
                                    {stat.value}
                                </p>
                                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: 36, lineHeight: "44px", letterSpacing: "-0.02em", color: "#606063" }}>
                                    {stat.label}
                                </p>
                                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: 24, lineHeight: "32px", letterSpacing: 0, color: "#606063" }}>{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Beliefs */}
                <section className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="overflow-hidden">
                        {/* Header */}
                        <div className="px-10 pt-8 pb-6">
                            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 36, lineHeight: "44px", letterSpacing: "-0.02em", color: "#54BF93", display: "block" }}>
                                Our Core Beliefs
                            </span>
                        </div>
                        {/* Belief rows */}
                        {beliefs.map((belief, index) => (
                            <div
                                key={belief.title}
                                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center px-10 py-12${
                                    index < beliefs.length - 1
                                        ? " border-b-2 border-primary"
                                        : ""
                                }`}
                            >
                                {/* Left: Title + Arrow (~col-4) */}
                                <div className="flex items-center gap-4">
                                    <h3 className="text-5xl sm:text-6xl font-bold text-[#1E1E1F] leading-none">
                                        {belief.title}
                                    </h3>
                                    <svg className="mb-9" width="44" height="75" viewBox="0 0 44 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.3479 32.584C19.4792 33.7537 17.8981 34.7662 16.2944 35.7444C12.2942 38.191 8.28946 40.6308 4.2734 43.0501C1.71608 44.5915 0.343413 46.817 0.243748 49.8314C0.18259 51.6738 0.0648026 53.5116 0.00590945 55.354C-0.0960211 58.4892 1.143 60.9724 3.84303 62.5457C6.41847 64.0438 9.08225 64.0119 11.6532 62.4431C18.6003 58.2065 25.5746 54.0155 32.4583 49.6809C36.8685 46.9059 39.1359 42.7103 39.444 37.5161C39.6501 34.0593 39.8539 30.582 39.6999 27.1298C39.5096 22.8636 37.5911 19.2791 34.207 16.6957C27.4796 11.5561 20.7069 6.47584 13.8526 1.50731C8.90557 -2.07943 2.30501 1.09915 1.77044 7.21918C1.60055 9.1619 1.60055 11.116 1.4805 13.0633C1.2925 16.1438 2.49301 18.4947 4.95747 20.3052C9.78218 23.8486 14.5661 27.4467 19.3614 31.0266C19.9639 31.4713 20.537 31.9433 21.3479 32.584Z" fill="#56BF94"/>
                                        <path d="M11.6597 62.4432C18.6068 58.2043 23.3047 55.443 30.1884 51.1061C37.3145 43.4082 21.3544 32.5818 21.3544 32.5818C21.3544 32.5818 17.9046 34.764 16.3009 35.7445C12.2984 38.1888 8.29597 40.6286 4.27991 43.0479C1.72259 44.5916 0.349926 46.8148 0.250261 49.8315C0.189102 51.6716 0.0713152 53.5117 0.0124221 55.3518C-0.0895084 58.4894 1.14952 60.9702 3.84954 62.5435C5.10895 63.2755 6.38874 63.6426 7.66854 63.6426C9.00722 63.6426 10.3436 63.2413 11.6597 62.4432Z" fill="#56BF94"/>
                                        <path d="M11.6597 62.4432C18.6068 58.2043 23.3047 55.443 30.1884 51.1061C37.3145 43.4082 21.3544 32.5818 21.3544 32.5818C21.3544 32.5818 17.9046 34.764 16.3009 35.7445C12.2984 38.1888 8.29597 40.6286 4.27991 43.0479C1.72259 44.5916 0.349926 46.8148 0.250261 49.8315C0.189102 51.6716 0.0713152 53.5117 0.0124221 55.3518C-0.0895084 58.4894 1.14952 60.9702 3.84954 62.5435C5.10895 63.2755 6.38874 63.6426 7.66854 63.6426C9.00722 63.6426 10.3436 63.2413 11.6597 62.4432Z" fill="url(#paint0_linear_461_675)"/>
                                        <path d="M35.0769 61.376C35.8583 60.8857 36.5197 60.4639 37.1902 60.0535C38.8619 59.0297 40.5381 58.0104 42.2165 56.998C43.2857 56.3527 43.8587 55.4224 43.9018 54.1615C43.9267 53.3908 43.9765 52.6223 44.0014 51.8516C44.0445 50.5405 43.5258 49.503 42.3977 48.8441C41.3218 48.217 40.2074 48.2307 39.1314 48.8874C36.2275 50.6591 33.3101 52.4103 30.4334 54.223C28.5895 55.3836 27.6427 57.1371 27.5113 59.3101C27.4253 60.7558 27.3392 62.2083 27.4049 63.6516C27.4842 65.4347 28.286 66.9351 29.7017 68.0136C32.5105 70.1684 35.3419 72.2935 38.2073 74.3708C40.2776 75.8689 43.0365 74.5395 43.2607 71.9811C43.331 71.1694 43.331 70.3508 43.3808 69.5368C43.4601 68.2485 42.9572 67.2657 41.9266 66.5087C39.9084 65.0266 37.9105 63.5216 35.9036 62.0258C35.6545 61.8411 35.4144 61.6428 35.0769 61.376Z" fill="#56BF94"/>
                                        <path d="M39.1272 48.8919C36.2233 50.6636 34.2595 51.8197 31.3805 53.6325C28.4019 56.8498 35.0749 61.376 35.0749 61.376C35.0749 61.376 36.5178 60.4639 37.1883 60.0535C38.8622 59.0319 40.5361 58.0104 42.2146 57.0003C43.2837 56.355 43.8568 55.4247 43.8998 54.1637C43.9247 53.3953 43.9746 52.6246 43.9995 51.8562C44.0425 50.5451 43.5238 49.5076 42.3958 48.8486C41.8703 48.5431 41.3334 48.388 40.7989 48.388C40.2371 48.3903 39.6776 48.559 39.1272 48.8919Z" fill="#56BF94"/>
                                        <path d="M39.1272 48.8919C36.2233 50.6636 34.2595 51.8197 31.3805 53.6325C28.4019 56.8498 35.0749 61.376 35.0749 61.376C35.0749 61.376 36.5178 60.4639 37.1883 60.0535C38.8622 59.0319 40.5361 58.0104 42.2146 57.0003C43.2837 56.355 43.8568 55.4247 43.8998 54.1637C43.9247 53.3953 43.9746 52.6246 43.9995 51.8562C44.0425 50.5451 43.5238 49.5076 42.3958 48.8486C41.8703 48.5431 41.3334 48.388 40.7989 48.388C40.2371 48.3903 39.6776 48.559 39.1272 48.8919Z" fill="url(#paint1_linear_461_675)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_461_675" x1="32.0191" y1="48.1126" x2="0.00628536" y2="48.1126" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D485C"/>
                                                <stop offset="0.243" stopColor="#1D5C67"/>
                                                <stop offset="0.7791" stopColor="#439A85"/>
                                                <stop offset="1" stopColor="#56BF94"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_461_675" x1="30.615" y1="54.8837" x2="43.9999" y2="54.8837" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D485C"/>
                                                <stop offset="0.243" stopColor="#1D5C67"/>
                                                <stop offset="0.7791" stopColor="#439A85"/>
                                                <stop offset="1" stopColor="#56BF94"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                {/* Right: Description (~col-8) */}
                                <p className="lg:col-span-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: 24, lineHeight: "32px", letterSpacing: 0, color: "#707072" }}>
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
