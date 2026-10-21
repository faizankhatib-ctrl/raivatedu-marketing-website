import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-[#FAF8F5] flex-1 flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E0D6] shadow-sm space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center mx-auto border border-[#C7D2FE]">
            <Compass className="w-8 h-8" aria-hidden="true" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] inline-block mb-3">
              404 — Curriculum Not Found
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1B4B] tracking-tight">
              Page or Course Not Found
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed max-w-md mx-auto">
              The course module or route you are looking for does not exist in our demonstration curriculum catalog.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/courses" variant="primary" size="md">
              <span>Browse All Programs</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Button href="/" variant="outline" size="md">
              <Home className="w-4 h-4 mr-1.5" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
