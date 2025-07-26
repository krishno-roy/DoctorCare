import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import HeroImage from "../assets/hero-banner.png";
import Sucess from "./Sucess";

const Hero = () => {
  return (
    <section className="bg-[#dbe8e1] py-10 relative" id="start">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-[#00856f] font-semibold text-lg">
            WELCOME TO DOCTORCARE 👋
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Simplified healthcare for everyone
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            DoctorCare doctors go beyond symptoms to treat the root cause of
            your illness and provide long-term healing.
          </p>
          <button className="inline-flex items-center gap-3 py-3 px-6 text-white rounded-full bg-[#00856f] hover:bg-[#007562] transition">
            <RiWhatsappFill className="text-xl" />
            Schedule your appointment
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={HeroImage}
            alt="Hero Banner"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
      </div>

      {/* Sucess Section positioned absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-70px] w-full px-4 z-10">
        <Sucess />
      </div>
    </section>
  );
};

export default Hero;
