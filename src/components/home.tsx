import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Home_section = () => {
  return (
    <div className="flex h-[750px] items-center justify-between bg-home_bg bg-cover bg-center relative before:absolute before:size-full before:bg-[#043145]/70 before:z-[-1] z-[1] sm:h-screen">
      {/* txt */}

      <div className="container mt-[200px] max-md:mt-[150px]">
        <p className="text-primary font-pacifico font-semibold text-[20px] text-center md:text-[25px]">
          Hi, I am
        </p>
        <h1 className="font-extrabold text-[40px] capitalize text-center text-white md:text-[50px]">
          Nduka Victor
        </h1>
        <p className="  pt-[10px] text-[17px] leading-[30px] w-full max-w-[800px] text-center text-white/80 mx-auto md:text-[20px]">
          A passionate UI/UX designer creating intuitive and engaging digital
          experiences that blend creativity with functionality.
        </p>

        <div className="mt-6 flex justify-center">
          <Button className="hover:bg-white hover:text-dark w-full max-w-[200px] text-[15px] ">
            Hire me
          </Button>
        </div>

        <div className="flex items-center justify-center mt-12 gap-10">
          <Link
            href="#"
            target="_blank"
            className="text-white text-[25px] hover:text-primary"
          >
            <FaInstagram />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="text-white text-[25px] hover:text-primary"
          >
            <CiLinkedin />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="text-white text-[20px] hover:text-primary"
          >
            <FaXTwitter />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="text-white text-[24px] hover:text-primary"
          >
            <CiMail />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home_section;
