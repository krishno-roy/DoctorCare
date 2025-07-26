import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import HeroImage from "../assets/contact.png";
const Hero = () => {
  return (
    <section
      className="bg-gray-100 py-10 relative min-h-screen flex justify-center"
      id="testimonials"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-[#00856f] font-semibold text-lg">Contact Us</p>
          <p className="text-base sm:text-lg text-gray-700">
            {" "}
            Address: R. Amauri Souza, 346
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            E-mail: contato@doctorcare.com
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
    </section>
  );
};

export default Hero;
