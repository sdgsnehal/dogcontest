import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex  justify-evenly align-middle max-sm:flex-col">
        <Link href="/">
          <Image src="/assets/TopDog.png" alt="logo" width={180} height={100} />
        </Link>
        <h1>Presented By</h1>
        <Link href="/">
          <Image src="/assets/center.png" alt="logo" width={180} height={100} />
        </Link>
        <h1>Fleet & Farm</h1>
        <div>
          <FaFacebook />
          <FaInstagramSquare />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
