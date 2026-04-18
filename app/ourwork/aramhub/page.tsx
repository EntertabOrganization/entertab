import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import AramhubLogo from "@/app/components/Projects/AramhubLogo";

type InfoItem = {
    header: string;
    bullets: string[];
};

const infoItems: InfoItem[] = [
    {
        header: "Client:",
        bullets: ["ARAMVOX"],
    },
    {
        header: "Industry:",
        bullets: ["Public Relations &Corporate Communications"],
    },
    {
        header: "Services:",
        bullets: [
            "Brand Design",
            "Brand Guidelines",
            "Corporate Stationery"
        ],
    },
];

function renderInfoList(items: InfoItem[]) {
    return items.map((item) => (
        <ul key={item.header} className="space-y-3">
            <li className="text-2xl md:text-3xl font-semibold text-[#54BF93]">{item.header}</li>
            {item.bullets.map((bullet) => (
                <li key={`${item.header}-${bullet}`} className="text-lg md:text-xl text-[#707072] leading-relaxed list-disc list-inside">
                    {bullet}
                </li>
            ))}
        </ul>
    ));
}

export default function aramhubWorkPage() {
    return (
        <>
            <Header />
            <main className={`py-20 md:py-32 bg-gray-50 flex flex-col items-center`}
                style={{
                    background: "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
                }}>
                {/* Logo Section */}
                <section className="w-full flex items-center justify-center px-4 py-5">
                    <div className="w-full max-w-[257px] md:max-w-[320px] lg:max-w-[380px]">
                        <AramhubLogo />
                    </div>
                </section>

                {/* Hero Section */}
                <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[900px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/ourwork/aramhub/aramhubHero.png"
                            alt="Aramhub hero"
                            fill
                            priority
                            className="object-cover"
                            sizes="(min-width: 1280px) 1280px, (min-width: 1024px) 90vw, 100vw"
                        />
                    </div>
                </section>

                {/* Info Section */}
                <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 flex items-center justify-around">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                        {renderInfoList(infoItems)}
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
                    <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[1714px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/ourwork/aramhub/aramhubPor1.png"
                            alt="Aramhub portfolio image 1"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1280px) 1280px, (min-width: 1024px) 90vw, 100vw"
                        />
                    </div>

                    <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[722px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/ourwork/aramhub/aramhubPor2.png"
                            alt="Aramhub portfolio image 2"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1280px) 1280px, (min-width: 1024px) 90vw, 100vw"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
