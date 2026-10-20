"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
    <button
      type="button"
      className="faq-question"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      <span>{question}</span>
      <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
    </button>

    {isOpen && (
    <div className="faq-answer">
        <p>{answer}</p>
    </div>
    )}
    </div>
  );
}