import Link from "next/link";
import FAQItem from "../components/FAQItem";
import { faqItems } from "@/data/faq";

export default function FAQPage() {
  return (
    <main className="faq-page">
      <section className="faq-hero">
        <span className="faq-decoration">୨୧ ♡ ୨୧</span>

        <h1>Frequently Asked Questions</h1>

        <p>
          Everything you need to know about our little corner of sweetness.
        </p>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <span className="faq-label">♡ JUST FOR YOU</span>

          <h2>Got Questions?</h2>

          <p>
            We have answers to make your visit a little sweeter.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>

      <section className="faq-closing">
        <span className="faq-closing-icon">♡</span>

        <h2>Still Have Questions?</h2>

        <p>We would love to hear from you!</p>

        <Link href="/contact" className="faq-contact-button">
          Contact Us ♡
        </Link>
      </section>
    </main>
  );
}