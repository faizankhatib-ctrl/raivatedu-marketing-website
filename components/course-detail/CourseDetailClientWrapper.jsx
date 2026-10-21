"use client";

import { useState } from "react";
import StickyEnrollCard from "./StickyEnrollCard";
import MobileStickyBar from "./MobileStickyBar";
import EnrollmentModal from "./EnrollmentModal";

export default function CourseDetailClientWrapper({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Desktop Floating Sticky Enrollment Card */}
      <div className="sticky top-28">
        <StickyEnrollCard
          course={course}
          onOpenEnrollModal={() => setIsModalOpen(true)}
        />
      </div>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar
        course={course}
        onOpenEnrollModal={() => setIsModalOpen(true)}
      />

      {/* Modal Dialog for Enrollment Application */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={course}
      />
    </>
  );
}
