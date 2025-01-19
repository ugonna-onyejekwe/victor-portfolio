import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquarePhone, FaXTwitter } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-[100px] max-md:mt-[80px]" id="contact">
      <div className="bg-[#e5ecec] py-20">
        <div className="container">
          <h1 className="font-extrabold text-center text-[40px] max-md:text-[30px] uppercase">
            Let's talk
          </h1>

          <div className="flex flex-wrap gap-7 justify-center mt-8  items-center max-sm:gap-3 max-sm:mt-5">
            <Link
              href=""
              className="flex-1 flex items-center gap-4 text-center border border-dark/50  p-5 px-7 rounded-full font-bold hover:border-primary hover:text-primary max-w-[300px] max-sm:max-w-full justify-center whitespace-nowrap  max-sm:py-4"
            >
              Write a message
              <span className=" text-[25px]">
                <IoMdMailUnread />
              </span>
            </Link>
            <Link
              href=""
              className="flex-1 flex items-center gap-4  max-sm:py-4 text-center border border-dark/50  p-5 px-7  rounded-full font-bold hover:border-primary hover:text-primary max-w-[300px] max-sm:max-w-full justify-center whitespace-nowrap "
            >
              {" "}
              Discuss project
              <span className=" text-[25px]">
                <BsWhatsapp />
              </span>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-4 gap-12 max-sm:grid-cols-2">
            <Link
              href={"#"}
              className="flex items-center gap-3 justify-between border-b  border-dark/50 pb-1 hover:border-primary  hover:text-primary"
            >
              <span className=" font-bold text-[15px]">Linkedin</span>

              <FaLinkedin className="text-[24px] " />
            </Link>

            <Link
              href={"#"}
              className="flex items-center gap-3 justify-between border-b  border-dark/50 pb-1 hover:border-primary  hover:text-primary"
            >
              <span className=" font-bold text-[15px]">Twitter</span>

              <FaXTwitter className="text-[24px] " />
            </Link>

            <Link
              href={"#"}
              className="flex items-center gap-3 justify-between border-b  border-dark/50 pb-1 hover:border-primary  hover:text-primary"
            >
              <span className=" font-bold text-[15px]">Instagram</span>

              <FaInstagram className="text-[24px] " />
            </Link>

            <Link
              href={"#"}
              className="flex items-center gap-3 justify-between border-b  border-dark/50 pb-1 hover:border-primary  hover:text-primary"
            >
              <span className=" font-bold text-[15px]">Call me</span>

              <FaSquarePhone className="text-[24px] " />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-5 bg-white/80">
        <p className="text-center">&copy; Victor - 2025. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
