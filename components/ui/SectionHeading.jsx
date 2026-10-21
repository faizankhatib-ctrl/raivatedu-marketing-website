import Badge from "./Badge";

export default function SectionHeading({
  badge,
  badgeVariant = "indigo",
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className="mb-3.5 inline-block">
          {typeof badge === "string" ? (
            <Badge variant={badgeVariant} size="md">
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}

      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1B4B] tracking-tight leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#334155] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
