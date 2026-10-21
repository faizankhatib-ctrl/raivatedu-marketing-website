import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import { homeFaqs } from "@/data/faqData";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-[#F4EFEB]/40 border-t border-[#E7E0D6] scroll-mt-24">
      <Container>
        <SectionHeading
          badge="Got Questions?"
          badgeVariant="indigo"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about cohort schedules, time commitment, 1:1 mentorship reviews, and demonstration scope."
          align="center"
        />

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E0D6] shadow-sm">
          <Accordion items={homeFaqs} defaultOpenIndex={0} allowMultiple={false} />
        </div>
      </Container>
    </section>
  );
}
