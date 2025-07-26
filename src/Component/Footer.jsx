import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-[#00856f] text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Info */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl font-bold">
            DoctorCare
          </h2>
          <p className="text-sm">©2025 - DoctorCare.</p>
          <p className="text-sm">Todos os direitos reservados.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="Instagram">
            <FaSquareInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookSquare />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
