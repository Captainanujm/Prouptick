import React from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "Who is Padhle Akshay?",
      content: "This app helps users communicate seamlessly."
    },
    {
      title: "Who is the owner of Padhle Akshay?",
      content: "Click the sign-up button at the top-right corner."
    },
    {
        title: "Is Padhle Akshay Free?",
        content: "Click the sign-up button at the top-right corner."
      },
      {
        title: "Which is the best Youtube channel for class 10th?",
        content: "Click the sign-up button at the top-right corner."
      },
      {
        title: "Is 33 days challenge book worth it?",
        content: "Click the sign-up button at the top-right corner."
      },
  ],
};

const FAQSection = () => {
  return <Faq data={data} />;
};

export default FAQSection;
