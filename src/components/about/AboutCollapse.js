"use client";
import { AiOutlineCaretDown } from "react-icons/ai";

import React, { useState } from "react";

// Sample data for the sections
const sectionsData = [
  {
    id: "section1",
    title: "Business Events",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Providing an independent advice and identifying the right fit adipiselit,
              tempor incididunt ut labore et dolore magna al veniam, quis nostrud exercitation lorem ipsum.`,
  },
  {
    id: "section2",
    title: "Development & Transport",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Providing an independent advice and identifying the right fit adipiselit,
              tempor incididunt ut labore et dolore magna al veniam, quis nostrud exercitation lorem ipsum.consectetur adipiscing elit.
              Providing an independent advice and identifying the right fit adipiselit,
              tempor incididunt ut labore et dolore magna al veniam, quis nostrud exercitation lorem ipsum.`,
  },
  {
    id: "section3",
    title: "Analysis",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Providing an independent advice and identifying the right fit adipiselit,
              tempor incididunt ut labore et dolore magna al veniam, quis nostrud exercitation lorem ipsum.consectetur adipiscing elit.
              Providing an independent.`,
  },
  {
    id: "section4",
    title: "Security for Cargo",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Providing an independent advice and identifying the right fit adipiselit,
              tempor incididunt ut labore et.`,
  },
];

const AboutCollapse = () => {
  // State to track which section is open
  const [openSection, setOpenSection] = useState(null);

  // Function to handle collapse toggle
  const toggleCollapse = (sectionId) => {
    setOpenSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  return (
    <div className="bg-surface-primary w-full py-24">
      <div className="container max-w-screen-desktop">
        <div className="w-full text-lg py-4 border-b text-white font-normal justify-between flex items-center gap-12">
          <h1 className="flex-[.6]">Services</h1>
          <p className="flex-1">Solutions</p>
          <div className="invisible">ds</div>
        </div>

        <div>
          {sectionsData.map((section) => (
            <div
              key={section.id}
              className={`w-full border-b-[0.5px] border-surface-border py-6 custom-collapse transition-all text-white font-normal justify-between flex gap-12 ${
                openSection === section.id ? "border-b" : ""
              }`}
            >
              <div className="justify-between flex  gap-4 md:gap-12 w-full flex-col md:flex-row">
                <h1 className="flex-[.6] text-3xl font-semibold">
                  {section.title}
                </h1>
                <div
                  className={`flex-1 transition-all pb-4 overflow-hidden duration-700 ${
                    openSection === section.id
                      ? "max-h-screen"
                      : "md:max-h-8 max-h-10"
                  }`}
                >
                  <p className="text-sm font-normal mb-6 md:mb-10">
                    {section.content.split("\n")[0]}
                  </p>
                  <p className="text-sm font-normal max-w-[450px]">
                    {section.content}
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleCollapse(section.id)}
                className="h-4 btn"
              >
                <AiOutlineCaretDown
                  className={` transition-all ${
                    openSection === section.id ? "-rotate-90" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCollapse;
