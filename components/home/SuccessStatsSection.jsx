import { Info } from "lucide-react";
import Container from "../ui/Container";
import { illustrativeStats } from "@/data/statsData";

export default function SuccessStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#1E1B4B] text-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#3730A3] text-[#FBBF24] border border-[#4338CA] mb-3">
            <Info className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Illustrative Platform Metrics</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineered for Real Technical Competence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C7D2FE] leading-relaxed">
            Our educational framework prioritizes hands-on software development milestones
            and individual accountability over passive video lectures.
          </p>
        </div>

        {/* 4-Stat Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {illustrativeStats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-[#282163] border border-[#3730A3] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#FBBF24] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-[#E0E7FF] uppercase tracking-wider">
                    {stat.unit}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#C7D2FE] leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3730A3]/60">
                <span className="text-[10px] text-[#A5B4FC] uppercase tracking-wider font-semibold">
                  Sample Demonstration Metric
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
