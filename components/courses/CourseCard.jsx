import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowUpRight, Calendar } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import RatingStars from "../ui/RatingStars";

export default function CourseCard({ course }) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-xl hover:shadow-indigo-950/5 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Course Thumbnail & Top Badges */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={course.thumbnail}
            alt={`${course.title} course preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
            <Badge variant="dark" size="sm">
              {course.categoryName}
            </Badge>
          </div>
          <div className="absolute top-3.5 right-3.5">
            <Badge variant="sun" size="sm">
              {course.level}
            </Badge>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7">
          {/* Rating, Reviews & Next Cohort Date */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <RatingStars
              rating={course.rating}
              reviewsCount={course.reviewsCount}
              size="sm"
            />
            <span className="flex items-center gap-1 text-[11px] font-semibold text-[#64748B]">
              <Calendar className="w-3 h-3 text-[#4338CA]" aria-hidden="true" />
              <span>{course.nextCohortDate}</span>
            </span>
          </div>

          {/* Course Title */}
          <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1B4B] group-hover:text-[#4338CA] transition-colors leading-snug mb-2.5">
            <Link
              href={`/courses/${course.slug}`}
              className="focus-visible:outline-2 focus-visible:outline-[#4338CA] rounded"
            >
              {course.title}
            </Link>
          </h2>

          {/* Short Description / Tagline */}
          <p className="text-sm text-[#475569] leading-relaxed line-clamp-2 mb-5">
            {course.tagline}
          </p>

          {/* Metadata Chips: Duration & Weekly Effort */}
          <div className="flex items-center gap-4 text-xs font-semibold text-[#334155] py-3 border-y border-[#E7E0D6] mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
              <span>{course.durationWeeks} Weeks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
              <span>{course.hoursPerWeek} hrs/week</span>
            </div>
          </div>

          {/* Instructor / Mentor Information */}
          {course.mentor && (
            <div className="flex items-center gap-2.5 pt-1">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-[#E7E0D6]">
                <Image
                  src={course.mentor.avatar}
                  alt={`Photo of instructor ${course.mentor.name}`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#1E1B4B] truncate">
                  {course.mentor.name}
                </p>
                <p className="text-[10px] text-[#64748B] truncate">
                  {course.mentor.title} (Sample Profile)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Pricing & Action Button */}
      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center justify-between gap-4 border-t border-[#E7E0D6]/60">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[#1E1B4B]">
              ₹{course.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-[#94A3B8] line-through font-normal">
              ₹{course.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <span className="block text-[10px] font-semibold text-emerald-700">
            Cohort Scholarship Applied
          </span>
        </div>

        <Button
          href={`/courses/${course.slug}`}
          variant="primary"
          size="sm"
          className="group/btn"
        >
          <span>Curriculum</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Button>
      </div>
    </article>
  );
}
