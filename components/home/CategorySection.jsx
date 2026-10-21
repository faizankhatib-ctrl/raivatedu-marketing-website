import Link from "next/link";
import { Code, Palette, Database, Cloud, LineChart, Shield, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { categories } from "@/data/categoriesData";

const CATEGORY_ICONS = {
  "web-development": Code,
  "ui-ux-design": Palette,
  "data-science-ai": Database,
  "cloud-devops": Cloud,
  "product-management": LineChart,
  cybersecurity: Shield,
};

export default function CategorySection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <Container>
        <SectionHeading
          badge="Curriculum Domains"
          badgeVariant="indigo"
          title="Explore Industry-Aligned Disciplines"
          subtitle="Explore comprehensive cohorts designed in collaboration with engineering and design practitioners."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.slug] || Code;

            return (
              <Link
                key={category.id}
                href={`/courses?category=${category.slug}`}
                className="group relative p-7 rounded-2xl bg-white border border-[#E7E0D6] hover:border-[#4338CA]/40 shadow-sm hover:shadow-lg hover:shadow-indigo-950/5 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338CA]"
              >
                <div>
                  {/* Top Bar with Icon & Course Count */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4338CA] group-hover:bg-[#4338CA] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E0D6] text-[#334155] group-hover:bg-[#EEF2FF] group-hover:text-[#4338CA] transition-colors">
                      {category.coursesCount} Programs
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1B4B] group-hover:text-[#4338CA] transition-colors mb-2">
                    {category.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div>
                  {/* Popular Topics Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E7E0D6]">
                    {category.popularTopics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF8F5] text-[#475569]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Explore Link Text */}
                  <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#4338CA] group-hover:text-[#3730A3]">
                    <span>View All {category.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
