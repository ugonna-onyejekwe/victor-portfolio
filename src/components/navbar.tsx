import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const navList = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "about",
      link: "#about",
    },
    {
      name: "project",
      link: "#project",
    },
    {
      name: "contact",
      link: "#contact",
    },
  ];

  return (
    <div className="left-0 right-0 fixed top-0 pt-3">
      <div className="container  bg-white rounded-xl boxShadow flex justify-between items-center py-[20px] px-[20px] ">
        <Link href={"#"}>
          <Image src={"/logo.jpg"} height={30} width={40} alt="logo" />
        </Link>

        <div className="flex items-center gap-10 max-md:hidden ">
          {navList.map((i, key) => (
            <Link
              href={i.link}
              key={key}
              className="font-medium text-[16px] font-poppins capitalize text-dark/50 hover:text-dark navlink last:bg-primary last:text-white last:px-5 last:py-3 last:rounded-md last:text-[15px] last:hover:text-white"
            >
              {i.name}
            </Link>
          ))}
        </div>

        <div className="hidden max-md:block cursor-pointer">
          <HiOutlineMenuAlt3 className="text-[23px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
