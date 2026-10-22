"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2, FolderGit2, BookOpen } from "lucide-react";

export default function SyllabusModuleAccordion({ syllabus = [] }) {
  // Store array of currently open module indices
  const [openIndices, setOpenIndices] = useState([0]);

  const allOpen = openIndices.length === syllabus.length;

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndices([]);
    } else {
      setOpenIndices(syllabus.map((_, i) => i));
    }
  };

  const toggleModule = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {/* Top Header Controls: Total Modules + Expand/Collapse All */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E7E0D6]">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
          <BookOpen className="w-4 h-4 text-[#4338CA]" aria-hidden="true" />
          <span>{syllabus.length} Milestone Modules</span>
        </div>

        <button
          type="button"
          onClick={toggleAll}
          className="text-xs font-bold text-[#4338CA] hover:text-[#3730A3] px-3 py-1.5 rounded-lg bg-[#EEF2FF] hover:bg-[#E0E7FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#4338CA] cursor-pointer"
        >
          {allOpen ? "Collapse All Modules" : "Expand All Modules"}
        </button>
      </div>

      {/* Accordion Modules */}
      <div className="space-y-3.5">
        {syllabus.map((module, index) => {
          const isOpen = openIndices.includes(index);
          const headerId = `module-header-${index}`;
          const panelId = `module-panel-${index}`;

          return (
            <div
              key={module.title || index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-[#C7D2FE] shadow-sm"
                  : "bg-white/80 border-[#E7E0D6] hover:border-[#CBD5E1]"
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleModule(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4338CA]"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <span className="w-7 h-7 rounded-xl bg-[#EEF2FF] text-[#4338CA] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#C7D2FE]">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wider">
                          {module.week}
                        </span>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF8F5] text-[#64748B] border border-[#E7E0D6]">
                          {module.lessonsCount} Lessons
                        </span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-[#1E1B4B] leading-snug block">
                        {module.title}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#FAF8F5] border border-[#E7E0D6] text-[#4338CA] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#EEF2FF] border-[#C7D2FE]" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
              </h3>

              {/* Module Panel Content */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                hidden={!isOpen}
                className={`px-5 sm:px-6 pb-6 pt-1 text-sm text-[#334155] border-t border-[#E7E0D6]/60 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {/* Core Topics Covered */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2.5">
                    Core Topics Covered:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-[#334155] font-medium">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Milestone Capstone Project */}
                {module.project && (
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E0D6] flex items-start gap-2.5 text-xs text-[#1E1B4B]">
                    <FolderGit2 className="w-4 h-4 text-[#4338CA] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-[#4338CA] font-bold block mb-0.5">
                        Module Capstone Deliverable:
                      </strong>
                      <span className="text-[#475569]">{module.project}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
