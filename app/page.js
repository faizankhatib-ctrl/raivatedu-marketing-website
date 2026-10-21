import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import MentorSpotlightSection from "@/components/home/MentorSpotlightSection";
import SuccessStatsSection from "@/components/home/SuccessStatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Raivatedu — Master Tech & Design Skills with 1:1 Mentorship",
  description:
    "Explore cohort-based learning for developers and designers. Build production-grade portfolio capstones with bi-weekly 1:1 code reviews from industry practitioners.",
  openGraph: {
    title: "Raivatedu — Master Tech & Design Skills with 1:1 Mentorship",
    description:
      "Explore cohort-based learning for developers and designers. Build production-grade portfolio capstones with bi-weekly 1:1 code reviews from industry practitioners.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Course Search & Featured Cohort Preview */}
      <HeroSection />

      {/* 2. Popular Course Categories with Deep-links to /courses?category=slug */}
      <CategorySection />

      {/* 3. Featured Flagship Courses Grid with Details & Slugs */}
      <FeaturedCoursesSection />

      {/* 4. Mentor / Faculty Spotlight (#mentors target) */}
      <MentorSpotlightSection />

      {/* 5. Student Success & Educational Framework Statistics */}
      <SuccessStatsSection />

      {/* 6. Student Testimonials Showcase (#testimonials target) */}
      <TestimonialsSection />

      {/* 7. Comprehensive FAQ Accordion (#faq target) */}
      <FAQSection />

      {/* 8. Closing Call to Action Banner */}
      <CTASection />
    </>
  );
}
