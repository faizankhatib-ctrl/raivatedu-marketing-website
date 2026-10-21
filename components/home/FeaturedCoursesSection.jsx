import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import RatingStars from "../ui/RatingStars";
import { getFeaturedCourses } from "@/data/coursesData";

export default function FeaturedCoursesSection() {
  const featuredCourses = getFeaturedCourses();

  return (
    <section className="py-20 bg-[#F4EFEB]/50 border-y border-[#E7E0D6]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Flagship Cohorts"
            badgeVariant="sun"
            title="Featured Cohort Programs"
            subtitle="Deep-dive curricula featuring production-level projects and weekly 1:1 mentorship reviews."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <div className="shrink-0">
            <Button href="/courses" variant="outline" size="md" className="group">
              <span>View All 8 Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>

        {/* 3-Column Grid for Flagship Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-xl hover:shadow-indigo-950/5 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Thumbnail with Level Badge */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.thumbnail}
                    alt={`${course.title} course preview illustration`}
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
                  {/* Rating & Review Count */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <RatingStars
                      rating={course.rating}
                      reviewsCount={course.reviewsCount}
                      size="sm"
                    />
                    <span className="text-[11px] font-semibold text-[#64748B]">
                      {course.nextCohortDate}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1E1B4B] group-hover:text-[#4338CA] transition-colors leading-snug mb-2.5">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="focus-visible:outline-2 focus-visible:outline-[#4338CA] rounded"
                    >
                      {course.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed line-clamp-2 mb-5">
                    {course.tagline}
                  </p>

                  {/* Metadata Chips: Duration & Effort */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#334155] py-3 border-y border-[#E7E0D6]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
                      <span>{course.durationWeeks} Weeks</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
                      <span>{course.hoursPerWeek} hrs/week</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing & Action */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center justify-between gap-4">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
