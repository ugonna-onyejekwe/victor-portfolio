"use client";

import React from "react";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { skills } from "@/lib/data";

const Skills = () => {
  return (
    <div className="mt-8 max-md:mt-10 container">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={70}
        slidesPerView={"auto"}
        autoplay={{
          disableOnInteraction: false,
          delay: 0,
        }}
        speed={5000}
        loop
      >
        {skills.map((i, key) => (
          <SwiperSlide
            key={key}
            className=" max-w-fit text-[25px] max-md:text-[20px] text-dark/80 tracking-wider font-pacifico relative before:w-full before:h-[50%] before:absolute before:left-0 before:bottom-0 before:bg-primary/20 before:z-[-1]"
          >
            {i}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
