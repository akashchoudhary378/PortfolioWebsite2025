import React from 'react'

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className=" w-full min-h-screen mt-10 flex items-center justify-center flex-col p-2"
      >
        <div className="  flex items-center justify-center">
          <div className="text-center flex flex-col gap-5">
            <h1 className="font-semibold text-4xl lg:text-5xl">My Portfolio</h1>
            <p className="text-md lg:font-medium ">
              I Take Pride in Paying Attention to the smallest details and
              making sure that my work is pixel 
              perfect .I am excited to bring my skills and experience to help
              businesses 
              achieve their goals and create a strong online presence
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10 flex-wrap justify-center mt-10 ">
          <div>
            <div className="w-80 h-50 bg-zinc-800  rounded-md overflow-hidden hover:scale-105">
              <img
                className="w-full h-full "
                src="/assets/BlogWebsite.png"
                alt=""
              />{" "}
            </div>
            <h1 className="text-zinc-300 mt-5 font-bold">Blog Website</h1>
            <h1 className="text-sm text-zinc-400 font-medium">
              TechStack:-Node Js, Express Js, EJS, JWT
            </h1>
          </div>
          <div>
            <div className="w-80 h-50 bg-zinc-800 rounded-md overflow-hidden hover:scale-105">
              <img
                className="w-full h-full "
                src="/assets/EcommerceWebsite.png"
                alt=""
              />{" "}
            </div>
            <h1 className="text-zinc-300 mt-5 font-bold">E-commerce Website</h1>
            <h1 className="text-sm font-medium text-zinc-400">
              TechStack:-React Js, Tailwind CSS, Javascript, HTML
            </h1>
          </div>
          <div>
            <div className="w-80 h-50 bg-zinc-800  rounded-md overflow-hidden hover:scale-105">
              <img
                className="w-full h-full "
                src="/assets/NewsApplication.png"
                alt=""
              />{" "}
            </div>
            <h1 className="text-zinc-300 mt-5 font-bold">News Application</h1>
            <h1 className="text-sm font-medium text-zinc-400">
              TechStack:-Javascript Js, Tailwind CSS, HTML
            </h1>
          </div>
          <div>
            <div className="w-80 h-50 bg-zinc-800 rounded-md overflow-hidden hover:scale-105">
              <img
                className="w-full h-full object-contain "
                src="/assets/WeatherApplication.png"
                alt=""
              />{" "}
            </div>
            <h1 className="text-zinc-300 mt-5 font-bold">
              Wheather Application
            </h1>
            <h1 className="text-sm font-medium text-zinc-400">
              TechStack:-javascript, Tailwind CSS, HTML
            </h1>
          </div>
        </div>
      </section>
    </>
  );
    
}

export default Portfolio