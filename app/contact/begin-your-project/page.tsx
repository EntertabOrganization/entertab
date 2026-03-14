import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import ContactPageForm from "@/app/components/Contact/ContactPageForm";
import Link from "next/link";

export default function BeginYourProjectPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-mint-subtle" style={{
          background:
            "linear-gradient(to bottom left, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
        }}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-22">
              {/* Left - Project Details Placeholder */}
              <div className="mb-12 md:mb-16">
                <div className="inline-flex rounded-full p-3 mb-8" style={{
                  background: "rgba(152, 216, 190, 0.4)",
                  backdropFilter: "blur(103.3px)",
                  boxShadow: "0 0 40px rgba(86, 191, 148, 0.3)"
                }}>
                  <svg width="80" height="100" viewBox="0 0 131 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.7319 78.3219C66.071 82.151 63.8387 85.4345 61.5337 88.6711C55.79 96.7571 50.0317 104.834 44.2343 112.88C40.5434 118.006 39.7288 123.453 42.0498 129.348C43.468 132.952 44.7721 136.594 46.1946 140.196C48.6121 146.326 53.0952 150.07 59.6626 150.83C65.9247 151.549 71.0823 149.244 74.7768 144.054C84.7623 130.035 94.8388 116.081 104.619 101.927C110.887 92.8622 111.799 82.8637 108.065 72.5899C105.582 65.7519 103.077 58.8761 99.8973 52.3501C95.9675 44.2853 89.2431 38.9904 80.5016 36.8598C63.1209 32.6169 45.7014 28.5265 28.2165 24.7201C15.5962 21.9715 5.40242 33.6588 9.46821 45.9081C10.7585 49.7967 12.3889 53.5641 13.7799 57.4195C15.9842 63.517 20.282 67.0383 26.5888 68.4532C38.9349 71.2213 51.2472 74.1292 63.5664 76.9925C65.11 77.3423 66.6191 77.7696 68.7319 78.3219Z" fill="#56BF94" />
                    <path d="M74.7893 144.048C84.773 130.025 91.6119 120.744 101.39 106.585C108.836 85.7426 68.7425 78.3117 68.7425 78.3117C68.7425 78.3117 63.8493 85.4242 61.5463 88.6652C55.7962 96.7487 50.0424 104.823 44.2449 112.87C40.5559 118 39.7394 123.442 42.0623 129.342C43.4786 132.942 44.7846 136.588 46.2053 140.186C48.6247 146.321 53.1059 150.06 59.6732 150.819C62.7349 151.17 65.5319 150.8 68.0226 149.722C70.6279 148.594 72.894 146.695 74.7893 144.048Z" fill="#56BF94" />
                    <path d="M74.7893 144.048C84.773 130.025 91.6119 120.744 101.39 106.585C108.836 85.7426 68.7425 78.3117 68.7425 78.3117C68.7425 78.3117 63.8493 85.4242 61.5463 88.6652C55.7962 96.7487 50.0424 104.823 44.2449 112.87C40.5559 118 39.7394 123.442 42.0623 129.342C43.4786 132.942 44.7846 136.588 46.2053 140.186C48.6247 146.321 53.1059 150.06 59.6732 150.819C62.7349 151.17 65.5319 150.8 68.0226 149.722C70.6279 148.594 72.894 146.695 74.7893 144.048Z" fill="url(#paint0_linear_527_4324)" />
                    <defs>
                      <linearGradient id="paint0_linear_527_4324" x1="102.455" y1="99.2722" x2="40.1534" y2="126.234" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0D485C" />
                        <stop offset="0.243" stopColor="#1D5C67" />
                        <stop offset="0.7791" stopColor="#439A85" />
                        <stop offset="1" stopColor="#56BF94" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <h1 style={{
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "44px",
                  letterSpacing: "-2%",
                  color: "#54BF93",
                  marginBottom: "16px"
                }} className="max-w-xl">
                  Begin your project journey with full assurance.
                </h1>
                <p style={{
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "0%",
                  color: "#707072",
                }} className="max-w-3xl">
                  Every concept deserves to be shaped with exceptional care and precision. Share your project details, goals, and expectations through the form, and we'll connect with you to craft a tailored solution—from the first idea all the way to the final launch.
                </p>
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
