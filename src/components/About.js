import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../assets/images/hero.jpg";

export default function About() {
  return (
    <div className="flex mt-10 flex-col space-y-10 p-16 items-center justify-center mx-auto">
      <div>
        <h1 className="text-2xl font-semibold">About us</h1>
      </div>
      <div className="flex flex-col space-y-6 md:flex-row mx-auto">
        <div className="flex flex-col items-center">
          <img className="rounded-full w-32 h-32 object-cover" src={aboutimg} />
          <p className="text-gray-500 font-normal mt-2">Co-Founder</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Karampal Jangir</h1>
          <p className="mt-1 text-center">
            Hi, i am a full stack developer. Our mission is to provide quality
            content at reasonable price.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center font-medium text-lg">
            We are video streaming platform with some premium courses available
            only for premium users.
          </p>
          <Link to="/subscribe">
            <button className="bg-[#4C00FF] mt-3 py-3 px-5 text-white font-semibold">
              Checkout Our Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
