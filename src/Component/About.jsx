import React from "react";
import HeroImage from "../assets/about.png";

const Hero = () => {
  return (
    <section className="bg-[#fffaf1] py-10" id="on">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={HeroImage}
            alt="Hero Banner"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-2 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-[#00856f] font-semibold text-lg">ABOUT US</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
            Understand who we are and why we exist
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
