import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/user";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageprev, setImageprev] = useState("");
  const [image, setImage] = useState("");

  const fileChangeHander = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
  };
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);

    dispatch(register(myForm));
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto mt-20 h-[600px]">
      <div className="mx-auto space-y-10">
        <h1 className="text-2xl font-semibold">Register</h1>
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={imageprev}
          alt="userImage"
        />
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          <input
            className="py-3 px-4 font-body w-[300px] bg-slate-100"
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
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
            placeholder="username"
          />
          <input
            className="py-3 bg-slate-100 px-4 font-body w-[300px]"
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <input
            type="file"
            required
            accept="image/*"
            id="avatar"
            onChange={fileChangeHander}
          />

          <button
            type="submit"
            className="bg-[#4C00FF] py-3 text-white font-semibold"
          >
            Register
          </button>
          <p>
            Already Signed Up ?{" "}
            <Link to="/login    ">
              <button className="text-[#4C00FF]">Login here</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
