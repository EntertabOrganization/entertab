interface SectionTitleProps {
  title: string;
  underline?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  underline = false,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-center text-[36px] leading-[44px] tracking-[-0.02em] font-semibold text-[#54BF93] ${
        underline ? "underline underline-offset-4 decoration-current" : ""
      } ${className}`}
    >
      {title}
    </h2>
  );
}
