"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  items = [],
  allowMultiple = false,
  className = "",
  defaultOpenIndex = 0,
}) {
  const [openIndices, setOpenIndices] = useState(() => {
    if (defaultOpenIndex === null || defaultOpenIndex === undefined) return [];
    return [defaultOpenIndex];
  });

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`divide-y divide-[#E7E0D6] border-y border-[#E7E0D6] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `accordion-header-${item.id || index}`;
        const panelId = `accordion-panel-${item.id || index}`;

        return (
          <div key={item.id || index} className="py-4">
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between gap-4 text-left font-semibold text-[#1E1B4B] hover:text-[#4338CA] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338CA] rounded-lg py-1 px-1 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold leading-snug">
                  {item.title}
                </span>
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

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`pt-3 pb-1 px-1 text-sm sm:text-base text-[#334155] leading-relaxed transition-all duration-200 ${
                isOpen ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              {typeof item.content === "string" ? (
                <p>{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
