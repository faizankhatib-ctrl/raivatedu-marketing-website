import { SearchX, RotateCcw } from "lucide-react";
import Button from "../ui/Button";

export default function EmptyState({ onReset, searchQuery, selectedCategory, selectedLevel }) {
  const activeFilters = [];
  if (searchQuery) activeFilters.push(`Search: "${searchQuery}"`);
  if (selectedCategory && selectedCategory !== "all") activeFilters.push(`Category: "${selectedCategory}"`);
  if (selectedLevel && selectedLevel !== "all") activeFilters.push(`Level: "${selectedLevel}"`);

  return (
    <div className="py-16 px-6 text-center bg-white rounded-3xl border border-[#E7E0D6] shadow-sm max-w-2xl mx-auto my-8">
      <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center mx-auto mb-5 border border-[#C7D2FE]">
        <SearchX className="w-8 h-8" aria-hidden="true" />
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B] mb-2">
        No Matching Programs Found
      </h2>

      <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-md mx-auto mb-4">
        We couldn&apos;t find any courses matching your selected criteria. Try adjusting your search term, selecting another category, or resetting all filters.
      </p>

      {activeFilters.length > 0 && (
        <div className="mb-6 flex flex-wrap justify-center gap-2 text-xs">
          {activeFilters.map((filter) => (
            <span
              key={filter}
              className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E7E0D6] text-[#334155] font-medium"
            >
              {filter}
            </span>
          ))}
        </div>
      )}

      <Button
        variant="primary"
        size="md"
        onClick={onReset}
        className="mx-auto"
      >
        <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
        <span>Reset All Filters</span>
      </Button>
    </div>
  );
}
