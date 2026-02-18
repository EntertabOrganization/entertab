import ArrowIcon from "../ui/ArrowIcon";

interface ServiceCardProps {
  title: string;
  iconColor: string;
  iconLabel: string;
}

export default function ServiceCard({
  title,
  iconColor,
  iconLabel,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      {/* Icon Placeholder */}
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-xs font-medium"
        style={{
          border: `2px solid ${iconColor}`,
          color: iconColor,
        }}
      >
        {iconLabel}
      </div>

      {/* Title */}
      <h4 className="text-base font-semibold text-text-dark leading-snug">
        {title}
      </h4>

      {/* Arrow Link */}
      <button className="cursor-pointer group" aria-label={`Learn more about ${title}`}>
        <ArrowIcon size={16} color="#3EBD93" className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
