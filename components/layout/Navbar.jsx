"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, GraduationCap, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Explore Courses" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/#testimonials", label: "Student Stories" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change (React recommended state adjustment during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7E0D6]"
          : "bg-[#FAF8F5] border-b border-[#E7E0D6]/60"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark & Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338CA] rounded-xl p-1"
            aria-label="Raivatedu Home"
          >
            <span className="w-10 h-10 rounded-xl bg-[#1E1B4B] text-white flex items-center justify-center shadow-sm group-hover:bg-[#4338CA] transition-colors relative overflow-hidden">
              <GraduationCap className="w-6 h-6 text-[#FBBF24]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FBBF24] rounded-full" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-[#1E1B4B] tracking-tight">
                  Raivatedu
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                  Demo
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#64748B] -mt-0.5 hidden sm:inline">
                Online Learning & Mentorship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && !link.href.includes("#");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338CA] ${
                    isActive
                      ? "text-[#4338CA] bg-[#EEF2FF]"
                      : "text-[#334155] hover:text-[#1E1B4B] hover:bg-[#F3EFEA]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/courses"
              variant="primary"
              size="md"
              className="group"
            >
              <span>Browse Catalog</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-[#1E1B4B] hover:bg-[#F3EFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338CA] transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isOpen ? "Close menu" : "Open main navigation menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer & Backdrop */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-x-0 top-20 bottom-0 z-50 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] border-b border-[#E7E0D6] shadow-xl p-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4 p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E]">
              <Sparkles className="w-4 h-4 shrink-0 text-[#D97706]" />
              <span>Illustrative concept website for internship evaluation</span>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href) && !link.href.includes("#");

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-semibold rounded-xl min-h-[48px] flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#4338CA] bg-[#EEF2FF]"
                        : "text-[#1E1B4B] hover:bg-[#F3EFEA]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#64748B]" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 mt-4 border-t border-[#E7E0D6] flex flex-col gap-3">
              <Button
                href="/courses"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Browse All Programs
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
