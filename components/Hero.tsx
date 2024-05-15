import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('/assets/hero.webp')] relative">
      <h1 className="absolute bottom-10 left-0 right-0 text-center font-extrabold text-5xl uppercase max-md:text-4xl max-sm:text-3xl">
        Current Leaderboard
      </h1>
    </div>
  );
};

export default Hero;
