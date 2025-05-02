import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <>
      <NavBar />

      <section
        id="home"
        className="w-full lg:min-h-screen bg-zinc-900 py-20 px-4 flex items-start justify-start lg:p-32"
      >
        <div className="max-w-screen-lg w-full flex flex-col gap-6 lg:gap-6 items-center lg:items-start font-sans">
          <h1 className="text-xl lg:text-2xl">Hello,</h1>
          <h1 className="text-3xl lg:text-5xl font-bold">
            I'm <span className="text-yellow-300 tracking-tight">Akash Choudhary</span>
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Full Stack Web Developer
          </h1>
          <p className="text-md text-center lg:text-start lg:text-md lg:w-2/3 font-semibold text-zinc-300">
            I am a skilled and passionate Web Developer with experience in
            creating visually appealing and user-friendly websites.
          </p>
          <div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="px-6 py-3 font-medium rounded-full bg-white text-black text-sm flex justify-center items-center gap-3 cursor-pointer hover:bg-zinc-100 transition"
            >
              <span className="w-4 h-4">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/hireme.png"
                  alt="Hire me icon"
                />
              </span>
              Hire me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
