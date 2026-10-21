import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CourseCatalogClient from "@/components/courses/CourseCatalogClient";
import { courses } from "@/data/coursesData";
import { categories } from "@/data/categoriesData";

export const metadata = {
  title: "Explore All Programs & Cohorts | Raivatedu",
  description:
    "Discover industry-aligned cohorts across Web Engineering, UI/UX Systems, Data Science, and Cloud Architecture with weekly 1:1 mentorship.",
  openGraph: {
    title: "Explore All Programs & Cohorts | Raivatedu",
    description:
      "Discover industry-aligned cohorts across Web Engineering, UI/UX Systems, Data Science, and Cloud Architecture with weekly 1:1 mentorship.",
  },
};

function CatalogLoadingSkeleton() {
  return (
    <div className="space-y-8 animate-pulse" aria-busy="true" aria-label="Loading course catalog">
      <div className="h-44 bg-white rounded-3xl border border-[#E7E0D6] p-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-96 bg-white rounded-3xl border border-[#E7E0D6]" />
        ))}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#FAF8F5]">
      <Container>
        {/* Navigation Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: "Courses" }]} />
        </div>

        {/* Page Header */}
        <header className="mb-10 sm:mb-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE] inline-block mb-3">
            Academic Curriculum
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B4B] tracking-tight leading-tight">
            Explore All Programs & Cohorts
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed">
            Hands-on learning designed around real engineering deliverables. Filter by discipline,
            difficulty level, or keyword to find the right program for your career path.
          </p>
        </header>

        {/* Client-Side Discovery Engine wrapped in Suspense */}
        <Suspense fallback={<CatalogLoadingSkeleton />}>
          <CourseCatalogClient initialCourses={courses} categories={categories} />
        </Suspense>
      </Container>
    </div>
  );
}
