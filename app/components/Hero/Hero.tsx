import Button from "../ui/Button";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-12 overflow-hidden bg-gradient-to-br from-white via-white to-mint-subtle"
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
          {/* Left Content */}
          <div className="z-10 relative lg:col-span-8 lg:self-center">
            <h1
              className={`${poppins.className} text-[60px] leading-[72px] tracking-[-0.02em] font-normal text-gray-600`}
            >
              We are a full-service digital partner, delivering innovative
              digital solutions for
              <br />
              <span className="text-[#53BE93]">a smarter future.</span>
            </h1>

            <p className="text-text-gray text-[27px] leading-[36px] font-medium">
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
          <div className="relative flex items-center justify-center lg:justify-end lg:col-span-4 gap-[10px]">
            <div className="w-[376px] h-[636px] relative opacity-100 rotate-0">
              <svg
                width="377"
                height="636"
                viewBox="0 0 377 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M193.605 359.688C209.574 349.769 223.085 341.184 236.79 332.889C270.973 312.141 305.195 291.452 339.514 270.936C361.368 257.865 373.098 238.993 373.95 213.431C374.472 197.807 375.479 182.223 375.982 166.599C376.853 140.012 366.265 118.955 343.192 105.613C321.184 92.9095 298.421 93.1802 276.451 106.483C217.085 142.41 157.486 177.949 98.6615 214.707C60.9744 238.239 41.5986 273.817 38.9661 317.865C37.2046 347.178 35.4625 376.665 36.7788 405.94C38.4047 442.118 54.7997 472.514 83.7183 494.422C141.207 538.005 199.083 581.086 257.656 623.219C299.93 653.634 356.335 626.68 360.903 574.782C362.355 558.308 362.355 541.737 363.381 525.224C364.988 499.101 354.729 479.166 333.669 463.813C292.439 433.765 251.559 403.252 210.581 372.895C205.432 369.124 200.535 365.122 193.605 359.688Z"
                  fill="#56BF94"
                />
                <path
                  d="M276.393 106.483C217.027 142.429 176.881 165.845 118.057 202.622C57.1612 267.9 193.547 359.708 193.547 359.708C193.547 359.708 223.027 341.203 236.731 332.889C270.934 312.161 305.137 291.471 339.456 270.956C361.31 257.865 373.04 239.012 373.892 213.431C374.414 197.827 375.421 182.223 375.924 166.618C376.795 140.012 366.207 118.974 343.134 105.633C332.372 99.4257 321.435 96.3127 310.499 96.3127C299.059 96.3127 287.639 99.7158 276.393 106.483Z"
                  fill="#56BF94"
                />
                <path
                  d="M276.393 106.483C217.027 142.429 176.881 165.845 118.057 202.622C57.1612 267.9 193.547 359.708 193.547 359.708C193.547 359.708 223.027 341.203 236.731 332.889C270.934 312.161 305.137 291.471 339.456 270.956C361.31 257.865 373.04 239.012 373.892 213.431C374.414 197.827 375.421 182.223 375.924 166.618C376.795 140.012 366.207 118.974 343.134 105.633C332.372 99.4257 321.435 96.3127 310.499 96.3127C299.059 96.3127 287.639 99.7158 276.393 106.483Z"
                  fill="url(#paint0_linear_414_1368)"
                />
                <path
                  d="M76.2857 115.533C69.6077 119.69 63.9556 123.267 58.2261 126.747C43.941 135.429 29.6172 144.073 15.274 152.658C6.13776 158.13 1.24057 166.019 0.872795 176.712C0.659874 183.247 0.234031 189.763 0.0211094 196.299C-0.346664 207.417 4.08597 216.215 13.7255 221.803C22.9198 227.121 32.4432 227.005 41.6376 221.436C66.4526 206.412 91.3838 191.562 115.967 176.19C131.723 166.348 139.814 151.478 140.936 133.051C141.672 120.792 142.408 108.475 141.846 96.2353C141.169 81.1145 134.317 68.3914 122.219 59.2455C98.2166 40.9729 74.021 22.9518 49.535 5.33668C31.8432 -7.36708 8.26698 3.90581 6.35068 25.6008C5.75063 32.4844 5.75063 39.4261 5.32479 46.329C4.64731 57.2539 8.94445 65.5877 17.7517 72.0072C34.9983 84.5756 52.0707 97.3374 69.2206 110.022C71.3498 111.588 73.4016 113.27 76.2857 115.533Z"
                  fill="#56BF94"
                />
                <path
                  d="M41.6755 221.397C66.4905 206.373 83.2726 196.57 107.875 181.198C133.329 153.915 76.3043 115.533 76.3043 115.533C76.3043 115.533 63.9742 123.267 58.2447 126.748C43.9402 135.41 29.6358 144.073 15.2926 152.638C6.15632 158.111 1.25912 166 0.89135 176.692C0.678429 183.209 0.252586 189.744 0.039664 196.26C-0.328109 207.379 4.10453 216.177 13.7441 221.765C18.2348 224.356 22.8223 225.671 27.3904 225.671C32.1908 225.651 36.9719 224.22 41.6755 221.397Z"
                  fill="#56BF94"
                />
                <path
                  d="M41.6755 221.397C66.4905 206.373 83.2726 196.57 107.875 181.198C133.329 153.915 76.3043 115.533 76.3043 115.533C76.3043 115.533 63.9742 123.267 58.2447 126.748C43.9402 135.41 29.6358 144.073 15.2926 152.638C6.15632 158.111 1.25912 166 0.89135 176.692C0.678429 183.209 0.252586 189.744 0.039664 196.26C-0.328109 207.379 4.10453 216.177 13.7441 221.765C18.2348 224.356 22.8223 225.671 27.3904 225.671C32.1908 225.651 36.9719 224.22 41.6755 221.397Z"
                  fill="url(#paint1_linear_414_1368)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_414_1368"
                    x1="102.413"
                    y1="228.007"
                    x2="375.976"
                    y2="228.007"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D485C" />
                    <stop offset="0.243" stopColor="#1D5C67" />
                    <stop offset="0.7791" stopColor="#439A85" />
                    <stop offset="1" stopColor="#56BF94" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_414_1368"
                    x1="114.416"
                    y1="170.587"
                    x2="0.0361849"
                    y2="170.587"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D485C" />
                    <stop offset="0.243" stopColor="#1D5C67" />
                    <stop offset="0.7791" stopColor="#439A85" />
                    <stop offset="1" stopColor="#56BF94" />
                  </linearGradient>
                </defs>
              </svg>
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
