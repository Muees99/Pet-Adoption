"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import ForgotPasswordModal from "../../../components/ForgotPassModal";
import useDisclosure from "@/app/hook/useDisclosure";
import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";
// import { login as loginApi } from "../../http/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setEmail(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (password === "") {
      alert("Password is missing");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Email is not valid");
      return;
    }

    // loginApi({ email, password });

    //login logic here, using the validated email and password
    // 'email' and 'password' states to proceed with authentication.
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword: any) => !prevShowPassword);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2  items-center justify-center min-h-screen">
        <Image src="/assets/logo.svg" alt="logo" width={180} height={60} />

        <div className=" flex flex-col md:w-[475px] w-[270px] md:h-[468px]  mt-6">
          <div className=" items-center justify-center flex-col flex">
            <h2 className=" font-bold text-2xl">Welcome Back!</h2>
            <p className=" text-[14px]">Login to continue to your account...</p>
          </div>
          <form
            className=" items-center justify-center flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className=" flex-col flex w-full h-[86px] mt-[32px]">
              <label className=" justify-start"> Email</label>
              <input
                className=" border rounded-md w-full h-[54px] p-[16px] mt-[8px] outline-none bg-transparent"
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col w-full h-[86px] mt-[16px]">
              <label className="justify-start w-full">Password</label>
              <div className="flex items-center w-full border rounded-md mt-[8px]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-[54px] p-[16px] outline-none bg-transparent"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="p-[14px]" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <IoEyeOutline className="text-gray-400 cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline className="text-gray-400 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <button className="rounded-md bg-[#265D5C] w-full h-[45px]  text-[#f1f1f1f1] mt-[32px] ">
              {""}
              Login
            </button>
          </form>
          <div className="flex flex-row justify-between mt-[16px] text-[16px]">
            <div className=" flex items-center justify-center ">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div>
              <button onClick={onOpen} className="text-[#265D5C]">
                Forgot Password?
              </button>
              {/* <ForgotPasswordModal isOpen={isOpen} onClose={onClose} /> */}
            </div>
          </div>
          <div className=" items-center justify-center flex mt-[32px] font-normal text-[14px]">
            <label>Don&apos;t have an account?</label>
            <Link href={"/auth/signup"} className=" text-[#265D5C]">
              Create account
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

export default LoginPage;
