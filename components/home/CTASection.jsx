import { ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1E1B4B] via-[#2A2368] to-[#1E1B4B] text-white p-8 sm:p-14 lg:p-16 border-2 border-[#3730A3] shadow-xl shadow-indigo-950/10 overflow-hidden">
          {/* Subtle Ambient Background Accents */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#4338CA]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FBBF24]/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#3730A3]/80 text-[#FBBF24] border border-[#4338CA]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Elevate Your Engineering Standard</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to Accelerate Your Journey with Structured Mentorship?
            </h2>

            <p className="text-sm sm:text-base text-[#C7D2FE] leading-relaxed max-w-2xl font-normal">
              Join focused, small-group cohorts built around real-world code reviews and production deliverables.
              Explore our full curriculum catalog or review frequently asked questions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                href="/courses"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center group"
              >
                <span>Browse All 8 Cohorts</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href="#faq"
                variant="white"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                <HelpCircle className="w-4 h-4 mr-1 text-[#4338CA]" />
                <span>Read Admissions FAQ</span>
              </Button>
            </div>

            <p className="text-xs text-[#94A3B8] pt-2">
              Demonstration prototype built for Meru Technosoft Private Limited Frontend Internship Selection.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
