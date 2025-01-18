import React from "react";

const AboutMe = () => {
  return (
    <div className="">
      {/* about me */}
      <div className=" container flex  items-center h-[600px] ">
        <div className="w-[50%] bg-primary/5 h-full">
          <h1 className="font-extrabold uppercase text-[50px] text-center w-fit leading-[43px]">
            About
            <br />
            me
          </h1>
        </div>

        {/* details */}
        <div className="txt flex flex-col gap-3 w-[50%]  pl-[50px]">
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
    </div>
  );
};

export default AboutMe;
