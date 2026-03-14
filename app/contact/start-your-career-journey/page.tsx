import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import ContactPageForm from "@/app/components/Contact/ContactPageForm";
import Link from "next/link";

export default function CareerJourneyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-mint-subtle">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link
              href="/contact"
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Contact
            </Link>

            {/* Page Header */}
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                Start Your Career Journey
              </h1>
              <p className="text-lg text-text-gray max-w-3xl">
                Ready to make an impact? Join our team and work with talented
                professionals on exciting projects. Share your profile and let
                us know why you think you&apos;d be a great fit for our team.
              </p>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left - Career Details Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-text-dark mb-6">
                    Tell us about yourself
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">01</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Your Experience
                        </h3>
                        <p className="text-text-gray text-sm">
                          Years of experience and key skills you bring
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">02</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Position Interest
                        </h3>
                        <p className="text-text-gray text-sm">
                          What role or position interests you most
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">03</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Career Goals
                        </h3>
                        <p className="text-text-gray text-sm">
                          Where do you see yourself in the next few years
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">04</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Why Entertab?
                        </h3>
                        <p className="text-text-gray text-sm">
                          What excites you about working with our team
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="order-1 lg:order-2">
                <ContactPageForm
                  title="Tell Us About You"
                  buttonText="Submit Application"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
