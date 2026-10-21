"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, ShieldAlert, Sparkles, Loader2, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function EnrollmentModal({ isOpen, onClose, course }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "Intermediate",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const modalRef = useRef(null);
  const initialFocusRef = useRef(null);

  // Reset state during render when modal opens (React 19 recommended pattern)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setErrors({});
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }

  // Handle body scroll locking and initial focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit contact number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Generate demo application ID inside event handler
    const demoId = `RAIV-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(demoId);

    // Simulate brief client-side submission state (no external backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E7E0D6] overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 bg-white border-b border-[#E7E0D6] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                Demonstration Application
              </span>
            </div>
            <h2 id="enrollment-modal-title" className="text-xl font-extrabold text-[#1E1B4B]">
              {isSuccess ? "Application Received" : "Enroll in Cohort"}
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5">
              {course.title}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#64748B] hover:text-[#1E1B4B] hover:bg-[#FAF8F5] transition-colors focus-visible:outline-2 focus-visible:outline-[#4338CA]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {isSuccess ? (
            /* Success Confirmation State */
            <div className="text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1E1B4B]">
                  Illustrative Enrollment Confirmed!
                </h3>
                <p className="text-sm text-[#475569] mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1E1B4B]">{formData.fullName}</strong>. Your sample application for the upcoming cohort has been processed in demonstration mode.
                </p>
              </div>

              {/* Application Details Summary */}
              <div className="p-4 rounded-2xl bg-white border border-[#E7E0D6] text-left text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-[#E7E0D6]">
                  <span className="text-[#64748B]">Application ID:</span>
                  <span className="font-mono font-bold text-[#4338CA]">{applicationId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E0D6]">
                  <span className="text-[#64748B]">Cohort Date:</span>
                  <span className="font-bold text-[#1E1B4B]">{course.nextCohortDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E0D6]">
                  <span className="text-[#64748B]">Tuition Fee:</span>
                  <span className="font-bold text-[#1E1B4B]">₹{course.price.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#64748B]">Applicant Contact:</span>
                  <span className="font-medium text-[#1E1B4B]">{formData.email}</span>
                </div>
              </div>

              {/* Transparent Demo Disclosure */}
              <div className="p-3.5 rounded-xl bg-[#FEF3C7]/70 border border-[#FDE68A] text-[11px] text-[#92400E] text-left flex items-start gap-2">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-[#D97706]" />
                <p>
                  <strong>Internship Assignment Notice:</strong> This is an illustrative frontend prototype for Meru Technosoft Private Limited. No live backend request was made, and no real payment was processed.
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={onClose}
                className="w-full justify-center"
              >
                Done
              </Button>
            </div>
          ) : (
            /* Enrollment Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Honest Notice */}
              <div className="p-3 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] text-xs text-[#3730A3] flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#4338CA] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Frontend prototype enrollment form. Enter demonstration details to test client validation and success states.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="enroll-fullname"
                  className="block text-xs font-bold text-[#1E1B4B] mb-1.5 uppercase tracking-wider"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={initialFocusRef}
                  id="enroll-fullname"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Priyanshu Sharma"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                    errors.fullName ? "border-red-500 ring-1 ring-red-500" : "border-[#E7E0D6]"
                  } focus:outline-none focus:ring-2 focus:ring-[#4338CA] transition-all`}
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "fullname-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullname-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="enroll-email"
                  className="block text-xs font-bold text-[#1E1B4B] mb-1.5 uppercase tracking-wider"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="enroll-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. priyanshu@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                    errors.email ? "border-red-500 ring-1 ring-red-500" : "border-[#E7E0D6]"
                  } focus:outline-none focus:ring-2 focus:ring-[#4338CA] transition-all`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="enroll-phone"
                  className="block text-xs font-bold text-[#1E1B4B] mb-1.5 uppercase tracking-wider"
                >
                  Phone Number (10 Digits) <span className="text-red-500">*</span>
                </label>
                <input
                  id="enroll-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                    errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-[#E7E0D6]"
                  } focus:outline-none focus:ring-2 focus:ring-[#4338CA] transition-all`}
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Experience Level */}
              <div>
                <label
                  htmlFor="enroll-experience"
                  className="block text-xs font-bold text-[#1E1B4B] mb-1.5 uppercase tracking-wider"
                >
                  Current Technical Experience
                </label>
                <select
                  id="enroll-experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-[#E7E0D6] focus:outline-none focus:ring-2 focus:ring-[#4338CA] transition-all cursor-pointer"
                >
                  <option value="Beginner">Beginner (Little to no programming background)</option>
                  <option value="Intermediate">Intermediate (Familiar with web basics & syntax)</option>
                  <option value="Advanced">Advanced (Working professional seeking specialization)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      <span>Validating Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application (₹{course.price.toLocaleString("en-IN")})</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
