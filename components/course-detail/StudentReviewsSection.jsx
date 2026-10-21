import RatingStars from "../ui/RatingStars";
import { MessageSquareQuote, ShieldAlert } from "lucide-react";

export default function StudentReviewsSection({ course }) {
  const reviews = course.reviews || [];

  // Distribution percentages (illustrative)
  const distribution = [
    { stars: 5, percentage: 88, count: Math.round((course.reviewsCount * 0.88)) },
    { stars: 4, percentage: 9, count: Math.round((course.reviewsCount * 0.09)) },
    { stars: 3, percentage: 2, count: Math.round((course.reviewsCount * 0.02)) },
    { stars: 2, percentage: 1, count: Math.round((course.reviewsCount * 0.01)) },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <div className="space-y-8">
      {/* Aggregate Score & Distribution Grid */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Overall Rating Score Box (5 columns) */}
          <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-[#E7E0D6] pb-6 md:pb-0 md:pr-6">
            <span className="text-4xl sm:text-5xl font-black text-[#1E1B4B] tracking-tight">
              {Number(course.rating).toFixed(1)}
            </span>
            <div>
              <RatingStars rating={course.rating} size="lg" showScore={false} />
            </div>
            <p className="text-xs text-[#64748B] font-medium">
              Based on {course.reviewsCount} illustrative cohort reviews
            </p>
          </div>

          {/* Star Distribution Bars (7 columns) */}
          <div className="md:col-span-7 space-y-2 text-xs">
            {distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="w-12 text-[#334155] font-semibold text-right">
                  {item.stars} stars
                </span>
                <div className="flex-1 h-2.5 rounded-full bg-[#FAF8F5] border border-[#E7E0D6] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#F59E0B]"
                    style={{ width: `${item.percentage}%` }}
                    aria-hidden="true"
                  />
                </div>
                <span className="w-8 text-[#64748B] text-right font-medium">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Illustrative Student Reviews List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
            <MessageSquareQuote className="w-5 h-5 text-[#4338CA]" aria-hidden="true" />
            <span>Sample Student Experiences</span>
          </h3>
          <span className="text-xs text-[#64748B]">Showing {reviews.length} sample reviews</span>
        </div>

        {reviews.map((rev) => (
          <article
            key={rev.id}
            className="p-6 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#1E1B4B]">{rev.author}</h4>
                <p className="text-xs text-[#64748B]">{rev.role}</p>
              </div>
              <div className="text-right">
                <RatingStars rating={rev.rating} size="sm" showScore={false} />
                <span className="text-[10px] text-[#94A3B8] block mt-0.5">{rev.date}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic">
              &ldquo;{rev.comment}&rdquo;
            </p>

            <div className="pt-2 border-t border-[#E7E0D6]/60 flex items-center gap-1.5 text-[10px] text-[#64748B]">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>Demonstration feedback for assignment evaluation.</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
