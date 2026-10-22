import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  BookOpen,
  FolderGit2,
  Award,
  CheckCircle2,
  Users,
  Compass,
  Laptop,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import RatingStars from "@/components/ui/RatingStars";
import SyllabusModuleAccordion from "@/components/course-detail/SyllabusModuleAccordion";
import StudentReviewsSection from "@/components/course-detail/StudentReviewsSection";
import RelatedCoursesSection from "@/components/course-detail/RelatedCoursesSection";
import CourseDetailClientWrapper from "@/components/course-detail/CourseDetailClientWrapper";
import { courses, getCourseBySlug } from "@/data/coursesData";

// Pre-render all 8 courses statically at build time
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// Allow blocking route resolution for dynamic slug evaluations under Next.js 16 Partial Prefetching
export const instant = false;

// Generate unique dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    return {
      title: "Course Not Found | Raivatedu",
      description: "The requested curriculum could not be located.",
    };
  }

  return {
    title: `${course.title} | Raivatedu Cohort Curriculum`,
    description: course.tagline,
    openGraph: {
      title: `${course.title} | Raivatedu Cohort Curriculum`,
      description: course.tagline,
      images: [
        {
          url: course.thumbnail,
          width: 800,
          height: 500,
          alt: `${course.title} Curriculum Thumbnail`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Raivatedu Cohort Curriculum`,
      description: course.tagline,
      images: [course.thumbnail],
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = getCourseBySlug(resolvedParams.slug);

  // Return standard Next.js 404 if course slug does not exist
  if (!course) {
    notFound();
  }

  return (
    <div className="bg-[#FAF8F5] pb-24 md:pb-28">
      {/* Top Hero Section */}
      <section className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F3EFEA]/50 border-b border-[#E7E0D6]">
        <Container>
          {/* Breadcrumb Hierarchy */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Courses", href: "/courses" },
                { label: course.title },
              ]}
            />
          </div>

          <div className="max-w-4xl space-y-4">
            {/* Top Badges Strip */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="indigo" size="md">
                {course.categoryName}
              </Badge>
              <Badge variant="sun" size="md">
                {course.level}
              </Badge>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#1E1B4B] bg-white px-3 py-1 rounded-full border border-[#E7E0D6]">
                <Calendar className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
                <span>Next Cohort Starts: {course.nextCohortDate}</span>
              </span>
            </div>

            {/* Semantic Title <h1> */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B4B] tracking-tight leading-tight">
              {course.title}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              {course.tagline}
            </p>

            {/* Ratings & Enrolled Meta */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#1E1B4B]">
              <RatingStars
                rating={course.rating}
                reviewsCount={course.reviewsCount}
                size="md"
              />
              <span className="text-slate-400" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 text-[#64748B]">
                <Users className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
                <span>{course.studentsCount.toLocaleString("en-IN")} Alumni (Sample)</span>
              </span>
              <span className="text-slate-400" aria-hidden="true">•</span>
              <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                Illustrative Syllabus
              </span>
            </div>
          </div>

          {/* Quick Specifications Meta Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-[#E7E0D6]">
            <div className="p-3.5 rounded-2xl bg-white border border-[#E7E0D6]">
              <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                Duration
              </span>
              <span className="text-sm font-extrabold text-[#1E1B4B] flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
                {course.durationWeeks} Weeks
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E7E0D6]">
              <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                Weekly Effort
              </span>
              <span className="text-sm font-extrabold text-[#1E1B4B] flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
                {course.hoursPerWeek} hrs/week
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E7E0D6]">
              <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                Live Projects
              </span>
              <span className="text-sm font-extrabold text-[#1E1B4B] flex items-center gap-1">
                <FolderGit2 className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
                4 Capstones
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E7E0D6]">
              <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                Mentorship
              </span>
              <span className="text-sm font-extrabold text-[#1E1B4B] flex items-center gap-1">
                <Users className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
                1:1 Reviews
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E7E0D6] col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                Credential
              </span>
              <span className="text-sm font-extrabold text-[#1E1B4B] flex items-center gap-1">
                <Award className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
                Certificate
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content: 2-Column Split Layout */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Main Content Column (Spans 8 columns on large screens) */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Course Overview & Description */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B]">
                  Program Overview
                </h2>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {course.description}
                </p>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  Unlike traditional lecture-heavy certificates, Raivatedu cohorts replicate the pace and standards of modern technology engineering teams. You will write code under active version control, defend your design decisions during peer demos, and receive line-by-line feedback during weekly 1:1 mentor code reviews.
                </p>
              </div>

              {/* 2. What You Will Master (Learning Outcomes - 6 Bullets) */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4338CA] block mb-1">
                    Key Competencies
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B]">
                    What You Will Master
                  </h2>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {course.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D6] flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-[#1E1B4B] font-medium leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Interactive Curriculum Syllabus */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4338CA] block mb-1">
                    Structured Curriculum
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B]">
                    Week-by-Week Milestone Syllabus
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Explore each module&apos;s conceptual themes, hands-on lessons, and milestone deliverables.
                  </p>
                </div>

                <SyllabusModuleAccordion syllabus={course.syllabus} />
              </div>

              {/* 4. Prerequisites & Equipment */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-[#4338CA]" aria-hidden="true" />
                  <span>Prerequisites & Hardware Requirements</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {course.prerequisites}
                </p>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D6] text-xs text-[#64748B] space-y-1">
                  <p><strong>Hardware:</strong> Any modern laptop or desktop (macOS, Windows, or Linux) with at least 8GB RAM and stable internet connectivity.</p>
                  <p><strong>Software:</strong> Modern browser (Chrome/Firefox/Edge) and free code editor (VS Code recommended).</p>
                </div>
              </div>

              {/* 5. Mentor Profile Box */}
              {course.mentor && (
                <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4338CA] block mb-1">
                      Faculty Guidance
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B]">
                      Meet Your Mentor
                    </h2>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-[#E7E0D6]">
                      <Image
                        src={course.mentor.avatar}
                        alt={`Photo of instructor ${course.mentor.name}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-2.5 min-w-0">
                      <div>
                        <h3 className="text-lg font-bold text-[#1E1B4B]">
                          {course.mentor.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#4338CA]">
                          {course.mentor.title}
                        </p>
                        <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                          {course.mentor.illustrativeCredential}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {course.mentor.bio}
                      </p>

                      {course.mentor.expertise && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {course.mentor.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E7E0D6] text-[#334155]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Student Reviews Section */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4338CA] block mb-1">
                    Cohort Feedback
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B]">
                    Student Ratings & Reviews
                  </h2>
                </div>

                <StudentReviewsSection course={course} />
              </div>
            </div>

            {/* Right Sticky Enrollment Sidebar (Spans 4 columns on large screens) */}
            <div className="lg:col-span-4">
              <CourseDetailClientWrapper course={course} />
            </div>
          </div>

          {/* Related Courses Section */}
          <RelatedCoursesSection
            currentSlug={course.slug}
            category={course.category}
          />
        </Container>
      </section>
    </div>
  );
}
