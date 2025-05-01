import React from 'react'

import NavBar from './NavBar';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <>
      <NavBar />

      <section
        id="home"
        to="/"
        className="w-full h-screen bg-zinc-900 sm:p-20 md:p-30 flex "
      >
        <div className="font-sans flex flex-col sm:gap-2 md:gap-6  ">
          <h1 className="sm:text-xl md:text-2xl ">Hello,</h1>
          <h1 className="sm:text-2xl  md:text-5xl  font-bold">
            I'm <span className="text-yellow-300">Akash Choudhary</span>
          </h1>
          <h1 className="sm:text-2xl  md:text-5xl font-bold">
            Full Stack Web Developer
          </h1>
          <h1 className="sm:text-sm font-semibold">
            I am a Skilled and passionate Web Developer with experience in
            creating <br /> visually appealing and user-friendly websites{" "}
          </h1>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="px-5 cursor-pointer py-3 font-medium rounded-full bg-white sm:w-1/3 md:w-1/4 text-black text-sm flex justify-center items-center gap-3"
          >
            {" "}
            <span className="w-4 h-4 ">
              <img
                className="w-full h-full object-cover"
                src="/assets/hireme.png"
                alt=""
              />
            </span>
            Hire me
          </Link>
        </div>
      </section>
    </>
  );
}

export default Intro