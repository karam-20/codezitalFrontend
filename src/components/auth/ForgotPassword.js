import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/profile";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });

      if (message) {
        toast.message(message);
        dispatch({ type: "clearMessage" });
      }
    }
  }, [dispatch, error, message]);
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto mt-20 h-[600px] space-y-10">
      <h1 className="text-2xl font-semibold">Forgot Password</h1>
      <form onSubmit={submitHandler} className="flex flex-col space-y-4">
        <input
          className="py-3 px-4 font-body w-[300px] bg-slate-100"
          type="email"
          required
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="abc@email.com"
        />
        <div className="bg-[#4C00FF] flex items-center justify-center py-3 w-[300px] text-center h-[50px] text-white font-semibold">
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
              "Send Reset Link"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
