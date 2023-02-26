import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(login(email, password));
    e.preventDefault();
  };
  return (
    <div className="w-full font-body flex flex-col justify-center items-center mx-auto mt-20 h-[600px]">
      <div className="mx-auto space-y-12">
        <h1 className="text-2xl">
          Welcome,{" "}
          <span className="font-semibold tracking-widest">Code Zital</span>
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
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

          <Link to="/forgotpassword">
            <button className="text-[#4C00FF]">Forgot Password ?</button>
          </Link>
          <button
            type="submit"
            className="bg-[#4C00FF] py-3 text-white font-semibold"
          >
            Login
          </button>
          <p>
            New User ?{" "}
            <Link to="/signup">
              <button className="text-[#4C00FF]">Register</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
