import { React, useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { RiLogoutBoxRLine, RiDashboardFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/user";

export default function Header({ isAuthenticated, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const dispatch = useDispatch();
  const logoutHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    dispatch(logOut());
  };

  return (
    <div className="font-body relative z-20">
      <div
        onClick={handler}
        className="fixed bg-[#9875FB] rounded-full p-2 text-3xl top-6 left-6 cursor-pointer"
      >
        <AiOutlineAlignLeft color="white" />
      </div>
      <div
        className={`fixed ${
          isOpen
            ? "left-0 transition-all duration-200"
            : "-left-72 md:left-[-1370px] transition-all duration-200"
        } top-0 w-8/12 md:w-2/12 bg-white/70 shadow-lg backdrop-blur-md h-full ease-in-out p-6`}
      >
        <div className="flex items-center justify-between pb-2">
          <div>
            <img className="w-28 -mb-2" alt="logo" src={logo} />
          </div>
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={handler}
          />
        </div>
        <div className="flex flex-col space-y-10 mt-10">
          <Link to="/">
            <button onClick={handler} className="text-lg font-medium">
              Home
            </button>
            <hr className="bg-[#9875FB] w-10" />
          </Link>
          <Link to="/courses">
            <button onClick={handler} className="text-lg font-medium">
              All Courses
            </button>
            <hr className="bg-[#9875FB] w-10" />
          </Link>
          <Link to="/request">
            <button onClick={handler} className="text-lg font-medium">
              Request a Course
            </button>
            <hr className="bg-[#9875FB] w-10" />
          </Link>
          <Link to="/contact">
            <button onClick={handler} className="text-lg font-medium">
              Contact us
            </button>
            <hr className="bg-[#9875FB] w-10" />
          </Link>
          <Link to="/about">
            <button onClick={handler} className="text-lg font-medium">
              About us
            </button>
            <hr className="bg-[#9875FB] w-10" />
          </Link>
        </div>
        <div className="absolute flex items-center space-x-5 bottom-10">
          {isAuthenticated ? (
            <>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex space-x-5">
                  <Link to="/profile">
                    <button
                      onClick={handler}
                      className="font-medium rounded-md bg-[#9875FB] text-white px-4 py-2"
                    >
                      Profile
                    </button>
                  </Link>
                  <div className="flex items-center">
                    <RiLogoutBoxRLine />
                    <button
                      onClick={logoutHandler}
                      className="font-medium rounded-md px-2"
                    >
                      Logout
                    </button>
                  </div>
                </div>
                {user && user.role === "admin" && (
                  <Link to="/admin/dashboard">
                    <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center space-x-1">
                      <RiDashboardFill />
                      <button onClick={handler} className="font-medium">
                        Dashboard
                      </button>
                    </div>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  onClick={handler}
                  className="bg-[#9875FB] text-white px-4 py-2 font-medium rounded-md"
                >
                  Login
                </button>
              </Link>

              <p>or</p>

              <Link to="/signup">
                <button
                  onClick={handler}
                  className="bg-[#9875FB] text-white px-4 py-2 font-medium rounded-md"
                >
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
