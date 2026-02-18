import ArrowIcon from "./ArrowIcon";

type ButtonVariant = "primary" | "outline" | "dark" | "cta";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light border border-primary hover:border-primary-light",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  dark: "bg-btn-dark text-white hover:bg-gray-800 border border-btn-dark",
  cta: "bg-mint-subtle text-text-dark hover:bg-mint border border-mint hover:border-primary",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  onClick,
  showArrow = true,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer";

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowIcon
          size={14}
          color={
            variant === "primary" || variant === "dark"
              ? "#ffffff"
              : variant === "cta"
              ? "#333333"
              : "#3EBD93"
          }
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
