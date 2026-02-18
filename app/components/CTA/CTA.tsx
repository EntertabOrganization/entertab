import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-dark-teal via-dark-teal-light to-dark-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6">
            Ready to create something
            <br />
            amazing together?
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Let&apos;s shape your business future together with fresh creative
            thinking. If you have an idea or a project in mind, feel free to
            call us or schedule an appointment—our team will get back to you
            shortly.
          </p>
          <Button variant="cta" href="#contact">
            Book your consultation now
          </Button>
        </div>
      </div>

      {/* Decorative Shape Placeholder - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[300px] md:w-[280px] md:h-[400px] img-placeholder rounded-l-3xl opacity-30 text-xs !bg-gradient-to-br !from-primary/40 !to-primary-light/40">
        CTA Shape
      </div>
    </section>
  );
}
