"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import useDisclosure from "@/app/hook/useDisclosure";
import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (password === "") {
      alert("Password is missing");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Email is not valid");
      return;
    }

    // login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl md:space-x-10">
        {/* Image section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <Image
            src="/assets/dogwalk.png"
            alt="Pet with Adopt Me sign"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form section */}
        <div className="w-full md:w-1/2 bg-inherit p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h2 className="font-bold text-2xl sm:text-3xl">Welcome Back!</h2>
            <p className="text-gray-600">
              Login to continue to your account...
            </p>
          </div>

          <SignUpWithGoogle />

          <div className="flex items-center justify-center my-6">
            <div className="w-1/3 h-[1px] bg-gray-300"></div>
            <p className="mx-4 text-gray-400 font-semibold">OR</p>
            <div className="w-1/3 h-[1px] bg-gray-300"></div>
          </div>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                className="border rounded-md w-full h-[50px] p-4 mt-2 outline-none bg-transparent"
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <div className="flex items-center border rounded-md mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-[50px] p-4 outline-none bg-transparent"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div
                  className="p-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <IoEyeOutline className="text-gray-400" />
                  ) : (
                    <IoEyeOffOutline className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            <button className="rounded-md bg-[#265D5C] w-full h-[45px] text-white font-semibold hover:bg-[#1c4948] transition-colors">
              Login
            </button>
          </form>

          <div className="flex justify-between mt-4 text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <button onClick={onOpen} className="text-[#265D5C] text-sm">
              Forgot Password?
            </button>
          </div>

          <div className="text-center mt-6 text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-[#265D5C] text-sm">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import useDisclosure from "@/app/hook/useDisclosure";
// import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { isOpen, onClose, onOpen } = useDisclosure();
//   const [showPassword, setShowPassword] = useState(false);

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = event.target.value;
//     setEmail(inputValue);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (password === "") {
//       alert("Password is missing");
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       alert("Email is not valid");
//       return;
//     }

//     // login logic here
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   return (
//     <div className="mx-auto sm:px-[5%] px-[4%] bg-gray-100">
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex flex-col md:flex-row items-center w-full max-w-5xl overflow-hidden">
//           {/* Image section */}
//           <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto justify-center items-center mx-auto">
//             <Image
//               src="/assets/dogwalk.png"
//               alt="Pet with Adopt Me sign"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover h-full w-full"
//             />
//           </div>

//           {/* Form section */}
//           <div className="w-full md:w-1/2 flex flex-col p-8 sm:p-6 md:p-12 justify-center items-center">
//             <div className="text-center">
//               <h2 className="font-bold text-2xl sm:text-3xl mb-4">
//                 Welcome Back!
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Login to continue to your account...
//               </p>
//             </div>
//             <SignUpWithGoogle />
//             <div className="flex items-center justify-center my-6">
//               <div className="w-1/3 h-[1px] bg-gray-300"></div>
//               <p className="mx-4 text-gray-400 font-semibold">OR</p>
//               <div className="w-1/3 h-[1px] bg-gray-300"></div>
//             </div>

//             <form
//               className="flex flex-col space-y-4 w-full"
//               onSubmit={handleSubmit}
//             >
//               <div>
//                 <label className="block text-gray-700">Email</label>
//                 <input
//                   className="border rounded-md w-full h-[50px] p-4 mt-2 outline-none bg-transparent"
//                   required
//                   type="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Password</label>
//                 <div className="flex items-center border rounded-md mt-2">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="w-full h-[50px] p-4 outline-none bg-transparent"
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     value={password}
//                   />
//                   <div
//                     className="p-4 cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <IoEyeOutline className="text-gray-400" />
//                     ) : (
//                       <IoEyeOffOutline className="text-gray-400" />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <button className="rounded-md bg-[#265D5C] w-full h-[45px] text-white font-semibold hover:bg-[#1c4948] transition-colors">
//                 Login
//               </button>
//             </form>

//             <div className="flex justify-between mt-4 text-gray-600">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <button onClick={onOpen} className="text-[#265D5C]">
//                 Forgot Password?
//               </button>
//             </div>

//             <div className="text-center mt-6 text-gray-600">
//               Don&apos;t have an account?{" "}
//               <Link href={"/auth/signup"} className="text-[#265D5C]">
//                 Create account
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
