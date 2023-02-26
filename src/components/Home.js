import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/home.png";
import homeAn from "../assets/images/home-animate.png";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <>
      <section className="relative z-10 h-[110vh] flex flex-col md:flex-row justify-center md:justify-evenly items-center space-y-20 md:space-x-10 -mt-12 md:space-y-0 mx-auto font-body">
        <div className="p-3 absolute animate-bouncy top-[150px] md:w-[500px] md:top-[200px] md:left-[930px] left-[20px]">
          <img src={homeAn} alt="logo-home" />
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-60 items-center space-y-28">
          <div className="w-[240px] md:w-[320px]">
            <img src={logo} alt="logo-home" />
          </div>
          <div className="flex flex-col text-[#363A45] md:w-[500px] mx-auto md:items-start items-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold capitalize">
              <Typewriter
                options={{
                  strings: [
                    "Learn With Karam",
                    "Learn With Hustlers",
                    "Learn With Love",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="capitalize font-normal text-[#4A4F5C] text-2xl px-3 text-center md:text-left md:px-0 md:text-3xl">
              The Ultimate Guide To Ace Web Development
            </p>
            <Link to="/courses">
              <button className="bg-[#9875FB] transition duration-200  py-2 px-5 text-base font-medium text-white rounded-md">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
