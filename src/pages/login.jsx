import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center justify-center bg-white my-10">
      <div className="bg-[#7000FF] flex items-center flex-col h-max w-90 p-10 rounded-4xl">
        <h1 className="text-white text-center font-black text-3xl mb-5">
          LOGIN
        </h1>
        <input
          placeholder="Ismingizni kiriting"
          type="text"
          className="font-medium bg-white rounded-4xl h-10 w-full mb-2 py-5 pl-5 pr-10 focus:outline-0"
        />
        <span className="relative w-full">
          <input
            placeholder="Parolingizni kiriting"
            type={show ? "text" : "password"}
            className="font-medium bg-white rounded-4xl h-10 w-full mb-5 py-5 pl-5 pr-10 focus:outline-0"
          />
          <span onClick={() => setShow((prev) => !prev)} className="absolute right-4 top-3">
            {show ? <FiEye /> : <FiEyeOff />}
          </span>
        </span>
        <input
          type="submit"
          className="text-[#7000ff] bg-white px-15 py-2 rounded-4xl font-medium"
        />
        <p className="text-white underline">Forgot password?</p>
      </div>
    </div>
  );
}
