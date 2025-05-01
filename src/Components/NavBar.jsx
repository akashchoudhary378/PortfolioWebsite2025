import React from 'react'
import { Link } from 'react-scroll';



const NavBar = () => {
  return (
    <>
      <section id="home" className="pt-20">
        <div className="container py-5 flex-wrap bg-zinc-900  flex items-center justify-around z-20 gap-40 fixed top-0 left-0">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="max-w-15 cursor-pointer"
          >
            <img
              className="w-full h-full object-contain"
              src="/assets/logo.png"
              alt=""
            />
          </Link>
          <div className="hidden lg:flex items-center justify-center gap-10 ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer hover:border-b-2 hover:border-yellow-400 border-b-2 border-zinc-900"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer hover:border-b-2 hover:border-yellow-400 border-b-2 border-zinc-900"
            >
              About
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer hover:border-b-2 hover:border-yellow-400 border-b-2 border-zinc-900"
            >
              Portfolio
            </Link>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="px-8 hidden lg:flex cursor-pointer py-3 rounded-full font-medium bg-white text-black text-xs flex items-center gap-2"
          >
            {" "}
            <span className="w-4 h-4">
              <img
                className="w-full h-full object-cover"
                src="/assets/contact.png"
                alt=""
              />
            </span>{" "}
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}

export default NavBar