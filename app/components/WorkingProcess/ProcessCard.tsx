interface ProcessCardProps {
  number: string;
  titleBlack: string;
  titleGreen: string;
  description: string;
  hasImage: boolean;
  imageLabel?: string;
}

export default function ProcessCard({
  number,
  titleBlack,
  titleGreen,
  description,
  hasImage,
  imageLabel,
}: ProcessCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Number + Title */}
      <div className="mb-3">
        <span className="text-primary font-semibold text-lg mr-2">
          {number}
        </span>
        <span className="text-text-dark font-bold text-xl md:text-2xl">
          {titleBlack}
        </span>{" "}
        <span className="text-primary font-bold text-xl md:text-2xl">
          {titleGreen}
        </span>
      </div>

      {/* Description */}
      <p className="text-text-gray text-sm md:text-base leading-relaxed mb-4">
        {description}
      </p>

      {/* Image Placeholder */}
      {hasImage && (
        <div className="w-full h-[220px] md:h-[280px] img-placeholder rounded-xl mt-auto text-sm">
          {imageLabel || "Process Image"}
        </div>
      )}
    </div>
  );
}
