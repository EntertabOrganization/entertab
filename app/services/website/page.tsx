import { Poppins } from "next/font/google";
import Button from "@/app/components/ui/Button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Website Development | EnterTab",
  description: "Build stunning, high-performance websites that convert visitors into customers. EnterTab creates responsive web solutions for every business.",
};

export default function WebsitePage() {
  return (
    <main className={poppins.className}>
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[20px] top-0 h-[300px] w-[300px] rounded-full bg-primary opacity-20 blur-[100px]"
        />

        <div className="relative z-10">
          <h1 className="text-[48px] md:text-[56px] font-[700] text-[#1E1E1F] leading-[60px] md:leading-[72px] mb-6 max-w-3xl">
            Website Development
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#707072] leading-[28px] md:leading-[32px] mb-8 max-w-2xl font-[400]">
            Design and develop websites that impress, convert, and grow your business online.
          </p>
          <Button href="#contact">Get Started</Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-6 leading-[44px] md:leading-[48px]">
              Web Solutions for Every Business
            </h2>
            <div className="space-y-4 text-[#707072]">
              <p className="text-[16px] leading-[24px]">
                Your website is often your first impression. We build fast, secure, and beautiful websites that drive results.
              </p>
              <p className="text-[16px] leading-[24px]">
                From responsive design to e-commerce platforms and web applications, we create solutions tailored to your goals.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-10 h-[400px] flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <p className="text-[18px] text-[#707072] font-[500]">Modern Web Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-12 text-center leading-[44px]">
          Web Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Responsive Design", description: "Beautiful websites that work on all devices." },
            { title: "E-Commerce", description: "Secure platforms for selling products online." },
            { title: "Web Applications", description: "Complex applications with powerful functionality." },
            { title: "Performance", description: "Fast-loading sites that rank well in search." },
            { title: "Security", description: "SSL, data protection, and compliance measures." },
            { title: "Maintenance", description: "Ongoing support and updates for your site." },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-[600] text-[#1E1E1F] mb-3">
                {service.title}
              </h3>
              <p className="text-[16px] text-[#707072] leading-[24px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-[36px] md:text-[44px] font-[700] mb-6 leading-[44px] md:leading-[52px]">
            Build Your Online Presence
          </h2>
          <p className="text-[18px] leading-[28px] mb-8 max-w-2xl mx-auto opacity-90">
            Get a website that works for your business.
          </p>
          <Button href="#contact" variant="dark">Schedule a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
