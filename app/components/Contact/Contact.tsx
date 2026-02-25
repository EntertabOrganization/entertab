import ContactForm from "./ContactForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-gradient-to-br from-white via-white to-mint-subtle"
      style={{
        background:
          "linear-gradient(to top right, rgba(83, 190, 147, 0.5) 0%, #FFFFFF 40.3846%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold italic text-primary leading-snug mb-6">
              Emphasizing
              <br />
              the Future
            </h2>

            <p
              className={`text-text-gray font-normal not-italic text-[24px] leading-[32px] tracking-[0em] mb-6 max-w-[300px] ${poppins.className}`}
            >
              Let&apos;s build something great together. Tell us about your
              question, your latest project idea, or a potential partnership.
            </p>

            <p
              className={`text-text-gray font-black not-italic text-[24px] leading-[32px] tracking-[0em] max-w-[300px] ${poppins.className}`}
            >
              We&apos;re here and ready to connect quickly.
            </p>

            {/* Decorative Element Placeholder */}
            <div className="absolute bottom-[-400px] left-[-15px] opacity-100">
              <svg
                width="334"
                height="334"
                viewBox="0 0 334 334"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M58.9262 89.9197C53.8336 93.1198 49.5192 95.8878 45.1486 98.564C34.2458 105.252 23.33 111.923 12.384 118.542C5.41524 122.759 1.67579 128.845 1.40343 137.088C1.23916 142.126 0.919249 147.151 0.754972 152.189C0.478296 160.763 3.85029 167.552 11.2168 171.857C18.2331 175.952 25.4959 175.864 32.5079 171.577C51.443 159.99 70.4558 148.535 89.218 136.677C101.236 129.089 107.418 117.616 108.261 103.41C108.823 93.9581 109.376 84.4494 108.957 75.0106C108.434 63.3452 103.212 53.5397 93.9863 46.4759C75.6479 32.4224 57.184 18.5305 38.504 4.93986C25.0204 -4.86568 7.03207 3.82658 5.57087 20.5606C5.1083 25.8738 5.1083 31.2175 4.78407 36.5437C4.26963 44.9653 7.54219 51.4005 14.2646 56.3513C27.4154 66.0389 40.4537 75.8838 53.5267 85.6675C55.1478 86.8768 56.7128 88.1691 58.9262 89.9197Z"
                  stroke="#54BF93"
                  strokeWidth="1.37637"
                  strokeMiterlimit="10"
                />
                <path
                  d="M32.6694 171.578C51.6978 160.018 64.5658 152.486 83.4248 140.661C102.944 119.671 59.2266 90.143 59.2266 90.143C59.2266 90.143 49.7732 96.0947 45.3811 98.768C34.4158 105.434 23.455 112.086 12.455 118.687C5.45185 122.897 1.69397 128.962 1.42027 137.186C1.25084 142.202 0.933701 147.222 0.768614 152.238C0.490574 160.797 3.87919 167.559 11.282 171.852C14.7314 173.846 18.2374 174.847 21.7476 174.847C25.4099 174.852 29.0679 173.759 32.6694 171.578Z"
                  stroke="#54BF93"
                  strokeWidth="1.37637"
                  strokeMiterlimit="10"
                />
                <path
                  d="M221.546 170.923C231.226 177.006 239.427 182.268 247.735 187.355C268.46 200.068 289.209 212.749 310.016 225.329C323.262 233.346 330.37 244.914 330.888 260.582C331.2 270.159 331.808 279.71 332.121 289.287C332.646 305.586 326.237 318.49 312.234 326.672C298.897 334.457 285.092 334.291 271.763 326.141C235.771 304.117 199.63 282.341 163.966 259.802C141.122 245.379 129.371 223.57 127.768 196.566C126.7 178.6 125.648 160.525 126.445 142.583C127.44 120.409 137.366 101.771 154.902 88.3434C189.761 61.63 224.858 35.2237 260.366 9.38999C285.996 -9.24878 320.189 7.27384 322.966 39.0826C323.846 49.182 323.846 59.3396 324.462 69.464C325.44 85.4721 319.219 97.7043 306.441 107.115C281.443 125.53 256.659 144.243 231.81 162.84C228.728 165.139 225.754 167.596 221.546 170.923Z"
                  stroke="#54BF93"
                  strokeWidth="1.37637"
                  strokeMiterlimit="10"
                />
                <path
                  d="M271.456 326.142C235.286 304.169 210.826 289.852 174.978 267.374C137.875 227.476 220.975 171.348 220.975 171.348C220.975 171.348 238.945 182.661 247.293 187.742C268.137 200.413 288.971 213.059 309.881 225.605C323.192 233.608 330.336 245.136 330.856 260.77C331.178 270.304 331.781 279.846 332.095 289.38C332.623 305.651 326.182 318.503 312.11 326.663C305.553 330.454 298.889 332.357 292.217 332.357C285.255 332.365 278.302 330.288 271.456 326.142Z"
                  stroke="#54BF93"
                  strokeWidth="1.37637"
                  strokeMiterlimit="10"
                />
              </svg>
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
