import { Star } from "lucide-react";

export default function RatingStars({
  rating = 5,
  maxRating = 5,
  reviewsCount,
  size = "md",
  showScore = true,
  className = "",
}) {
  const starSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const currentStarSize = starSizes[size] || starSizes.md;
  const currentTextSize = textSizes[size] || textSizes.md;

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="sr-only">
        Rated {rating} out of {maxRating} stars
        {reviewsCount ? ` from ${reviewsCount} reviews` : ""}
      </span>

      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: maxRating }).map((_, index) => {
          const filled = index + 1 <= Math.floor(rating);
          const half = !filled && index < rating;

          return (
            <Star
              key={index}
              className={`${currentStarSize} ${
                filled
                  ? "text-[#F59E0B] fill-[#FBBF24]"
                  : half
                  ? "text-[#F59E0B] fill-[#FDE68A]"
                  : "text-slate-300 fill-slate-100"
              }`}
            />
          );
        })}
      </div>

      {showScore && (
        <span className={`font-bold text-[#1E1B4B] ${currentTextSize}`}>
          {Number(rating).toFixed(1)}
        </span>
      )}

      {reviewsCount !== undefined && (
        <span className={`text-[#64748B] ${currentTextSize}`}>
          ({reviewsCount})
        </span>
      )}
    </div>
  );
}
