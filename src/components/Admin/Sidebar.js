import React from "react";
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const Location = useLocation();
  return (
    <div className="flex flex-col h-[100vh] space-y-6 items-center md:items-start p-10 shadow-xl">
      <LinkButton
        active={Location.pathname === "/admin/dashboard"}
        url={"dashboard"}
        Icon={RiDashboardFill}
        text="Dashboard"
      />
      <LinkButton
        active={Location.pathname === "/admin/admincourses"}
        url={"admincourses"}
        Icon={RiEyeFill}
        text="Admin Courses"
      />
      <LinkButton
        active={Location.pathname === "/admin/users"}
        url={"users"}
        Icon={RiUser3Fill}
        text="Users"
      />
      <LinkButton
        active={Location.pathname === "/admin/createcourse"}
        url={"createcourse"}
        Icon={RiAddCircleFill}
        text="Create Course"
      />
    </div>
  );
}
function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <button
        className={`flex ${
          active ? "text-purple-700" : ""
        } items-center gap-2 text-lg font-medium`}
      >
        <Icon />
        {text}
      </button>
    </Link>
  );
}
