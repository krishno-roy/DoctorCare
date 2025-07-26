import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#dbe8e1] ">
      <header className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
            Doctor <span className="text-red-600">Care</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-semibold cursor-pointer">
          <li onClick={() => scrollToSection("start")}>Start</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("on")}>On</li>
          <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-[#00856f] px-5 py-3 rounded-full text-white hover:bg-[#007562] transition">
            Schedule an appointment
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#dbe8e1] px-6 pb-4 space-y-4">
          <ul className="flex flex-col gap-4 text-base font-semibold cursor-pointer">
            <li onClick={() => scrollToSection("start")}>Start</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("on")}>On</li>
            <li onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </li>
          </ul>
          <button className="w-full bg-[#00856f] px-5 py-3 rounded-full text-white hover:bg-[#007562] transition">
            Schedule an appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
