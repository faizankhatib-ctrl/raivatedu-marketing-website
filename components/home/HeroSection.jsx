import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Users, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import HeroSearch from "./HeroSearch";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F3EFEA]/40 border-b border-[#E7E0D6]/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition & Search */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo" size="md" icon={Sparkles}>
                Cohort-Based Tech Education
              </Badge>
              <span className="text-xs font-semibold text-[#64748B] hidden sm:inline">
                • Illustrative Demo Platform
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B4B] tracking-tight leading-[1.15]">
              Master High-Impact Tech & Design Skills with{" "}
              <span className="text-[#4338CA] relative inline-block">
                1:1 Mentorship
                <span
                  className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FBBF24]/40 -z-10 rounded-sm"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl font-normal">
              Intensive, project-driven learning engineered for developers and designers.
              Build production-grade capstones, receive structured weekly code critiques,
              and gain genuine confidence in modern software engineering.
            </p>

            {/* Course Search Bar */}
            <div className="pt-2">
              <HeroSearch />
            </div>

            {/* Core Trust Anchors */}
            <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm font-semibold text-[#1E1B4B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Max 25 Learners per Cohort</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Bi-weekly 1:1 Code Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>4 Production Capstones</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Cohort Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl shadow-indigo-950/5 border border-[#E7E0D6] relative">
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E7E0D6]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B]">
                    Next Cohort Enrolling
                  </span>
                </div>
                <Badge variant="sun" size="sm">
                  Few Seats Left
                </Badge>
              </div>

              {/* Course Preview Thumbnail */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Fullstack developer laptop displaying modern Next.js and code editor"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="dark" size="sm">
                    Web Engineering
                  </Badge>
                </div>
              </div>

              {/* Course Meta & Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#4338CA]" />
                    Starts Nov 15, 2026
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#4338CA]" />
                    16 Weeks
                  </span>
                </div>

                <h2 className="text-lg font-bold text-[#1E1B4B] leading-snug">
                  Fullstack Engineering with Next.js & Node
                </h2>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                  Build server-rendered architectures, database schemas with Prisma, and microservices.
                </p>

                {/* Mentor Line */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#E7E0D6]">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                        alt="Mentor Aaditya Sharma avatar"
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1E1B4B]">Aaditya Sharma</p>
                      <p className="text-[10px] text-[#64748B]">Staff Architect (Sample Profile)</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-extrabold text-[#4338CA]">₹34,999</span>
                    <span className="block text-[10px] text-[#94A3B8] line-through">₹49,999</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <Button
                    href="/courses/fullstack-nextjs-engineering"
                    variant="primary"
                    size="md"
                    className="w-full justify-center group"
                  >
                    <span>View Curriculum</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
