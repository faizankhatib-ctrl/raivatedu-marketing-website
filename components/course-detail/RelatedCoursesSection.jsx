import CourseCard from "../courses/CourseCard";
import SectionHeading from "../ui/SectionHeading";
import { getRelatedCourses } from "@/data/coursesData";

export default function RelatedCoursesSection({ currentSlug, category }) {
  const related = getRelatedCourses(currentSlug, category, 3);

  if (!related || related.length === 0) return null;

  return (
    <section className="pt-16 mt-16 border-t border-[#E7E0D6]">
      <SectionHeading
        badge="Alternative Tracks"
        badgeVariant="indigo"
        title="Explore Related Cohorts"
        subtitle="Complement your learning with parallel engineering and design curricula."
        align="left"
        className="mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {related.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
