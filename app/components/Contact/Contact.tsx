import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-gradient-to-br from-white via-white to-mint-subtle"
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold italic text-primary leading-snug mb-6">
              Emphasizing
              <br />
              the Future
            </h2>

            <p className="text-text-gray text-base leading-relaxed mb-6 max-w-md">
              Let&apos;s build something great together. Tell us about your
              question, your latest project idea, or a potential partnership.
            </p>

            <p className="text-text-dark text-base font-bold leading-relaxed max-w-md">
              We&apos;re here and ready to connect quickly.
            </p>

            {/* Decorative Element Placeholder */}
            <div className="mt-8 w-[200px] h-[200px] img-placeholder rounded-xl opacity-40 text-xs !bg-transparent !border-2 !border-primary/30">
              Decorative Shape
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
