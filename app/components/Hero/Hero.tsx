import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-12 overflow-hidden bg-gradient-to-br from-white via-white to-mint-subtle"
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="z-10 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-tight text-text-dark tracking-tight">
              We are a full-service digital partner, delivering innovative
              digital solutions for{" "}
              <span className="text-primary">a smarter future.</span>
            </h1>

            <p className="mt-6 md:mt-8 text-text-gray text-base md:text-lg leading-relaxed max-w-lg">
              helping businesses enhance their identity, engagement, and
              performance across every touchpoint.
            </p>

            <div className="mt-6 md:mt-8">
              <Button variant="primary" href="#about">
                More about us
              </Button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-[320px] h-[400px] md:w-[420px] md:h-[500px] lg:w-[500px] lg:h-[580px] relative">
              <Image
                src="/HeroSection.png"
                alt="Decorative green shape"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-6 md:mt-4 pb-8 flex items-end gap-6 overflow-x-hidden">
          <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] img-placeholder rounded-xl opacity-60 text-xs">
            Decorative 1
          </div>
          <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] img-placeholder rounded-xl opacity-60 text-xs">
            Decorative 2
          </div>
          <div className="hidden md:flex w-[120px] h-[120px] md:w-[160px] md:h-[160px] img-placeholder rounded-xl opacity-60 text-xs">
            Decorative 3
          </div>
        </div>
      </div>
      {/* Go to top - vertical text */}
      <a
        href="#home"
        className="hidden lg:flex absolute bottom-8 right-6 flex-col items-center gap-2 text-primary hover:text-primary-light transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        <span
          className="text-xs font-medium tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          go to top
        </span>
      </a>
    </section>
  );
}
