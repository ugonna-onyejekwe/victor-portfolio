import React from "react";
import { Button } from "./ui/button";

const Home_section = () => {
  return (
    <div className="flex h-[750px] items-center justify-between">
      {/* txt */}
      <div className="w-[45%] pl-[150px]">
        <span className="text-primary font-semibold text-[20px]">Hi, I am</span>
        <h1 className="font-bold text-[40px] capitalize ">Nduka Victor</h1>
        <p className="text-dark/70  pt-[10px] text-[17px] leading-[30px]">
          A passionate UI/UX designer creating intuitive and engaging digital
          experiences that blend creativity with functionality.
        </p>

        <div className="mt-5">
          <Button>Hire me</Button>
        </div>
      </div>

      {/* img */}

      <div className="w-[50%]  h-full flex  bg-primary/5"></div>
    </div>
  );
};

export default Home_section;
