import React from "react";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div className="mt-[100px] max-sm:mt-[60px]" id="about">
      {/* about me */}
      <div className=" container flex  items-center h-[600px] max-md:flex-col-reverse max-md:h-fit">
        <div className="w-[50%] bg-primary/5 h-full  bg-profile bg-center bg-contain max-md:hidden " />

        {/* details */}
        <div className="txt flex flex-col gap-3 w-full  pl-[50px] md:w-[50%]  max-md:pl-0 ">
          <h1 className="font-extrabold uppercase text-[40px] text-center w-fit leading-[43px] max-md:text-[30px] mb-3">
            About me
          </h1>

          <p>
            "I'm a passionate UI/UX designer with expertise in Figma. I create
            user-friendly designs for web and mobile apps that make users' lives
            easier. With a strong focus on user experience, I craft intuitive
            and engaging designs that meet clients' goals.
          </p>

          <p>
            I'm always learning and looking for new challenges to grow as a
            designer. If you're looking for a dedicated and creative UI/UX
            designer, let's work together
          </p>

          <p>What is my Goal?</p>

          <p>
            My goal is to bring your vision to life and tranform your visitors
            into valued customers.
          </p>

          <button className="w-fit mt-3 hover:text-primary font-bold relative before:absolute before:w-[100px] before:h-[1px] before:bg-primary before:top-[50%]  before:translate-y-[-50%] before:left-[70px] ">
            Hire me{" "}
          </button>
        </div>
      </div>

      {/* skills */}
      <Skills />
    </div>
  );
};

export default AboutMe;
