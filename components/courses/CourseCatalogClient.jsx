"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal, RotateCcw, Filter } from "lucide-react";
import CourseCard from "./CourseCard";
import EmptyState from "./EmptyState";
import Button from "../ui/Button";

export default function CourseCatalogClient({ initialCourses = [], categories = [] }) {
  const searchParams = useSearchParams();

  // Initialize state from URL params
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get("category") || "all");
  const [selectedLevel, setSelectedLevel] = useState(() => searchParams.get("level") || "all");
  const [sortBy, setSortBy] = useState(() => searchParams.get("sort") || "popular");

  // Synchronize state if URL searchParams change during render (React 19 recommended pattern)
  const [prevParamsString, setPrevParamsString] = useState(() => searchParams.toString());
  const currentParamsString = searchParams.toString();

  if (currentParamsString !== prevParamsString) {
    setPrevParamsString(currentParamsString);
    setSearchQuery(searchParams.get("q") || "");
    setSelectedCategory(searchParams.get("category") || "all");
    setSelectedLevel(searchParams.get("level") || "all");
    setSortBy(searchParams.get("sort") || "popular");
  }

  // Keep browser URL synchronized without full page reload
  const updateUrl = useCallback((q, cat, lvl, sort) => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (cat && cat !== "all") params.set("category", cat);
    if (lvl && lvl !== "all") params.set("level", lvl);
    if (sort && sort !== "popular") params.set("sort", sort);

    const queryString = params.toString();
    const newPath = queryString ? `/courses?${queryString}` : "/courses";
    window.history.replaceState(null, "", newPath);
  }, []);

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    updateUrl(val, selectedCategory, selectedLevel, sortBy);
  };

  const handleCategoryChange = (catSlug) => {
    setSelectedCategory(catSlug);
    updateUrl(searchQuery, catSlug, selectedLevel, sortBy);
  };

  const handleLevelChange = (lvl) => {
    setSelectedLevel(lvl);
    updateUrl(searchQuery, selectedCategory, lvl, sortBy);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    updateUrl(searchQuery, selectedCategory, selectedLevel, sortOption);
  };

  const handleResetAll = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSortBy("popular");
    updateUrl("", "all", "all", "popular");
  };

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedLevel !== "all" ||
    sortBy !== "popular";

  // Filter and sort the courses list in memory
  const filteredCourses = useMemo(() => {
    let result = [...initialCourses];

    // 1. Text Search Filter
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      result = result.filter((course) => {
        const titleMatch = course.title?.toLowerCase().includes(query);
        const taglineMatch = course.tagline?.toLowerCase().includes(query);
        const descMatch = course.description?.toLowerCase().includes(query);
        const catMatch = course.categoryName?.toLowerCase().includes(query);
        const outcomesMatch = course.outcomes?.some((o) =>
          o.toLowerCase().includes(query)
        );
        const mentorMatch = course.mentor?.name?.toLowerCase().includes(query);

        return (
          titleMatch ||
          taglineMatch ||
          descMatch ||
          catMatch ||
          outcomesMatch ||
          mentorMatch
        );
      });
    }

    // 2. Category Filter
    if (selectedCategory !== "all") {
      result = result.filter((course) => course.category === selectedCategory);
    }

    // 3. Difficulty Level Filter
    if (selectedLevel !== "all") {
      result = result.filter(
        (course) => course.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    // 4. Sorting
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "duration-asc":
        result.sort((a, b) => a.durationWeeks - b.durationWeeks);
        break;
      case "popular":
      default:
        result.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
    }

    return result;
  }, [initialCourses, searchQuery, selectedCategory, selectedLevel, sortBy]);

  return (
    <div className="space-y-8">
      {/* Filter and Control Toolbar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D6] shadow-sm space-y-6">
        {/* Top Row: Search Input + Sorting Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input (Spans 8 columns on desktop) */}
          <div className="md:col-span-8 relative">
            <label htmlFor="catalog-search" className="sr-only">
              Search courses by title, topic or skill
            </label>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
              <Search className="w-5 h-5 text-[#4338CA]" aria-hidden="true" />
            </div>
            <input
              id="catalog-search"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by topic, keyword, or skill (e.g. Next.js, Figma, SQL)..."
              className="w-full pl-11 pr-10 py-3 text-sm sm:text-base text-[#0F172A] placeholder-[#94A3B8] bg-[#FAF8F5] border border-[#E7E0D6] rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#94A3B8] hover:text-[#0F172A] focus-visible:outline-2 focus-visible:outline-[#4338CA] rounded"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Controller (Spans 4 columns on desktop) */}
          <div className="md:col-span-4 flex items-center gap-2">
            <label
              htmlFor="sort-control"
              className="text-xs font-bold text-[#1E1B4B] shrink-0 uppercase tracking-wider"
            >
              Sort By:
            </label>
            <select
              id="sort-control"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full py-2.5 px-3 text-xs sm:text-sm font-semibold text-[#1E1B4B] bg-[#FAF8F5] border border-[#E7E0D6] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA] cursor-pointer transition-all"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="duration-asc">Duration: Short to Long</option>
            </select>
          </div>
        </div>

        {/* Middle Row: Category Filter Pills */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B] flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
              <span>Disciplines:</span>
            </span>

            {isFiltered && (
              <button
                type="button"
                onClick={handleResetAll}
                className="text-xs font-bold text-[#4338CA] hover:text-[#3730A3] flex items-center gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4338CA] rounded"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              aria-pressed={selectedCategory === "all"}
              onClick={() => handleCategoryChange("all")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4338CA] ${
                selectedCategory === "all"
                  ? "bg-[#4338CA] text-white shadow-sm"
                  : "bg-[#FAF8F5] text-[#334155] border border-[#E7E0D6] hover:bg-[#EEF2FF] hover:text-[#4338CA]"
              }`}
            >
              All Categories ({initialCourses.length})
            </button>

            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4338CA] ${
                    isSelected
                      ? "bg-[#4338CA] text-white shadow-sm"
                      : "bg-[#FAF8F5] text-[#334155] border border-[#E7E0D6] hover:bg-[#EEF2FF] hover:text-[#4338CA]"
                  }`}
                >
                  {cat.title} ({cat.coursesCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Difficulty Level Controls */}
        <div className="pt-4 border-t border-[#E7E0D6] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B] flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
              <span>Level:</span>
            </span>

            {["all", "Beginner", "Intermediate", "Advanced"].map((lvl) => {
              const isSelected = selectedLevel.toLowerCase() === lvl.toLowerCase();
              return (
                <button
                  key={lvl}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleLevelChange(lvl)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4338CA] ${
                    isSelected
                      ? "bg-[#1E1B4B] text-white"
                      : "bg-[#FAF8F5] text-[#475569] border border-[#E7E0D6] hover:bg-[#F3EFEA]"
                  }`}
                >
                  {lvl === "all" ? "All Levels" : lvl}
                </button>
              );
            })}
          </div>

          {/* Results Count Announcement */}
          <div
            aria-live="polite"
            className="text-xs sm:text-sm font-bold text-[#1E1B4B] bg-[#EEF2FF] text-[#4338CA] px-3 py-1 rounded-full border border-[#C7D2FE]"
          >
            Showing {filteredCourses.length} of {initialCourses.length} Programs
          </div>
        </div>
      </div>

      {/* Courses Display: Grid or Empty State */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState
          onReset={handleResetAll}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedLevel={selectedLevel}
        />
      )}
    </div>
  );
}
