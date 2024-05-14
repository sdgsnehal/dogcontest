import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image src="/assets/hero.webp" alt="hero" width={100} height={100}/>
    </div>
  );
};

export default Hero;
