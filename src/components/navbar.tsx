"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

export const navList = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "about",
    link: "#about",
  },
  {
    name: "project",
    link: "#projects",
  },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const path = usePathname();
  return (
    <>
      <div className="left-0 right-0 fixed top-0  z-10 bg-white  boxShadow">
        <div className="container   flex justify-between items-center py-[20px] px-[20px] ">
          <Link href={"/"}>
            <Image src={"/logo.jpg"} height={30} width={40} alt="logo" />
          </Link>

          <div className="flex items-center gap-10 max-md:hidden ">
            {navList.map((i, key) => (
              <Link
                href={path !== "/" ? `/${i.link}` : i.link}
                key={key}
                className="font-medium text-[15px] font-poppins capitalize text-dark/50 hover:text-dark navlink "
              >
                {i.name}
              </Link>
            ))}

            <Button asChild className="h-[50px] px-5 font-medium font-poppins ">
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>

          <div className="hidden max-md:block cursor-pointer">
            <FiMenu className="text-[23px]" onClick={() => setOpenNav(true)} />
          </div>
        </div>
      </div>

      {openNav && <MobileNav open={openNav} onOpenChange={setOpenNav} />}
    </>
  );
};

export default Navbar;
