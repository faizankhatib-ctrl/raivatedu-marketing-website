export default function Badge({
  children,
  variant = "indigo",
  size = "md",
  className = "",
  icon: Icon,
  ...props
}) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    indigo: "bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]",
    sun: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
    neutral: "bg-[#F3EFEA] text-[#334155] border border-[#E7E0D6]",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    dark: "bg-[#1E1B4B] text-white border border-[#3730A3]",
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full tracking-wide transition-colors ${
        sizeStyles[size] || sizeStyles.md
      } ${variantStyles[variant] || variantStyles.indigo} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      {children}
    </span>
  );
}
