import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto mt-20 h-[600px]">
      <div className="mx-auto space-y-12">
        <h1 className="text-2xl font-semibold">Contact us</h1>

        <form className="flex flex-col space-y-5">
          <input
            className="py-3 px-4 font-body w-[300px] bg-slate-100"
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <input
            className="py-3 px-4 font-body w-[300px] bg-slate-100"
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="abc@gmail.com"
          />
          <textarea
            className="py-3 bg-slate-100 px-4 font-body w-[300px]"
            type="message"
            required
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your Message"
          />

          <button
            type="submit"
            className="bg-[#4C00FF] py-3 text-white font-semibold"
          >
            Send Mail
          </button>
          <p>
            Request for a course ?{" "}
            <Link to="/request">
              <button className="text-[#4C00FF]">Click here</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
