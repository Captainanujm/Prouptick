import React, { useState } from "react";
import "./FAquestions.css"; // Import your CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is Padhle Akshay?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Who is the owner of Padhle Akshay?",
      answer: "A component is a reusable piece of UI.",
    },
    {
      question: "Is Padhle Akshay free?",
      answer: "JSX is a syntax extension for JavaScript.",
    },
    {
      question: "Which is the best youtube channel for class 10th?",
      answer: "JSX is a syntax extension for JavaScript.",
    },
    {
      question: "Is 33 Days book challenge worth it?",
      answer: "JSX is a syntax extension for JavaScript.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="question-arrow">
            <div className="faq-question">{faq.question}</div>
            <div className="faq-arrow">
                {activeIndex === index ? "▲" : "▼"}
              </div>
            </div>
          {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
