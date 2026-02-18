interface ProjectCardProps {
  name: string;
  className?: string;
}

export default function ProjectCard({ name, className = "" }: ProjectCardProps) {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      {/* Image Placeholder */}
      <div className="w-full h-full img-placeholder min-h-[220px] md:min-h-[280px] transition-transform duration-500 group-hover:scale-105">
        {name}
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Arrow Button */}
      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:bg-primary-light transition-colors duration-300">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.5 5.5L16 12L9.5 18.5" />
          <path d="M3.5 5.5L10 12L3.5 18.5" />
        </svg>
      </div>
    </div>
  );
}
