import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <div className="container mt-[100px] max-sm:mt-[70px]" id="projects">
      <p className="text-primary font-pacifico text-[18px] text-center w-full">
        Explore my amazing projects
      </p>
      <h2 className="font-extrabold mt-2 uppercase text-[40px] text-center  leading-[43px] max-md:text-[30px] w-full">
        My projects
      </h2>

      {/* projects */}
      <div className="mt-8 grid grid-cols-2 max-sm:grid-cols-1 gap-[40px]">
        {projects.slice(0, 6).map((i, key) => (
          <div>
            <div className="bg-primary/5 w-full aspect-[2/1.5]  overflow-hidden ">
              <Image
                height={1000}
                width={1000}
                alt={i.name}
                src={i.image}
                className="size-full"
              />
            </div>

            {/* txt */}
            <div className="mt-4 ">
              <h2 className="font-bold text-[20px] capitalize">{i.name}</h2>
              <p className="txt mt-2">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-7">
        <Button asChild>
          <Link href={"/projects"}>Explore more</Link>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
