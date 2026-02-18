interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border-light/50">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={i < rating ? "#F5A623" : "#E5E7EB"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-gray text-sm md:text-base leading-relaxed mb-6">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full img-placeholder text-[10px]">
          Pic
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{name}</p>
          <p className="text-text-light-gray text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
