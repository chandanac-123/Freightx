"use client";
import { BiCheckCircle } from "react-icons/bi";
import {
  FaPlane,
  FaShip,
  FaTruck,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const services = [
  {
    title: "Air Freight USA",
    icon: FaPlane,
    content:
      "Time is everything in air freight. From enquiry to final delivery, our dedicated team ensures fast and compliant execution.",
    points: [
      "Pharma & temperature-controlled cargo",
      "Dry ice packing & special handling",
      "Dangerous goods handling",
      "Oversized cargo for freighters & charters",
      "Competitive inland trucking and carrier selection",
    ],
  },
  {
    title: "Ocean Freight USA",
    icon: FaShip,
    content:
      "With the U.S. ranked as the second-largest exporter, ocean freight is a vital part of global trade.",
    points: [
      "FCL & LCL shipments",
      "Break Bulk & Ro-Ro shipments",
      "Spot rates & special contract pricing",
      "Cargo insurance",
      "Complete protection of client information",
    ],
  },
  {
    title: "Land Transport USA",
    icon: FaTruck,
    content:
      "Nationwide trucking solutions with flexibility, efficiency and safety.",
    points: [
      "FTL & LTL transport",
      "Oversized cargo transport",
      "Specialized trailers",
      "Door-to-door delivery",
    ],
  },
  {
    title: "Customs Clearance USA",
    icon: FaFileInvoiceDollar,
    content:
      "Hassle-free customs brokerage to keep your supply chain moving.",
    points: [
      "Import/export documentation",
      "Regulatory compliance support",
      "Faster clearance process",
    ],
  },
];


const Services = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container max-w-screen-desktop mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest ">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-sora">
            Reliable Logistics Solutions
          </h2>

          <p className="text-gray-500 max-w-3xl text-lg mx-auto mt-6 font-inter">
            End-to-end freight forwarding, transportation, and customs
            solutions designed to move your cargo efficiently across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-gray-200 bg-white hover:bg-surface-primary hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-primary/10 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="text-2xl font-bold mb-4 font-sora">
                  {service.title}
                </h3>

                <p className="mb-8 opacity-80 font-inter">
                  {service.content}
                </p>

                <ul className="space-y-4">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <BiCheckCircle className="min-w-5 mt-0.5 text-green-500  group-hover:text-white" />
                      <span className="font-inter">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
