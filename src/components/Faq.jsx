"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is GDG?",
    color: "#EF4444", // red
    answer:
      "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
  },
  {
    question: "How can you become a part of GDG?",
    color: "#10B981", // green
    answer:
      "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two-step process involving form filling and personal interview. Students acing both rounds are selected to be part of the core team.",
  },
  {
    question: "What does a GDG Lead do?",
    color: "#3B82F6", // blue
    answer:
      "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
  },
  {
    question: "How is DSC related to Google?",
    color: "#FACC15", // yellow
    answer:
      "DSC (Developer Student Clubs) are Google-supported community groups for students. They help in learning and building projects using Google technologies.",
  },
  {
    question: "How to reach us?",
    color: "#EF4444", // red
    answer: `Mail us at dsc.rknec@gmail.com`,
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-5xl font-bold text-center text-[#5F5F5F] mb-12">
          FAQs
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index}>
              {/* Question */}
              <div
                className="flex gap-4 items-center p-6 cursor-pointer bg-white rounded-full shadow-lg border border-gray-200"
                onClick={() => toggleFaq(index)}
              >
                <FaChevronDown
                  style={{ color: item.color }}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
                <h3 className="text-xl font-bold w-full text-[#5F5F5F]">
                  {item.question}
                </h3>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-6" : "max-h-0 mt-0"
                }`}
              >
                <div className="flex items-stretch">
                  {/* Colored left bar */}
                  <div
                    style={{ backgroundColor: item.color }}
                    className="w-3 rounded-l-2xl"
                  ></div>

                  {/* Answer box with colored border */}
                  <div
                    style={{ borderLeftColor: item.color }}
                    className="p-6 shadow-md bg-gray-50 border-l-4 rounded-r-2xl flex-1"
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
