"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/courses?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/courses");
    }
  };

  const handleSuggestion = (topic) => {
    router.push(`/courses?q=${encodeURIComponent(topic)}`);
  };

  return (
    <div className="w-full max-w-2xl">
      <form
        onSubmit={handleSearch}
        role="search"
        className="relative flex items-center bg-white rounded-2xl p-2 shadow-lg shadow-indigo-950/5 border border-[#E7E0D6] focus-within:border-[#4338CA] focus-within:ring-2 focus-within:ring-[#4338CA]/20 transition-all"
      >
        <label htmlFor="hero-search-input" className="sr-only">
          Search courses, topics, and technical skills
        </label>
        <div className="pl-3.5 pr-2 text-[#64748B] pointer-events-none" aria-hidden="true">
          <Search className="w-5 h-5 text-[#4338CA]" />
        </div>
        <input
          id="hero-search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by topic, skill or role (e.g. Next.js, Figma, Python)..."
          className="w-full py-2.5 px-2 text-sm sm:text-base text-[#0F172A] placeholder-[#94A3B8] bg-transparent border-none focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#4338CA] hover:bg-[#3730A3] active:bg-[#312E81] text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338CA]"
        >
          <span>Find Course</span>
          <ArrowRight className="w-4 h-4 hidden sm:inline" />
        </button>
      </form>

      {/* Popular Search Suggestions */}
      <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
        <span className="font-semibold text-[#1E1B4B]">Popular:</span>
        {["Next.js", "Design Systems", "Python AI", "Kubernetes"].map((topic) => (
          <button
            key={topic}
            type="button"
            onClick={() => handleSuggestion(topic)}
            className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#EEF2FF] hover:text-[#4338CA] border border-[#E7E0D6] text-[#334155] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4338CA]"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
