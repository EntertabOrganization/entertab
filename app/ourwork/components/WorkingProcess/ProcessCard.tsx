import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const poppinsMedium = Poppins({ subsets: ["latin"], weight: ["500"] });

interface ProcessCardProps {
  number: string;
  titleBlack: string;
  titleGreen: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProcessCard({
  number,
  titleBlack,
  titleGreen,
  description,
  imageSrc,
  imageAlt,
}: ProcessCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-[30px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 500px, 100vw"
        />
      </div>

      {/* Number + Title */}
      <div className="mb-3 mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-primary font-semibold text-[22px] sm:text-[26px] md:text-[30px] leading-[28px] sm:leading-[34px] md:leading-[38px]">
          {number}
        </span>
        <span
          className={`${poppins.className} text-text-dark font-semibold text-[22px] sm:text-[26px] md:text-[30px] leading-[28px] sm:leading-[34px] md:leading-[38px]`}
        >
          {titleBlack}
        </span>
        <span
          className={`${poppins.className} text-primary font-semibold text-[22px] sm:text-[26px] md:text-[30px] leading-[28px] sm:leading-[34px] md:leading-[38px]`}
        >
          {titleGreen}
        </span>
      </div>

      {/* Description */}
      <p
        className={`${poppinsMedium.className} text-text-gray font-medium text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] mb-4`}
      >
        {description}
      </p>
    </div>
  );
}
