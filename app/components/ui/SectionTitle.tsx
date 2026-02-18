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
      className={`text-center text-xl md:text-2xl font-semibold italic text-primary tracking-wide ${
        underline ? "underline underline-offset-4 decoration-primary" : ""
      } ${className}`}
    >
      {title}
    </h2>
  );
}
