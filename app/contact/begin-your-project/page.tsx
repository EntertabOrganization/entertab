import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import ContactPageForm from "@/app/components/Contact/ContactPageForm";
import Link from "next/link";

export default function BeginYourProjectPage() {
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
                Begin Your Project
              </h1>
              <p className="text-lg text-text-gray max-w-3xl">
                Tell us about your vision. Whether it&apos;s a website, mobile
                app, or digital transformation initiative, we&apos;re ready to
                help you bring it to life. Share your details below and
                we&apos;ll reach out to discuss the best approach for your
                needs.
              </p>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left - Project Details Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-text-dark mb-6">
                    What we need to know
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">01</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Project Overview
                        </h3>
                        <p className="text-text-gray text-sm">
                          Brief description of what you want to build
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">02</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Timeline & Budget
                        </h3>
                        <p className="text-text-gray text-sm">
                          When do you need it completed and your budget range
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">03</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Target Audience
                        </h3>
                        <p className="text-text-gray text-sm">
                          Who are the primary users or customers
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">04</span>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Special Requirements
                        </h3>
                        <p className="text-text-gray text-sm">
                          Any specific features or integrations needed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="order-1 lg:order-2">
                <ContactPageForm
                  title="Share Your Project Details"
                  buttonText="Submit Project Inquiry"
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
