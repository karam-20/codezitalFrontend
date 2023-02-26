import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Sidebar from "../Sidebar";

export default function Users() {
  const deleteUserHandler = (userId) => {
    console.log(userId);
  };
  const changeRoleHandler = (userId) => {
    console.log(userId);
  };
  const users = [
    {
      _id: "aaffsf",
      name: "karampal",
      role: "admin",
      subscription: {
        status: "active",
      },
      email: "jangir@gmail.com",
    },
    {
      _id: "aaffdffsf",
      name: "karampal",
      role: "admin",
      subscription: {
        status: "active",
      },
      email: "jangir@gmail.com",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 mx-auto">
      <div className="md:col-span-5 mt-20 ">
        <h1 className="text-2xl text-center md:pl-16 md:text-left font-medium">
          All Users
        </h1>
        <div className="w-[100vw] md:w-full p-4 md:p-16 overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="text-left pr-[100px]">Id</th>
                <th className="text-left pr-[100px]">Name</th>
                <th className="text-left pr-[100px]">Email</th>
                <th className="text-left pr-[100px]">Role</th>
                <th className="text-left pr-[100px]">Subscription</th>
                <th className=" pr-[100px]">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item) => (
                <Row
                  changeRoleHandler={changeRoleHandler}
                  deleteUserHandler={deleteUserHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
function Row({ item, changeRoleHandler, deleteUserHandler }) {
  return (
    <tr>
      <td>#{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>{item.subscription.status === "active" ? "Active" : "Not Active"}</td>
      <td>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={() => changeRoleHandler(item._id)}
            className="px-3 py-2 border border-purple-500"
          >
            Change Role
          </button>
          <button onClick={() => deleteUserHandler(item._id)}>
            <RiDeleteBin7Fill />
          </button>
        </div>
      </td>
    </tr>
  );
}
