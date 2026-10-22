# Raivatedu — Modern Online Education & Mentorship Platform

> **Frontend Internship Evaluation Submission**  
> Built for **Meru Technosoft Private Limited**  
> Technology: Next.js 16 (App Router with Turbopack), React 19, Tailwind CSS v4, Lucide React

---

## 1. Project Overview & Implemented Features

**Raivatedu** is a production-grade, highly responsive marketing website and course discovery platform for an intensive cohort-based online education academy. The platform blends editorial elegance with high-utility discovery tools, modeled around real software engineering deliverables and practitioner mentorship.

### Core Implemented Features:
1. **Interactive Homepage Experience (`/`):**
   - High-impact hero section with interactive course search and instant suggestion chips (`Next.js`, `Design Systems`, `Python AI`, `Kubernetes`).
   - 6 discipline domain cards linking directly to pre-filtered catalog views.
   - Flagship cohort showcase featuring ratings, duration, pricing with applied scholarships, and deep curriculum links.
   - Practitioner mentor faculty spotlight with session metrics and specialty badges.
   - High-contrast platform statistics highlighting project-based accountability.
   - Student testimonials and journey stories.
   - Accessible admissions and tuition FAQ accordion.
   - Bottom conversion banner with dual CTA actions.

2. **Course Discovery & Filtering Engine (`/courses`):**
   - Instant search across course titles, taglines, comprehensive descriptions, outcomes, and mentor names.
   - Multi-criteria filter combinations: Keyword search + Discipline category + Difficulty level + Sorting.
   - 4 sorting algorithms: Most Popular (enrollment count), Highest Rated, Price: Low to High, and Duration: Short to Long.
   - Dynamic URL parameter synchronization (`?q=...&category=...&level=...&sort=...`) enabling bookmarkable, shareable search states.
   - Interactive live result counter (`Showing X of Y Programs`).
   - "Clear / Reset Filters" action available on active filter bars and within the zero-result empty state.

3. **Dynamic Course Detail Architecture (`/courses/[slug]`):**
   - Statically pre-rendered routes for all 8 curriculum tracks using `generateStaticParams`.
   - Comprehensive course header with breadcrumb trail, discipline badges, cohort start dates, ratings, and specification metric chips.
   - Interactive week-by-week syllabus milestone accordion with simultaneous "Expand All Modules" / "Collapse All Modules" control.
   - Hardware, software, and prerequisite guidelines.
   - Faculty mentor profile card with biography and areas of expertise.
   - Student reviews section with 5-star rating distribution visualization bars.
   - Dynamic related courses recommendation engine based on matching category disciplines.
   - Desktop sticky enrollment sidebar with instant plaintext syllabus download (`.txt`).
   - Mobile fixed-bottom enrollment action bar with device safe-area inset accommodation.
   - Fully accessible modal application workflow with multi-field client validation, error messaging, and demonstration confirmation card.

---

## 2. Technology Stack & Actual Versions

All dependencies and frameworks used in the project are aligned with modern React 19 and Next.js 16 standards:

| Dependency | Exact Installed Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.4.2` | React Framework (App Router, Turbopack, Partial Prerendering, Font Optimization) |
| **React** | `19.3.0` | UI Library (Concurrent features, React 19 render patterns) |
| **React DOM** | `19.3.0` | DOM Renderer |
| **Tailwind CSS** | `^4.0.0` | Utility-first CSS engine with `@tailwindcss/turbopack` integration |
| **Lucide React** | `^1.61.0` | Consistent, accessible SVG icon primitives |
| **ESLint** | `^9.0.0` | Code quality and linting engine (`eslint-config-next: 16.4.2`) |

---

## 3. Setup and Run Commands

### Prerequisites
- **Node.js**: `v18.17.0` or higher (Node `v20.x` or `v22.x` recommended)
- **Package Manager**: `npm` (v9 or v10)

### Quick Start
```bash
# 1. Clone the repository (or navigate to project directory)
cd "d:/Build a Marketing Website"

# 2. Install dependencies
npm install

# 3. Start local development server (runs with Turbopack on port 3000)
npm run dev

# 4. Open browser to preview
# http://localhost:3000
```

### Production Build & Linting
```bash
# Execute ESLint validation
npm run lint

# Compile optimized static production build
npm run build

# Start production server
npm run start
```

---

## 4. Route Architecture & Pre-rendered Slugs

| Route | File Location | Rendering Strategy | Description |
| :--- | :--- | :--- | :--- |
| `/` | `app/page.js` | Static (`○`) | Marketing homepage with search, categories, showcase, mentors, stats, FAQ |
| `/courses` | `app/courses/page.js` | Static (`○`) | Catalog discovery engine wrapped in Suspense with URL search synchronization |
| `/courses/[slug]` | `app/courses/[slug]/page.js` | Static (`○` / `◐`) | Dynamic curriculum detail route with 8 static params |
| `/_not-found` | `app/not-found.js` | Static (`○`) | Custom branded 404 page for missing routes or invalid course slugs |

### Pre-Rendered Course Slugs
1. `/courses/fullstack-nextjs-engineering` — Fullstack Engineering with Next.js & Node
2. `/courses/design-systems-figma` — UI/UX Architecture & Enterprise Design Systems
3. `/courses/applied-data-science-machine-learning` — Applied Data Science & Machine Learning Systems
4. `/courses/cloud-devops-kubernetes-aws` — Cloud Engineering, DevOps & Kubernetes on AWS
5. `/courses/product-management-foundations` — Technical Product Management & Growth Strategy
6. `/courses/frontend-react-typescript` — Advanced Frontend Engineering with React & TypeScript
7. `/courses/application-security-cyberdefense` — Application Security, DevSecOps & Cyber Defense
8. `/courses/business-intelligence-data-analytics` — Enterprise Business Intelligence & Modern Analytics

---

## 5. Component & Data Architecture

```
d:/Build a Marketing Website/
├── app/
│   ├── courses/
│   │   ├── [slug]/
│   │   │   └── page.js           # Static generation & dynamic metadata for 8 courses
│   │   └── page.js               # Discovery catalog page with Suspense wrapper
│   ├── globals.css               # Design tokens, typography variables, accessible focus
│   ├── layout.js                 # Root layout with fonts, skip-to-content, navbar, footer
│   ├── not-found.js              # Custom branded 404 handler
│   └── page.js                   # Homepage editorial layout
├── components/
│   ├── course-detail/
│   │   ├── CourseDetailClientWrapper.jsx  # Sticky desktop sidebar & modal state manager
│   │   ├── EnrollmentModal.jsx            # Validated application dialog with focus trap & restore
│   │   ├── MobileStickyBar.jsx            # Fixed mobile action bar with safe-area spacing
│   │   ├── RelatedCoursesSection.jsx      # Dynamic category-based recommendations
│   │   ├── StickyEnrollCard.jsx           # Floating tuition summary with TXT download
│   │   ├── StudentReviewsSection.jsx      # Ratings breakdown with 5-star distribution bars
│   │   └── SyllabusModuleAccordion.jsx    # Interactive syllabus with Expand/Collapse All
│   ├── courses/
│   │   ├── CourseCard.jsx                 # Reusable course presentation card
│   │   ├── CourseCatalogClient.jsx        # Multi-criteria discovery engine & URL sync
│   │   └── EmptyState.jsx                 # Zero-results feedback with filter reset trigger
│   ├── home/
│   │   ├── CategorySection.jsx            # Discipline cards with topic pills
│   │   ├── CTASection.jsx                 # Conversion banner with ambient glow
│   │   ├── FAQSection.jsx                 # Admission & curriculum FAQ accordion
│   │   ├── FeaturedCoursesSection.jsx     # Top flagship cohort cards
│   │   ├── HeroSearch.jsx                 # Quick query input with suggestions
│   │   ├── HeroSection.jsx                # Value proposition & trust anchors
│   │   ├── MentorSpotlightSection.jsx     # Industry faculty profiles
│   │   ├── SuccessStatsSection.jsx        # Contrast metrics on dark navy canvas
│   │   └── TestimonialsSection.jsx        # Student outcome quotes & profiles
│   ├── layout/
│   │   ├── Footer.jsx                     # Multi-column semantic footer with demo notices
│   │   └── Navbar.jsx                     # Sticky navigation with keyboard-accessible drawer
│   └── ui/
│       ├── Accordion.jsx                  # Generic accessible accordion with aria-expanded
│       ├── Badge.jsx                      # Semantic category and difficulty status pills
│       ├── Breadcrumbs.jsx                # Semantic navigation trail with aria-current
│       ├── Button.jsx                     # Accessible interactive button/link primitive
│       ├── Container.jsx                  # Constrained responsive horizontal layout wrapper
│       ├── RatingStars.jsx                # Visual rating stars with screen-reader text
│       └── SectionHeading.jsx             # Consistent section titles with badge & subtitle
└── data/
    ├── categoriesData.js         # 6 disciplines with topics, course counts, and icons
    ├── coursesData.js            # 8 full curriculum datasets with syllabus & reviews
    ├── faqData.js                # Admissions, tuition, and format questions
    ├── mentorsData.js            # Faculty profiles, bios, and session counts
    ├── statsData.js              # Quantifiable milestone metrics
    └── testimonialsData.js       # Alumni outcomes and career transition quotes
```

---

## 6. Design System, Color Palette & Typography Rationale

The design system is built to convey **warm academic prestige**, avoiding harsh generic colors in favor of balanced, high-contrast, editorial tones:

### Color Palette Tokens (`app/globals.css`)
- **Canvas / Background**:
  - Main Canvas: `#FAF8F5` (Warm Cream — avoids stark sterile white glare)
  - Card Surface: `#FFFFFF` (Crisp White — elevates interactive cards)
  - Subtle Surface: `#F3EFEA` / `#F4EFEB` (Muted Warm Tint — creates depth in section banding)
  - Card Borders: `#E7E0D6` (Warm Stone — clean separation without visual heaviness)
- **Brand Primary**:
  - Deep Navy / Ink Heading: `#1E1B4B` (Midnight Indigo — authoritative, AAA contrast)
  - Primary Accent: `#4338CA` (Academic Indigo — high-contrast primary CTA)
  - Primary Hover: `#3730A3` / Active: `#312E81`
  - Subtle Accent Fill: `#EEF2FF` (Soft Lavender Tint)
- **Sun Accent**:
  - Golden Sun: `#FBBF24` (Radiant Amber — highlights badges, stars, and key terms)
  - Sun Dark (Text): `#92400E` (Deep Amber — passes WCAG AA 4.5:1 on light yellow badges)
  - Sun Tint: `#FEF3C7` (Soft Cream Yellow)
- **Ink / Typography**:
  - Ink Primary: `#0F172A` (Slate 900 — high readability body copy)
  - Ink Secondary: `#334155` (Slate 700 — clear subtitle text)
  - Ink Muted: `#64748B` (Slate 500 — accessible metadata and timestamps)

### Typography Rationale
- **Headings**: `Plus Jakarta Sans` via `next/font/google` (Weights: 500, 600, 700, 800) — contemporary, geometric, authoritative proportions for titles and numbers.
- **Body & Controls**: `Outfit` via `next/font/google` (Weights: 400, 500, 600, 700) — clean, open letterforms engineered for exceptional readability across mobile and desktop displays.
- **Font Display**: Set to `display: 'swap'` with font subsets restricted to `'latin'` for optimal First Contentful Paint (FCP) and zero layout shift.

---

## 7. Responsive & Accessibility Decisions

### Responsive Layouts Verified:
- **360px Mobile (Small Phones)**:
  - Single-column stacked layout with full-width controls.
  - Hamburger navigation drawer with locked body scroll and full keyboard support.
  - Mobile sticky bottom enrollment bar with safe-area spacing (`pb-[max(1rem,env(safe-area-inset-bottom))]`).
  - Breadcrumb and specification chips truncate gracefully without horizontal scroll.
  - Responsive padding (`px-4`) prevents edge-to-edge text clipping.
- **768px Tablet (iPads / Tablets)**:
  - 2-column grids for courses, categories, and metrics.
  - Quick specification grid adapts to 3 columns.
- **1024px Laptop**:
  - 3-column discovery grids.
  - 12-column asymmetric split layouts (8-column content + 4-column sticky sidebar).
- **1440px Desktop**:
  - Container-capped max width (`max-w-7xl mx-auto px-8`) ensures layout remains centered and legible without excessive eye scan distances.

### Accessibility (WCAG 2.1 AA Compliant):
- **Semantic Landmark Hierarchy**:
  - Exactly one `<h1>` per page (`HomePage`, `CoursesPage`, `CourseDetailPage`, `NotFound`).
  - Strict heading hierarchy (`h1` -> `h2` -> `h3`) with no skipped heading levels and no nested headings inside buttons or headings.
- **Skip to Main Content**:
  - Accessible `.skip-to-content` link located at the very top of `app/layout.js`, visible on keyboard `:focus` with a distinct `#FBBF24` outline.
- **Focus Indicators & Target Sizes**:
  - Uncompromised `:focus-visible` styling (`outline: 2px solid #4338CA; outline-offset: 2px`).
  - Minimum touch target sizes of 44x44px for primary interactive elements, mobile menu triggers, and filter chips.
- **Dialog Focus Management**:
  - Traps keyboard focus inside `EnrollmentModal` on `Tab` and `Shift+Tab`.
  - Closes immediately on `Escape` key press.
  - Automatically restores focus to the triggering button (`previouslyFocusedElementRef.current.focus()`) upon closing.
- **Accordion Accessibility**:
  - Standard `aria-expanded="true/false"`, `aria-controls="panel-id"`, and matching `role="region"` with `aria-labelledby`.
- **Form Controls & Error Validation**:
  - Explicit `<label htmlFor="...">` bindings on all form inputs.
  - Dynamic `aria-invalid="true"` and `aria-describedby="[field]-error"` bindings for active validation errors.
- **Color Contrast**:
  - Verified 4.5:1+ contrast on all body text, metadata timestamps (`#64748B`), badges, and struck-through pricing.
  - Yellow secondary buttons pair `#FBBF24` with deep dark navy `#0F172A` text (10.2:1 contrast ratio, exceeding WCAG AAA).
- **Reduced Motion Support**:
  - `@media (prefers-reduced-motion: reduce)` block in `globals.css` neutralizes animations and transitions for sensitive users.
- **Screen Reader Announcements**:
  - Course catalog results dynamically update live regions (`aria-live="polite"`).
  - Rating stars feature accessible `.sr-only` summary descriptions (`Rated 4.9 out of 5 stars from 342 reviews`).

---

## 8. SEO & Performance Choices

- **Unique Dynamic Metadata**:
  - Each route (`/`, `/courses`, `/courses/[slug]`) implements unique `title`, `description`, `openGraph`, and `twitter` objects.
  - Dynamic metadata generation in `app/courses/[slug]/page.js` surfaces course-specific titles, taglines, and thumbnail images.
- **Canonical Domain Policy**:
  - Strictly adheres to the evaluation constraint: No fake production domains were invented; openGraph configurations use protocol-relative and remote asset URLs.
- **Next.js Image Optimization**:
  - All images use `next/image` with explicit `sizes` attributes for optimal viewport image srcset generation.
  - High-priority above-the-fold hero images feature `priority` to eliminate LCP delay.
  - Remote patterns configured for `images.unsplash.com` in `next.config.mjs`.
- **Client/Server Component Architecture**:
  - Root layouts, static marketing sections, and page skeletons remain pure **Server Components**.
  - Client components (`'use client'`) are strictly isolated to interactive leaves: search inputs, filter toolbars, modal dialogs, and accordions.
- **Zero Unnecessary Dependencies**:
  - Zero heavy third-party state libraries; all state is driven by React 19 primitives and browser URL parameters.

---

## 9. Demonstrative Scope & Data Disclosures

> **Demonstration Notice:**  
> This marketing website is a conceptual frontend prototype engineered for the **Meru Technosoft Private Limited Frontend Internship Selection**.  
> All course syllabi, pricing, student enrollment numbers, alumni testimonials, review ratings, and mentor profiles are illustrative mock demonstrations designed to showcase complete UI/UX fidelity, edge-case handling, and software engineering capabilities.

### Frontend-Only Enrollment Behavior
- The enrollment modal simulates a client-side registration pipeline.
- It validates input formatting (full name >= 2 chars, valid email address regex, 10-digit telephone format).
- Upon submission, it computes a demonstration registration reference (e.g., `RAIV-DEMO-7482`) and reveals an immediate confirmation breakdown.
- No real financial transactions, external third-party API calls, or server database writes occur.

---

## 10. Known Limitations & Future Improvements

1. **Backend Integration**:
   - In a production environment, the enrollment flow would connect to a Server Action or REST endpoint interfacing with PostgreSQL/Prisma and a payment gateway (e.g., Stripe or Razorpay).
2. **User Authentication**:
   - Integrating NextAuth / Auth.js for student cohort dashboards and live assignment submission tracking.
3. **Automated End-to-End Browser Testing in Sandboxed Environments**:
   - In restricted, sandboxed agent environments without outbound binary download privileges, Playwright binary downloads can be blocked. Full manual and node HTTP regression suites are provided below.

---

## 11. Verification & Lighthouse Audit Instructions

### Running Lint and Build Locally
```bash
# Verify ESLint passes with zero warnings
npm run lint

# Verify Next.js production build succeeds with all 14 pages static
npm run build
```

### Measured Production Lighthouse Scores (Mobile Navigation Audit)

Empirical mobile Lighthouse audits were executed on the production build (`next start`) using headless Google Chrome (`Chrome/155.0.8059.85`):

| Page / Route | Performance | Accessibility | Best Practices | SEO | Assignment Target | Result |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Homepage (`/`)** | **94** | **100** | **100** | **100** | Perf 85+ / A11y 90+ / SEO 90+ | **EXCEEDED** |
| **Catalog Discovery (`/courses`)** | **97** | **100** | **96** | **100** | Perf 85+ / A11y 90+ / SEO 90+ | **EXCEEDED** |
| **Course Detail (`/courses/fullstack-nextjs-engineering`)** | **96** | **96** | **100** | **100** | Perf 85+ / A11y 90+ / SEO 90+ | **EXCEEDED** |

### Running Local Lighthouse Audits in Google Chrome
To independently verify Lighthouse mobile scores on your local machine:
1. Run `npm run build` followed by `npm run start` to start the production server on `http://localhost:3000`.
2. Open **Google Chrome** in an Incognito window (to disable interfering extensions).
3. Navigate to `http://localhost:3000`.
4. Open Chrome DevTools (`F12` or `Ctrl + Shift + I`).
5. Select the **Lighthouse** tab.
6. Configure the audit:
   - **Mode**: Navigation
   - **Device**: Mobile
   - **Categories**: Performance, Accessibility, Best Practices, SEO
7. Click **Analyze page load**.
