import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Samatechs Project | entertab Portfolio",
  alternates: { canonical: "https://www.entertab.net/ourwork/samatechs" },
};
const base = "/ourwork/samatechs/";
const services = ["Branding", "Brand Guidelines", "Company Profile", "UI/UX", "Website Development"];
const gallery = [
  { file: "stationery.jpg", alt: "Samatechs branded letterhead and stationery", width: 1800, height: 1013 },
  { file: "profile.jpg", alt: "Samatechs company profile cover", width: 1800, height: 1013 },
  { file: "brand-visual.png", alt: "Samatechs imagery direction: hand and sculptural layered forms", width: 735, height: 512 },
];
export default function SamatechsWorkPage() {
  return (
    <>
      <Header />
      <main className="py-20 md:py-32 bg-gray-50 flex flex-col items-center"
        style={{ background: "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)" }}>
        <section className="w-full flex items-center justify-center px-4 py-5">
          <Image src={base + "logo.png"} alt="Samatechs logo" width={447} height={600} className="w-[145px] md:w-[200px] h-auto mb-10" priority />
        </section>
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <Image src={base + "hero-light-paths.jpg"} alt="Flowing blue light paths representing connected insights and strategic clarity" width={1672} height={941} priority className="w-full h-auto rounded-2xl shadow-xl" sizes="(min-width:1280px) 1216px, 100vw" />
        </section>
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 flex items-center justify-around">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[{ header: "Client:", bullets: ["SAMATECHS"] }, { header: "Industry:", bullets: ["Strategic Advisory & Analytics"] }, { header: "Services:", bullets: services }].map(item => (
              <ul key={item.header} className="space-y-3">
                <li className="text-2xl md:text-3xl font-semibold text-[#54BF93]">{item.header}</li>
                {item.bullets.map(bullet => <li key={bullet} className="text-lg md:text-xl text-[#707072] leading-relaxed list-disc list-inside">{bullet}</li>)}
              </ul>
            ))}
          </div>
        </section>
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          {gallery.map(item => <Image key={item.file} src={base + item.file} alt={item.alt} width={item.width} height={item.height} className="w-full h-auto rounded-2xl shadow-lg" sizes="(min-width:1280px) 1216px, 100vw" />)}
          <div className="grid gap-8 p-4 md:p-12 bg-gradient-to-br from-[#e6eefc] to-[#d3e2f6] rounded-2xl">
            {[{ file: "website-hero.jpg", label: "SAMATECHS — Homepage", alt: "Selected Samatechs homepage design" }, { file: "website-services.jpg", label: "SAMATECHS — Advisory pillars", alt: "Selected Samatechs advisory services design" }].map(item => (
              <div key={item.file} className="overflow-hidden rounded-xl bg-white shadow-xl border border-white">
                <div className="h-7 md:h-[38px] flex items-center gap-1.5 bg-[#f1f4f9] px-3.5">
                  {[0,1,2].map(dot => <span key={dot} className="w-2 h-2 bg-[#c1cbd9] rounded-full" />)}
                  <span className="flex-1 text-center pr-10 text-[9px] md:text-[11px] text-[#65748a]">{item.label}</span>
                </div>
                <Image src={base + item.file} alt={item.alt} width={1280} height={720} className="w-full h-auto" sizes="(min-width:1280px) 1120px, 100vw" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
