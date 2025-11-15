"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4682B4] via-[#4169E1] to-[#00FFFF]">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Eldhose George",
                1000,

                "Web Developer",
                1000,

                "Game Developer",
                1000,

                "Mobile Developer",
                1000,

                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-white font-extrabold "
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Driven by curiosity and creativity, I combine technical skills with
            design thinking to deliver meaningful digital experiences that make
            an impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-br from-[#4682B4] via-[#4169E1] to-[#00FFFF] hover:bg-cyan-400 text-white transition-all duration-300 ease-in-out">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-[#4682B4] via-[#4169E1] to-[#00FFFF] hover:bg-cyan-600 text-white transition-all duration-300 ease-in-out">
              <span className="block bg-[#121212] hover:bg-cyan-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        {/* Right Section - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
  <div className="pt-24 flex justify-center">
  <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] group transition-transform duration-700 ease-in-out hover:scale-105 hover:rotate-[0.5deg]">

    {/* Pulsing Gradient Halo (Outer Glow) */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 opacity-30 blur-2xl scale-110 animate-pulse-slow" />

    {/* Gradient Border Ring with Subtle Glow */}
    <div className="absolute inset-[6px] md:inset-[10px] lg:inset-[12px] rounded-full bg-gradient-to-br from-blue-900/40 via-sky-500/10 to-transparent backdrop-blur-lg border-[3px] md:border-[4px] lg:border-[5px] border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-700 ease-in-out" />

    {/* Soft Background Blur Ring */}
    <div className="absolute inset-6 md:inset-8 lg:inset-10 rounded-full bg-gradient-to-tr from-slate-900/80 to-slate-800/60 blur-sm" />

    {/* Profile Image */}
    <div className="relative z-10 w-full h-full rounded-full overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/30 group-hover:shadow-xl">
      <Image
        src="/images/h.png"
        alt="Profile Picture"
        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        fill
        priority
      />
    </div>

  </div>
</div>





        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
