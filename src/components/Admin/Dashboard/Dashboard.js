import React from "react";
import Sidebar from "../Sidebar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 mt-12 p-10">
      <div className="md:col-span-5"></div>
      <Sidebar />
    </div>
  );
}
