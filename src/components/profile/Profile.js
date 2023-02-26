import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromPlaylist,
  updateProfilePicture,
} from "../../redux/actions/profile";
import { getMyProfile } from "../../redux/actions/user";

export default function Profile({ user }) {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.profile);
  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
    await dispatch(updateProfilePicture(myForm));
    dispatch(getMyProfile());
  };
  const [isOpen, setIsOpen] = useState(false);
  const closeHandler = () => {
    boxToggle();
    setImage("");
    setImageprev("");
  };
  const boxToggle = () => {
    setIsOpen(!isOpen);
  };
  const [imageprev, setImageprev] = useState("");
  const [image, setImage] = useState("");
  const imageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
  };

  const playlistRemoveHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(getMyProfile());
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
  }, [dispatch, error, message]);

  return (
    <>
      <div className="flex relative items-center justify-center font-body">
        <div className="flex flex-col space-y-10 md:text-left relative p-20">
          <div>
            <h1 className="uppercase text-3xl font-bold text-[#363A45]">
              Profile
            </h1>
          </div>
          <div className="flex flex-col space-y-7 md:flex-row md:items-center md:gap-16">
            {/* //image and change photo */}
            <div className="flex flex-col items-center gap-3">
              <img
                className="h-40 w-40 rounded-full"
                src={user.avatar.url}
                alt="userImage"
              />
              <button
                className="text-[#4C00FF] font-medium"
                onClick={boxToggle}
              >
                Change Photo
              </button>
            </div>
            <div className="flex flex-col gap-6 items-center md:items-start">
              {/* user details */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex gap-3">
                  <h1 className="font-semibold text-[#363A45]">Name</h1>
                  <p>{user.name}</p>
                </div>
                <div className="flex gap-3">
                  <h1 className="font-semibold text-[#363A45]">Email</h1>
                  <p>{user.email}</p>
                </div>
                <div className="flex gap-3">
                  <h1 className="font-semibold text-[#363A45]">CreatedAt</h1>
                  <p>{user.createdAt.split("T")[0]}</p>
                </div>
              </div>
              {/* update buttons */}
              <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                <Link to="/updateprofile">
                  <button className="bg-slate-200 font-medium text-[#363A45] rounded-md px-4 py-2">
                    Update Profile
                  </button>
                </Link>
                <Link to="/changepassword">
                  <button className="bg-slate-200 font-medium rounded-md px-4 text-[#363A45] py-2">
                    Change Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-left font-semibold text-[#363A45] text-xl">
              Playlist
            </h1>
          </div>
          {user.playlist.length > 0 && (
            <div className="flex flex-col items-center md:flex-row md:flex-wrap">
              {user.playlist.map((item) => (
                <div key={item.course} className="w-[290px] border">
                  <img className="object-cover" src={item.poster} />
                  <div className="flex items-center justify-between p-4">
                    <Link to={`/course/${item.course}`}>
                      <button className="font-medium text-sm text-white py-2 px-4 bg-[#4C00FF]">
                        Watch Now
                      </button>
                    </Link>
                    <button onClick={() => playlistRemoveHandler(item.course)}>
                      <MdDelete size={28} color="#4C00FF" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* modal */}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/50 flex items-center justify-center">
          <div className="bg-white shadow-xl p-8">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Change Profile Photo</p>
            </div>
            <form
              onSubmit={(e) => changeImageSubmitHandler(e, image)}
              className="flex flex-col gap-4 mt-6"
            >
              {imageprev && (
                <img className="w-44 h-44 rounded-full p-4" src={imageprev} />
              )}
              <input
                type="file"
                required
                accept="image/*"
                id="avatar"
                onChange={imageChange}
              />

              <div className="bg-[#4C00FF] flex items-center justify-center py-3 w-full text-center h-[50px] text-white font-semibold">
                <button type="submit">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Oval
                        height={25}
                        width={25}
                        color="#FFFFFF"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#FFFFFF"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                      />
                    </div>
                  ) : (
                    "Change"
                  )}
                </button>
              </div>
            </form>
            <button
              onClick={closeHandler}
              className="bg-slate-200 w-full py-3 text-black font-semibold mt-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
