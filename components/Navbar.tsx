import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex  justify-evenly max-sm:flex-col max-md:flex-col max-sm:items-center items-center">
        <Link href="/">
          <Image src="/assets/TopDog.png" alt="logo" width={180} height={100} />
        </Link>
        <h1 className="font-bold text-2xl">Presented By</h1>
        <Link href="/">
          <Image src="/assets/center.png" alt="logo" width={180} height={100} />
        </Link>
        <h1 className="font-bold text-3xl">Fleet & Farm</h1>
        <div className="flex justify-evenly max-sm:m-10">
          <FaFacebook className="w-10 h-10" />
          <FaInstagramSquare className="w-10 h-10" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
