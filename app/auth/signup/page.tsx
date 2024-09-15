"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import Link from "next/link";

import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";
// import { signup as signupApi } from "../../http/auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setEmail(inputValue);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName === "") {
      alert("FirstName is missing");
      return;
    }

    if (lastName === "") {
      alert("LastName is missing");
      return;
    }

    if (password === "") {
      alert("Password is missing");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Email is not valid");
      return;
    }

    // signupApi({ firstName, lastName, email, password }); 46/9
  };
  return (
    <>
      <div className="flex flex-col gap-y-2  items-center justify-center min-h-screen">
        <div className=" flex flex-col md:w-[475px] w-[270px] md:h-[666px]">
          <div className=" items-center justify-center flex-col flex">
            <h2 className=" font-bold text-2xl ">Welcome to Coallab</h2>
            <p className=" text-[14px] mt-[8px] ">
              Sign up to start uploading templates that converts!
            </p>
          </div>

          <form
            className=" items-center justify-center flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className=" flex-col flex w-full h-[86px] mt-[40px]">
              <label className=" justify-start">First Name</label>
              <input
                className=" border rounded-md w-full h-[54px] p-[14px]"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className=" flex-col flex w-full h-[86px] mt-[20px]">
              <label className=" justify-start w-full">Last Name</label>
              <input
                className=" border rounded-md w-full  h-[54px] p-[14px]"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className=" flex-col flex w-full h-[86px] mt-[20px]">
              <label className=" justify-start w-full">Email</label>
              <div className="flex items-center border rounded-md w-full h-[54px]">
                <div className=" justify-start flex items-center mr-2 p-[14px]">
                  <FaRegEnvelope className="text-gray-400 " />
                  <input
                    className="w-full h-full p-[16px] outline-none bg-transparent"
                    required
                    type="email"
                    placeholder="olivia@untitledui.com"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </div>
              </div>
            </div>

            <div className=" flex-col flex w-full h-[86px] mt-[20px]">
              <label className=" justify-start w-full">Create password</label>
              <div className="flex items-center border rounded-md w-full h-[54px]">
                <div className=" justify-start flex items-center mr-2 p-[14px]">
                  <GoKey className="text-gray-400 " />
                  <input
                    className="w-full h-full p-[16px] outline-none bg-transparent"
                    placeholder="olivia@untitledui.com"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
            </div>
            <div className=" flex-col flex w-full mt-[40px]">
              <div>
                <input type="checkbox" className=" mr-2" />
                <label>I agree to terms & conditions</label>
              </div>
            </div>

            <button className="rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[40px] ">
              Create Account
            </button>
          </form>
          <div className=" items-center justify-center flex mt-[20px] font-normal  text-[16px]">
            <label>Already have an account? </label>
            <Link href={"./login"} className=" text-[#265D5C]">
              Sign in
            </Link>
          </div>
          <div className="flex items-center justify-center mt-[32px] ">
            <div className="w-1/2 h-[0.0625rem] bg-white-650"></div>
            <p className="mx-4 text-white-650 font-semibold">OR</p>
            <div className="w-1/2 h-[0.0625rem] bg-white-650 "></div>
          </div>
          <div className="mt-[1.6rem] flex flex-col gap-[1rem] relative">
            <SignUpWithGoogle />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
