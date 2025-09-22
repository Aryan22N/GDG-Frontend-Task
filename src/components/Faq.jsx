"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Meteors } from "../components/ui/meteors";

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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`relative overflow-hidden py-16 transition-colors duration-500 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background meteors */}
      {resolvedTheme === "dark" && <Meteors number={30} />}

      <div className="relative container mx-auto px-4 mb-17 max-w-2xl">
        <h2
          className={`text-5xl font-bold text-center mb-19 transition-colors duration-500 ${
            resolvedTheme === "dark" ? "text-gray-200" : "text-[#5F5F5F]"
          }`}
        >
          FAQs
        </h2>

        <div className="space-y-12">
          {faqData.map((item, index) => (
            <div key={index} className="relative">
              {/* Question */}
              <div
                className={`relative flex gap-4 items-center p-6 cursor-pointer rounded-full shadow-lg border-[12px] transition-colors duration-500 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
                onClick={() => toggleFaq(index)}
              >
                {/* Local meteors effect */}
                <Meteors number={15} />

                <FaChevronDown
                  style={{ color: item.color }}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
                <h3
                  className={`text-xl font-bold w-full transition-colors duration-500 ${
                    resolvedTheme === "dark"
                      ? "text-gray-200"
                      : "text-[#5F5F5F]"
                  }`}
                >
                  {item.question}
                </h3>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-6" : "max-h-0 mt-0"
                }`}
              >
                <div className="flex items-stretch relative">
                  {/* Colored left bar */}
                  <div
                    style={{ backgroundColor: item.color }}
                    className="w-3 rounded-l-2xl"
                  ></div>

                  {/* Answer box */}
                  <div
                    style={{ borderLeftColor: item.color }}
                    className={`relative p-6 shadow-md border-[12px] border-l-4 rounded-r-2xl flex-1 transition-colors duration-500 ${
                      resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    {/* Local meteors inside answer */}
                    <Meteors number={15} />
                    <p
                      className={`text-[19px] transition-colors duration-500 ${
                        resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-[#5F5F5F]"
                      }`}
                    >
                      {item.answer}
                    </p>
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
