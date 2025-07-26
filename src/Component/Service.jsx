import React from "react";
import Icon from "../assets/service-icon.png"; // your check icon

const ServiceList = [
  {
    id: 1,
    title: "Digestive problems",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    icon: Icon,
  },
  {
    id: 2,
    title: "Hormonal Health",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    icon: Icon,
  },
  {
    id: 3,
    title: "Mental well-being",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    icon: Icon,
  },
  {
    id: 4,
    title: "Pediatric Care",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    icon: Icon,
  },
  {
    id: 5,
    title: "Autoimmune and Inflammation",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    icon: Icon,
  },
  {
    id: 6,
    title: "Heart Health",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    icon: Icon,
  },
];

const Service = () => {
  return (
    <div className="bg-gray-100" id="services">
      <div className="container mx-auto px-4 py-16 pt-30 ">
        {/* Section title */}
        <div className="text-center mb-12">
          <p className="text-xl text-[#00856f] font-medium">Service</p>
          <h2 className="text-4xl font-semibold mt-2">
            How can we help you feel better?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {ServiceList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 space-y-3 hover:shadow-lg transition hover:scale-[1.03] duration-300"
            >
              <img src={service.icon} alt="Check Icon" className="w-6 h-6" />
              <h3 className="text-xl font-semibold text-[#0b0a0a]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
