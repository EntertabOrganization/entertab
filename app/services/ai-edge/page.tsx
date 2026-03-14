import { Poppins } from "next/font/google";
import Button from "@/app/components/ui/Button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "AI Edge - AI-Powered Automation & Intelligence | EnterTab",
  description: "Transform your business with AI-powered automation and intelligent solutions. EnterTab's AI Edge service delivers cutting-edge automation and machine learning capabilities.",
};

export default function AIEdgePage() {
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
            AI Edge: AI-Powered Automation & Intelligence
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#707072] leading-[28px] md:leading-[32px] mb-8 max-w-2xl font-[400]">
            Harness the power of artificial intelligence to automate processes, gain insights, and stay ahead of the competition.
          </p>
          <Button href="#contact">Get Started</Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-6 leading-[44px] md:leading-[48px]">
              What is AI Edge?
            </h2>
            <div className="space-y-4 text-[#707072]">
              <p className="text-[16px] leading-[24px]">
                AI Edge leverages machine learning, natural language processing, and advanced automation to transform your business operations. Our solutions integrate seamlessly with your existing systems to deliver immediate value.
              </p>
              <p className="text-[16px] leading-[24px]">
                From predictive analytics to robotic process automation, we help you unlock new opportunities and drive efficiency across your organization.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-10 h-[400px] flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-[18px] text-[#707072] font-[500]">AI Intelligence at Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-[36px] md:text-[40px] font-[700] text-[#1E1E1F] mb-12 text-center leading-[44px]">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Predictive Analytics", description: "Make data-driven decisions with AI-powered insights and forecasting." },
            { title: "Process Automation", description: "Automate repetitive tasks and workflows to boost productivity." },
            { title: "Machine Learning", description: "Leverage ML models to identify patterns and optimize operations." },
            { title: "Natural Language Processing", description: "Extract meaning from text and enable intelligent communication." },
            { title: "Computer Vision", description: "Analyze images and video for quality control and insights." },
            { title: "Integration", description: "Seamlessly integrate AI solutions with your existing systems." },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-[600] text-[#1E1E1F] mb-3">
                {feature.title}
              </h3>
              <p className="text-[16px] text-[#707072] leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-[36px] md:text-[44px] font-[700] mb-6 leading-[44px] md:leading-[52px]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[18px] leading-[28px] mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s explore how AI Edge can drive growth and efficiency for your organization.
          </p>
          <Button href="#contact" variant="dark">Schedule a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
