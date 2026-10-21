import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Raivatedu — Modern Online Education & Mentorship Platform",
    template: "%s | Raivatedu",
  },
  description:
    "Master in-demand tech and design skills with industry-standard cohort curriculums, hands-on projects, and 1:1 mentorship guidance.",
  keywords: [
    "education",
    "learning platform",
    "courses",
    "mentorship",
    "web development",
    "UI UX design",
    "data science",
  ],
  authors: [{ name: "Raivatedu Engineering" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raivatedu.vercel.app",
    siteName: "Raivatedu",
    title: "Raivatedu — Modern Online Education & Mentorship Platform",
    description:
      "Master in-demand tech and design skills with industry-standard cohort curriculums, hands-on projects, and 1:1 mentorship guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raivatedu — Modern Online Education & Mentorship Platform",
    description:
      "Master in-demand tech and design skills with industry-standard cohort curriculums, hands-on projects, and 1:1 mentorship guidance.",
  },
};

export const viewport = {
  themeColor: "#1E1B4B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#0F172A]">
        {/* Accessible Skip to Content Link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Global Shared Sticky Header */}
        <Navbar />

        {/* Main Route Content Wrapper */}
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Shared Multi-Column Footer */}
        <Footer />
      </body>
    </html>
  );
}
