import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import RatingStars from "@/components/ui/RatingStars";
import Accordion from "@/components/ui/Accordion";
import { CheckCircle2, Sparkles, BookOpen, Layers, ShieldCheck, Compass } from "lucide-react";

export default function Page() {
  const sampleFaq = [
    {
      id: "admissions",
      title: "How does the cohort-based learning model work?",
      content:
        "Students participate in weekly milestone projects, collaborative peer critiques, and live 1:1 mentor code reviews designed to replicate real-world product engineering environments.",
    },
    {
      id: "prerequisites",
      title: "What are the recommended prerequisites for beginner programs?",
      content:
        "Foundational literacy with a web browser and a passion for building software or digital interfaces. All foundational concepts are introduced step-by-step.",
    },
    {
      id: "demonstration",
      title: "Is this website an active educational service?",
      content:
        "This website is an illustrative frontend prototype created specifically for the Meru Technosoft Private Limited Frontend Internship selection assignment. Course listings, pricing, and mentor bios are curated for demonstration purposes.",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Phase 2 Verification Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#EEF2FF] to-[#FEF3C7] border border-[#C7D2FE] shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="indigo" size="md" icon={Sparkles}>
                  Phase 2 Foundation
                </Badge>
                <Badge variant="sun" size="md">
                  Design System Verified
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight">
                Raivatedu Design System & Core Shell
              </h1>
              <p className="text-sm sm:text-base text-[#334155] max-w-2xl">
                The global layout shell, sticky responsive navigation, multi-column footer,
                accessible design tokens, and reusable primitives have been successfully
                implemented according to the approved blueprint.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1B4B] bg-white/90 px-3 py-1.5 rounded-lg border border-[#E7E0D6]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tailwind CSS v4 & App Router</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1B4B] bg-white/90 px-3 py-1.5 rounded-lg border border-[#E7E0D6]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>WCAG 2.1 AA Contrast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Component Showcase Grid */}
        <div className="space-y-16">
          {/* Section 1: Typography & Section Heading */}
          <section aria-labelledby="tokens-heading" className="p-8 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm">
            <SectionHeading
              id="tokens-heading"
              badge="Design System Primitives"
              title="Color Tokens & Accessible Palette"
              subtitle="Calibrated color tokens honoring Indigo (#4338CA), Deep Indigo (#1E1B4B), Sunny Yellow (#FBBF24), and Warm Off-White (#FAF8F5)."
              align="left"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#4338CA] text-white">
                <p className="font-bold text-sm">Primary Indigo</p>
                <p className="text-xs opacity-80">#4338CA</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1E1B4B] text-white">
                <p className="font-bold text-sm">Deep Indigo</p>
                <p className="text-xs opacity-80">#1E1B4B</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FBBF24] text-[#0F172A] border border-[#F59E0B]">
                <p className="font-bold text-sm">Sunny Yellow</p>
                <p className="text-xs font-medium text-[#78350F]">#FBBF24 (Dark Ink)</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] text-[#0F172A] border border-[#E7E0D6]">
                <p className="font-bold text-sm">Warm Off-White</p>
                <p className="text-xs text-[#64748B]">#FAF8F5 (Base)</p>
              </div>
            </div>
          </section>

          {/* Section 2: Reusable Buttons */}
          <section aria-labelledby="buttons-heading" className="p-8 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm">
            <SectionHeading
              id="buttons-heading"
              badge="Interactive Primitives"
              title="Button Component Variants"
              subtitle="Accessible interactive states: hover, focus-visible ring, active scale, and disabled state."
              align="left"
            />

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button variant="primary" size="md">
                Primary Button
              </Button>
              <Button variant="secondary" size="md">
                Sunny Yellow Accent
              </Button>
              <Button variant="outline" size="md">
                Outline Indigo
              </Button>
              <Button variant="ghost" size="md">
                Ghost Action
              </Button>
              <Button variant="white" size="md">
                Elevated Card Button
              </Button>
              <Button variant="primary" size="md" disabled>
                Disabled State
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-[#E7E0D6]">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                Sizes:
              </span>
              <Button variant="primary" size="sm">
                Small (sm)
              </Button>
              <Button variant="primary" size="md">
                Medium (md)
              </Button>
              <Button variant="primary" size="lg">
                Large (lg)
              </Button>
            </div>
          </section>

          {/* Section 3: Badges & Ratings */}
          <section aria-labelledby="badges-heading" className="p-8 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm">
            <SectionHeading
              id="badges-heading"
              badge="Information Design"
              title="Semantic Badges & Accessible Star Ratings"
              subtitle="Pills and ratings equipped with screen reader descriptions and high contrast ratios."
              align="left"
            />

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge variant="indigo" icon={BookOpen}>
                Web Development
              </Badge>
              <Badge variant="sun" icon={Sparkles}>
                Featured Cohort
              </Badge>
              <Badge variant="success" icon={CheckCircle2}>
                Admissions Open
              </Badge>
              <Badge variant="neutral" icon={Layers}>
                16 Weeks
              </Badge>
              <Badge variant="dark" icon={Compass}>
                Intermediate
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-8 pt-6 border-t border-[#E7E0D6]">
              <div>
                <p className="text-xs font-semibold text-[#64748B] mb-2">Compact Rating:</p>
                <RatingStars rating={4.9} reviewsCount={342} size="sm" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#64748B] mb-2">Standard Rating:</p>
                <RatingStars rating={4.8} reviewsCount={128} size="md" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#64748B] mb-2">Prominent Rating:</p>
                <RatingStars rating={5.0} reviewsCount={94} size="lg" />
              </div>
            </div>
          </section>

          {/* Section 4: Accordion Component */}
          <section aria-labelledby="accordion-heading" className="p-8 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm">
            <SectionHeading
              id="accordion-heading"
              badge="WAI-ARIA Pattern"
              title="Keyboard Accessible Accordion"
              subtitle="Full keyboard navigation (Enter/Space), proper aria-expanded, aria-controls, and smooth chevron rotation."
              align="left"
            />

            <div className="mt-6 max-w-2xl">
              <Accordion items={sampleFaq} defaultOpenIndex={0} />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
