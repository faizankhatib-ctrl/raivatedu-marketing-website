import Image from "next/image";
import { CheckCircle2, MessageSquare } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { mentors } from "@/data/mentorsData";

export default function MentorSpotlightSection() {
  return (
    <section id="mentors" className="py-20 bg-[#FAF8F5] scroll-mt-24">
      <Container>
        <SectionHeading
          badge="Practitioner Mentorship"
          badgeVariant="indigo"
          title="Learn Directly from Industry Practitioners"
          subtitle="Every student is paired with experienced practitioners for bi-weekly 1:1 architectural reviews, code critiques, and career orientation."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor) => (
            <article
              key={mentor.id}
              className="p-6 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Mentor Photo */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 bg-slate-100 border-2 border-[#E7E0D6]">
                  <Image
                    src={mentor.avatar}
                    alt={`Photo of mentor ${mentor.name}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                {/* Name & Title */}
                <div className="text-center mb-3">
                  <h3 className="text-base font-bold text-[#1E1B4B]">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#4338CA]">
                    {mentor.role}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                    {mentor.illustrativeNote}
                  </span>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-[#475569] leading-relaxed text-center mb-4 line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E7E0D6] text-[#334155]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: 1:1 Reviews Meta */}
              <div className="pt-3 border-t border-[#E7E0D6] flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
                <MessageSquare className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
                <span className="font-semibold text-[#1E1B4B]">
                  {mentor.sessionsConducted}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
