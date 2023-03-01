import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";
// import { loginPage } from "../../assets/images/loginPage.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(login(email, password));
    e.preventDefault();
  };
  return (
    <div className="w-full font-body h-[100vh] text-[#363A45] flex flex-col justify-center items-center mx-auto">
      <div>{/* <img src={loginPage} alt="loginPage" /> */}</div>
      <div className="mx-auto space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">Welcome to ,</h1>
          <h1 className="font-semibold text-3xl tracking">FrontEnd Forearms</h1>
        </div>
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
            className="bg-[#9875FB] py-3 text-white font-semibold"
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
