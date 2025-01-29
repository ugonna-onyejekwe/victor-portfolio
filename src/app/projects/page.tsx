import { projects } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="container mt-[120px]">
      {/* projects */}
      <div className="mt-8 grid grid-cols-2 max-sm:grid-cols-1 gap-[40px]">
        {projects.map((i, key) => (
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
    </div>
  );
};

export default Projects;
