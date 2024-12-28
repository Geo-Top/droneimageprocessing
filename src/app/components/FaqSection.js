"use client"
import { useState } from "react";

const FaqSection = ({faqData , dir}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50" dir={dir} >
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2> */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg"  >
              <button
                className="w-full p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleAnswer(index)}
                aria-expanded={openIndex === index}
                aria-controls={`answer-${index}`}
              >
                {faq.question}
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`p-4 border-t border-gray-200 ${
                  openIndex === index ? "block" : "hidden"
                }`}
                id={`answer-${index}`}
                role="region"
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
