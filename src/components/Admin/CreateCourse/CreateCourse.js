import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../redux/actions/admin";
import Sidebar from "../Sidebar";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImageprev] = useState("");
  const [category, setCategory] = useState("");
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
  };
  const { loading, error, message } = useSelector((state) => state.admin);
  const categories = ["Web Development", "App Development", "Ui & Ux", "DSA"];
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);

    dispatch(createCourse(myForm));
    //title,des,category,createdby,image(file)
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [message, dispatch, error]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 mx-auto">
      <div className="md:col-span-5 mt-20">
        <form onSubmit={submitHandler} className="flex flex-col items-center">
          <h1 className="text-xl text-center mb-10 font-medium">
            Create Course
          </h1>
          <div className="flex flex-col space-y-8">
            <input
              className="py-3 bg-slate-100 px-4 font-body w-full"
              type="text"
              required
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter title"
            />
            <input
              className="py-3 bg-slate-100 px-4 font-body w-full"
              type="text"
              required
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
            />
            <input
              className="py-3 bg-slate-100 px-4 font-body w-full"
              type="text"
              required
              id="createdBy"
              value={createdBy}
              onChange={(e) => {
                setCreatedBy(e.target.value);
              }}
              placeholder="Creator name"
            />
            <select
              className="px-5 py-3 font-body bg-slate-200"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              accept="image/*"
              required
              type="file"
              onChange={changeImageHandler}
            ></input>
            {imagePrev && (
              <img
                className="object-contain md:w-[480px] md:h-[270px]"
                src={imagePrev}
                alt="course-logo"
              />
            )}
            <button
              className="bg-[#4C00FF] py-3 text-white font-semibold"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
