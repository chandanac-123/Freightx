"use client";
import { AiOutlineCaretDown } from "react-icons/ai";

import React, { useState } from "react";

// Sample data for the sections
const sectionsData = [
  {
    id: "section1",
    title: "Air Freight USA",
    content: `Time is everything in air freight. From enquiry to final delivery, our dedicated team ensures fast and compliant execution.`,
    points: [
      "Pharma & temperature-controlled cargo",
      "Dry ice packing & special handling",
      "Dangerous goods handling",
      "Oversized cargo for freighters & charters",
      "Competitive inland trucking and carrier selection",
    ],
  },
  {
    id: "section2",
    title: "Ocean Freight USA",
    content: `With the U.S. ranked as the second-largest exporter, ocean freight is a vital part of global trade. Fx delivers seamless ocean solutions under strict neutrality.`,
    points: [
      "FCL (Full Container Load) & LCL (Less Container Load)",
      "Break Bulk & Ro-Ro shipments",
      "Spot rates & special contract pricing",
      "Competitive inland trucking and cargo insurance",
      "Complete protection of client information",
    ],
  },
  {
    id: "section3",
    title: "Land Transport USA",
    content: `Nationwide trucking solutions with flexibility and safety.`,
    points: [
      "Full truckload (FTL) & less-than-truckload (LTL)",
      "Oversized & hazardous cargo transport",
      "Specialized trailers (flatbed, modular, extendable)",
      "Door-to-door delivery across the U.S.",
    ],
  },
  {
    id: "section4",
    title: "Projects & Heavy Cargo",
    content: `Expert handling of large-scale industrial and project cargo.`,
    points: [
      "Oil & Gas, Manufacturing, and Infrastructure support",
      "Site visits, permits, and secure lashing/belting",
      "Customs & insurance guidance",
      "24/7 dedicated project support",
    ],
  },
  {
    id: "section5",
    title: "Warehousing & Storage",
    content: `Safe and flexible storage solutions for freight forwarders.`,
    points: [
      "DG & municipality-approved facilities",
      "Free Zone & bonded warehousing",
      "Short- & long-term storage options",
      "Seamless transfers from ports and airports",
    ],
  },
  {
    id: "section6",
    title: "Customs Clearance USA",
    content: `Hassle-free customs brokerage to keep your supply chain moving.`,
    points: [
      "Import/export documentation",
      "U.S. compliance and regulatory support",
      "Faster clearance, reduced delays",
    ],
  },
  {
    id: "section7",
    title: "3PL Logistics",
    content: `Integrated third-party logistics services across the U.S.`,
    points: [
      "Warehousing, inventory, and distribution",
      "End-to-end supply chain management",
      "Scalable and cost-efficient solutions",
    ],
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
                <h1 className="flex-[.6] text-xl font-semibold">
                  {section.title}
                </h1>
                <div
                  className={`flex-1 transition-all pb-4 overflow-hidden duration-700 ${
                    openSection === section.id
                      ? "max-h-screen"
                      : "md:max-h-10 max-h-10"
                  }`}
                >
                  <p className="text-sm font-medium mb-6 md:mb-10">
                    {section.content.split("\n")[0]}
                  </p>
                  {/* Bullet Points (Only if they exist) */}
                  {section.points && section.points.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                      {section.points.map((point, index) => (
                        <li key={index} className="pl-1">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
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
