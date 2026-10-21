import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#4338CA] text-white hover:bg-[#3730A3] active:bg-[#312E81] shadow-sm hover:shadow focus-visible:outline-[#4338CA]",
    secondary:
      "bg-[#FBBF24] text-[#0F172A] hover:bg-[#F59E0B] active:bg-[#D97706] shadow-sm hover:shadow focus-visible:outline-[#D97706]",
    outline:
      "border-2 border-[#4338CA] text-[#4338CA] bg-transparent hover:bg-[#EEF2FF] active:bg-[#E0E7FF] focus-visible:outline-[#4338CA]",
    ghost:
      "text-[#334155] bg-transparent hover:bg-[#F3EFEA] hover:text-[#0F172A] active:bg-[#EAE5DD] focus-visible:outline-[#4338CA]",
    white:
      "bg-white text-[#1E1B4B] border border-[#E7E0D6] shadow-sm hover:shadow-md hover:bg-slate-50 focus-visible:outline-[#1E1B4B]",
  };

  const computedClassName = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={computedClassName}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={computedClassName}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
