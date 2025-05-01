import React from "react";

const Skills = () => {
  return (
    <section id="about" className="w-full h-screen bg-zinc-900 flex flex-col justify-center items-center gap-5 p-2">
      <div>
        <h1 className="text-4xl lg:text-5xl font-semibold">What I do</h1>
      </div>

        <p className="text-center text-sm lg:text-md font-medium lg:w-1/2 ">
          I am a Skilled and passionate Full Web Developer with experience in
          creating visually appealing and user-friendly 
          websites. I have a strong understanding of design and keen eye for
          detail . I am Proficient int HTML, CSS, Javascript, 
          React, Node JS,
        </p>
      
      <div className="flex lg:w-2/3 gap-2 bg-zinc-800 hover:bg-zinc-700 p-5 rounded-md ">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover"
            src="/assets/Development.png"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-2 lg:gap-1">
          <h1 className=" text-md lg:text-xl font-semibold">Web Development</h1>
          <p className="text-sm">
            Building responsive and high-performance websites using the latest
            technologies. I ensure seamless functionality across all devices and
            platforms.
          </p>
        </div>
      </div>

      <div className="flex lg:w-2/3 gap-2 bg-zinc-800 hover:bg-zinc-700 p-5 rounded-md ">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover"
            src="/assets/CreativeProject.png"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <h1 className="text-xl font-semibold">Creative Projects</h1>
          <p className="text-sm">
            Open to unique and creative collaborations — from UI/UX mockups to
            visuals that bring your digital presence to life.
          </p>
        </div>
      </div>

      <div className="flex lg:w-2/3 gap-2 bg-zinc-800 hover:bg-zinc-700 p-5 rounded-md ">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover"
            src="/assets/MobileInterface.png"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <h1 className="text-xl font-semibold">Mobile-Friendly Interfaces</h1>
          <p className="text-sm">
            Designing and optimizing mobile-responsive interfaces to ensure your
            website looks great and works perfectly on all screen sizes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
