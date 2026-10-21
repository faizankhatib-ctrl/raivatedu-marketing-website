import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RatingStars from "../ui/RatingStars";
import { testimonials } from "@/data/testimonialsData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#FAF8F5] scroll-mt-24">
      <Container>
        <SectionHeading
          badge="Student Journeys"
          badgeVariant="sun"
          title="Designed for Meaningful Career Transitions"
          subtitle="Explore illustrative student experiences highlighting the impact of hands-on capstone projects and mentor guidance."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="p-7 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm hover:shadow-lg hover:shadow-indigo-950/5 transition-all duration-200 flex flex-col justify-between relative"
            >
              <div>
                {/* Decorative Quote Icon & Rating */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <RatingStars rating={item.rating} size="sm" />
                  <Quote className="w-8 h-8 text-[#EEF2FF] fill-[#EEF2FF]" aria-hidden="true" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm text-[#334155] leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Key Outcome Highlight */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E0D6] text-xs text-[#1E1B4B] font-medium mb-6">
                  <span className="font-bold text-[#4338CA] block mb-0.5">
                    Demonstration Milestone:
                  </span>
                  {item.keyOutcome}
                </div>
              </div>

              {/* Student Profile Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E7E0D6]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-[#E7E0D6]">
                  <Image
                    src={item.avatar}
                    alt={`Photo of student ${item.name}`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E1B4B]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    {item.program}
                  </p>
                  <span className="text-[10px] text-amber-800 font-semibold block mt-0.5">
                    {item.roleAfter}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
