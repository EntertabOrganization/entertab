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
      <div className="relative w-full h-[360px] md:h-[420px] rounded-[30px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 500px, 100vw"
        />
      </div>

      {/* Number + Title */}
      <div className="mb-3 mt-4 flex items-center">
        <span className="text-primary font-semibold text-[30px] mr-2">
          {number}
        </span>
        <span
          className={`${poppins.className} text-text-dark font-semibold text-[30px] leading-[38px]`}
        >
          {titleBlack}
        </span>{" "}
        <span
          className={`${poppins.className} text-primary font-semibold text-[30px] leading-[38px]`}
        >
          {titleGreen}
        </span>
      </div>

      {/* Description */}
      <p
        className={`${poppinsMedium.className} text-text-gray font-medium text-[18px] leading-[28px] mb-4`}
      >
        {description}
      </p>
    </div>
  );
}
