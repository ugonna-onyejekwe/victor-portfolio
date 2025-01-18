import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="container mt-[80px]">
      <h2 className="font-bold text-[30px] max-md:text-[25px]">My projects</h2>
      <span className="text-primary text-[18px]">
        Explore my amazing projects
      </span>
      <div className="mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-[30px]">
        {projects.map((i, key) => (
          <Link href={`${i.id}`} target="_blank" key={key}>
            <div className="bg-primary/5 w-full aspect-[2/1.5] rounded-xl overflow-hidden ">
              <Image
                height={300}
                width={300}
                alt={i.name}
                src={i.image}
                className="size-full"
              />
            </div>

            {/* txt */}
            <div className="mt-4 px-2">
              <h2 className="font-bold text-[20px] capitalize">{i.name}</h2>
              <p className="txt mt-2">
                {i.desc1.length > 100 ? i.desc1.slice(0, 100) + "..." : i.desc1}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
