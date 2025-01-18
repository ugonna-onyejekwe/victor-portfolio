import React from "react";
import { projects } from "../../../lib/data";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ProjectDetails = ({ params: { id } }: { params: { id: string } }) => {
  const project = projects.find((i) => i.id === Number(id));

  return (
    <div className="container">
      <div className="h-[500px] w-full bg-primary/10 mt-[100px] flex  flex-col items-center justify-center">
        <h1 className="font-extrabold text-center text-[50px] max-sm:text-[40px] capitalize">
          {project?.name}
        </h1>

        <p className="flex flex-wrap items-center gap-3 font-pacifico text-primary mt-3">
          Skills:
          <span className=" text-[15px]">//figma</span>
          <span className=" text-[15px]">//protype</span>
        </p>

        <Button asChild className="mt-5">
          <Link href="#">View Project</Link>
        </Button>
      </div>

      <div className="txt mt-5">{project.desc1}</div>
      <div classname="w-full h-fit bg-primary/10 pt-5">
        <Image
          src={project.image}
          height={300}
          width={300}
          alt={project.name}
          className="size-full"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
