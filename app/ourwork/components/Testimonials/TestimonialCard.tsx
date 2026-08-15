import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
  imageSrc: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <div className="w-full max-w-[550px] bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-border-light/50 flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < rating ? "#F5A623" : "#E5E7EB"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p
        className={`text-[#707072] font-medium not-italic text-[18px] sm:text-[20px] md:text-[24px] leading-[26px] sm:leading-[28px] md:leading-[32px] tracking-[0em] flex-1 mb-6 ${poppins.className}`}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] overflow-hidden bg-white flex-shrink-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{name}</p>
          <p className="text-text-light-gray text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
