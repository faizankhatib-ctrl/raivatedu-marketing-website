"use client";

import Button from "../ui/Button";

export default function MobileStickyBar({ course, onOpenEnrollModal }) {
  return (
    <aside aria-label="Mobile enrollment action" className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E7E0D6] p-4 shadow-2xl">
      <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
        <div>
          <span className="block text-[10px] uppercase font-bold text-[#64748B] tracking-wider">
            Cohort Tuition
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[#1E1B4B]">
              ₹{course.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-[#94A3B8] line-through">
              ₹{course.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={onOpenEnrollModal}
          className="shadow-sm font-bold px-6"
        >
          Enroll Now
        </Button>
      </div>
    </aside>
  );
}
