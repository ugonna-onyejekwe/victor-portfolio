"use client";
import React from "react";
import { projects } from "../../../lib/data";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((i) => i.id === Number(id));

  return (
    <div className="container">
      <div className="h-[500px] w-full bg-primary/10 mt-[100px] flex  flex-col items-center justify-center p-3">
        <h1 className="font-extrabold text-center text-[50px] max-sm:text-[40px] capitalize">
          {project?.name}
        </h1>

        <p className="flex flex-wrap items-center gap-3 font-pacifico text-primary mt-3">
          <span className="uppercase font-pacifico">Skills:</span>
          <span className=" text-[15px]">//figma</span>
          <span className=" text-[15px]">//protype</span>
        </p>

        <Button asChild className="mt-5">
          <Link href="#">View Project</Link>
        </Button>
      </div>

      <div className="txt mt-5 !leading-[35px]">{project?.desc1}</div>
      <div className="w-full h-fit bg-primary/10 mt-5">
        <Image
          src={project?.image.pro1!}
          height={1500}
          width={15000}
          alt={project?.name!}
          className="size-full"
        />
      </div>

      {project?.image.pro2 && (
        <>
          <div className="txt mt-5 !leading-[35px]">{project?.desc2}</div>

          <div className="w-full h-fit bg-primary/10 mt-5">
            <Image
              src={project?.image.pro2!}
              height={1500}
              width={1500}
              alt={project?.name!}
              className="size-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
