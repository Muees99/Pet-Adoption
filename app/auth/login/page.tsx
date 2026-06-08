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
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="flex flex-col md:flex-row items-center w-full max-w-6xl md:space-x-10">
//         {/* Image section */}
//         <div className="hidden md:flex md:w-1/2 justify-center items-center">
//           <Image
//             src="/assets/dogwalk.png"
//             alt="Pet with Adopt Me sign"
//             layout="responsive"
//             width={500}
//             height={500}
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* Form section */}
//         <div className="w-full md:w-1/2 bg-inherit p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
//           <div className="text-center mb-6">
//             <h2 className="font-bold text-2xl sm:text-3xl">Welcome Back!</h2>
//             <p className="text-gray-600">
//               Login to continue to your account...
//             </p>
//           </div>

//           <SignUpWithGoogle />

//           <div className="flex items-center justify-center my-6">
//             <div className="w-1/3 h-[1px] bg-gray-300"></div>
//             <p className="mx-4 text-gray-400 font-semibold">OR</p>
//             <div className="w-1/3 h-[1px] bg-gray-300"></div>
//           </div>

//           <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 className="border rounded-md w-full h-[50px] p-4 mt-2 outline-none bg-transparent"
//                 required
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Enter your email address"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">Password</label>
//               <div className="flex items-center border rounded-md mt-2">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="w-full h-[50px] p-4 outline-none bg-transparent"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   value={password}
//                 />
//                 <div
//                   className="p-4 cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? (
//                     <IoEyeOutline className="text-gray-400" />
//                   ) : (
//                     <IoEyeOffOutline className="text-gray-400" />
//                   )}
//                 </div>
//               </div>
//             </div>

//             <button className="rounded-md bg-[#265D5C] w-full h-[45px] text-white font-semibold hover:bg-[#1c4948] transition-colors">
//               Login
//             </button>
//           </form>

//           <div className="flex justify-between mt-4 text-gray-600">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <button onClick={onOpen} className="text-[#265D5C] text-sm">
//               Forgot Password?
//             </button>
//           </div>

//           <div className="text-center mt-6 text-gray-600 text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="/auth/signup" className="text-[#265D5C] text-sm">
//               Create account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

// // "use client";
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// // import useDisclosure from "@/app/hook/useDisclosure";
// // import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";

// // function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const { isOpen, onClose, onOpen } = useDisclosure();
// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const inputValue = event.target.value;
// //     setEmail(inputValue);
// //   };

// //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// //     if (password === "") {
// //       alert("Password is missing");
// //       return;
// //     }

// //     if (!emailRegex.test(email)) {
// //       alert("Email is not valid");
// //       return;
// //     }

// //     // login logic here
// //   };

// //   const togglePasswordVisibility = () => {
// //     setShowPassword((prevShowPassword) => !prevShowPassword);
// //   };

// //   return (
// //     <div className="mx-auto sm:px-[5%] px-[4%] bg-gray-100">
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //         <div className="flex flex-col md:flex-row items-center w-full max-w-5xl overflow-hidden">
// //           {/* Image section */}
// //           <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto justify-center items-center mx-auto">
// //             <Image
// //               src="/assets/dogwalk.png"
// //               alt="Pet with Adopt Me sign"
// //               layout="responsive"
// //               width={500}
// //               height={500}
// //               className="object-cover h-full w-full"
// //             />
// //           </div>

// //           {/* Form section */}
// //           <div className="w-full md:w-1/2 flex flex-col p-8 sm:p-6 md:p-12 justify-center items-center">
// //             <div className="text-center">
// //               <h2 className="font-bold text-2xl sm:text-3xl mb-4">
// //                 Welcome Back!
// //               </h2>
// //               <p className="text-gray-600 mb-6">
// //                 Login to continue to your account...
// //               </p>
// //             </div>
// //             <SignUpWithGoogle />
// //             <div className="flex items-center justify-center my-6">
// //               <div className="w-1/3 h-[1px] bg-gray-300"></div>
// //               <p className="mx-4 text-gray-400 font-semibold">OR</p>
// //               <div className="w-1/3 h-[1px] bg-gray-300"></div>
// //             </div>

// //             <form
// //               className="flex flex-col space-y-4 w-full"
// //               onSubmit={handleSubmit}
// //             >
// //               <div>
// //                 <label className="block text-gray-700">Email</label>
// //                 <input
// //                   className="border rounded-md w-full h-[50px] p-4 mt-2 outline-none bg-transparent"
// //                   required
// //                   type="email"
// //                   value={email}
// //                   onChange={handleEmailChange}
// //                   placeholder="Enter your email address"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-gray-700">Password</label>
// //                 <div className="flex items-center border rounded-md mt-2">
// //                   <input
// //                     type={showPassword ? "text" : "password"}
// //                     className="w-full h-[50px] p-4 outline-none bg-transparent"
// //                     placeholder="Password"
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     value={password}
// //                   />
// //                   <div
// //                     className="p-4 cursor-pointer"
// //                     onClick={togglePasswordVisibility}
// //                   >
// //                     {showPassword ? (
// //                       <IoEyeOutline className="text-gray-400" />
// //                     ) : (
// //                       <IoEyeOffOutline className="text-gray-400" />
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>

// //               <button className="rounded-md bg-[#265D5C] w-full h-[45px] text-white font-semibold hover:bg-[#1c4948] transition-colors">
// //                 Login
// //               </button>
// //             </form>

// //             <div className="flex justify-between mt-4 text-gray-600">
// //               <label className="flex items-center">
// //                 <input type="checkbox" className="mr-2" />
// //                 Remember me
// //               </label>
// //               <button onClick={onOpen} className="text-[#265D5C]">
// //                 Forgot Password?
// //               </button>
// //             </div>

// //             <div className="text-center mt-6 text-gray-600">
// //               Don&apos;t have an account?{" "}
// //               <Link href={"/auth/signup"} className="text-[#265D5C]">
// //                 Create account
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LoginPage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IoPaw } from "react-icons/io5";
import { FiMail, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import useDisclosure from "@/app/hook/useDisclosure";
import SignUpWithGoogle from "@/components/AuthSocialButtons/SignUpWithGoogle";

const floatingPaws = [
  { top: "10%", left: "6%", size: 20, delay: 0.2, rotate: -20, opacity: 0.08 },
  { top: "65%", left: "3%", size: 13, delay: 0.5, rotate: 30, opacity: 0.06 },
  { top: "30%", left: "88%", size: 18, delay: 0.7, rotate: 15, opacity: 0.07 },
  { top: "78%", left: "92%", size: 11, delay: 0.3, rotate: -10, opacity: 0.05 },
  { top: "50%", left: "50%", size: 9, delay: 0.9, rotate: 45, opacity: 0.04 },
];

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { onOpen } = useDisclosure();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    // login logic here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{ background: "#0f0d0a" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, #1e1508 0%, transparent 65%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,151,58,0.4), transparent)",
        }}
      />

      {/* Floating paws */}
      {floatingPaws.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          <IoPaw
            style={{
              width: p.size,
              height: p.size,
              color: "#c8973a",
              opacity: p.opacity,
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16">
        {/* ── Left: Illustration panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col flex-1 items-start"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-10"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(200,151,58,0.15)",
                border: "1px solid rgba(200,151,58,0.3)",
              }}
            >
              <IoPaw style={{ color: "#c8973a", width: 16, height: 16 }} />
            </div>
            <span
              className="text-white font-bold text-xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Paw
              <span style={{ color: "#c8973a", fontStyle: "italic" }}>
                Adopt
              </span>
            </span>
          </Link>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#c8973a]" />
              <span
                className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Welcome back
              </span>
            </div>
            <h1
              className="text-white font-bold leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              Your pack is{" "}
              <span className="italic" style={{ color: "#c8973a" }}>
                waiting
              </span>
            </h1>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
            >
              Sign in to continue your adoption journey and reconnect with the
              pets that need you most.
            </p>
          </div>

          {/* Dog image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 20px 40px rgba(200,151,58,0.1))" }}
          >
            <Image
              src="/assets/dogwalk.png"
              alt="Dog waiting for you"
              width={400}
              height={400}
              priority
              style={{ maxWidth: "clamp(220px, 28vw, 400px)", height: "auto" }}
            />
          </motion.div>

          {/* Trust stats */}
          <div
            className="flex gap-8 mt-8 pt-6 w-full"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            {[
              ["12K+", "Pets rehomed"],
              ["98%", "Happy owners"],
              ["500+", "Shelters"],
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {val}
                </span>
                <span
                  className="text-[10px] tracking-widest uppercase"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#3d3329",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Form card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full md:max-w-[420px] rounded-2xl p-8 sm:p-10 flex flex-col"
          style={{
            background: "#17130d",
            border: "1px solid rgba(200,151,58,0.15)",
          }}
        >
          {/* Mobile logo */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-8 md:hidden"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(200,151,58,0.15)",
                border: "1px solid rgba(200,151,58,0.3)",
              }}
            >
              <IoPaw style={{ color: "#c8973a", width: 14, height: 14 }} />
            </div>
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Paw
              <span style={{ color: "#c8973a", fontStyle: "italic" }}>
                Adopt
              </span>
            </span>
          </Link>

          <div className="mb-7">
            <h2
              className="text-white font-bold mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.5rem",
              }}
            >
              Sign in
            </h2>
            <p
              className="text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
            >
              New here?{" "}
              <Link
                href="/auth/signup"
                style={{ color: "#c8973a", textDecoration: "none" }}
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* Google */}
          <div className="mb-5">
            <SignUpWithGoogle />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(200,151,58,0.1)" }}
            />
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Mono', monospace", color: "#3d3329" }}
            >
              or continue with email
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(200,151,58,0.1)" }}
            />
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 px-4 py-2.5 rounded-xl text-sm"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "rgba(181,110,110,0.1)",
                border: "1px solid rgba(181,110,110,0.3)",
                color: "#b56e6e",
              }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 tracking-wide uppercase"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: emailFocused ? "#c8973a" : "#4a3f35",
                }}
              >
                Email
              </label>
              <div
                className="flex items-center rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: emailFocused
                    ? "1px solid rgba(200,151,58,0.5)"
                    : "1px solid rgba(200,151,58,0.15)",
                }}
              >
                <FiMail
                  className="ml-4 flex-shrink-0"
                  style={{
                    color: emailFocused ? "#c8973a" : "#3d3329",
                    width: 15,
                    height: 15,
                  }}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder="your@email.com"
                  className="flex-1 h-12 px-3 bg-transparent outline-none text-sm"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#d4b896",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 tracking-wide uppercase"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: passwordFocused ? "#c8973a" : "#4a3f35",
                }}
              >
                Password
              </label>
              <div
                className="flex items-center rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: passwordFocused
                    ? "1px solid rgba(200,151,58,0.5)"
                    : "1px solid rgba(200,151,58,0.15)",
                }}
              >
                <FiLock
                  className="ml-4 flex-shrink-0"
                  style={{
                    color: passwordFocused ? "#c8973a" : "#3d3329",
                    width: 15,
                    height: 15,
                  }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  placeholder="••••••••"
                  className="flex-1 h-12 px-3 bg-transparent outline-none text-sm"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#d4b896",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="px-4 flex-shrink-0"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#4a3f35",
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <IoEyeOutline style={{ width: 16, height: 16 }} />
                  ) : (
                    <IoEyeOffOutline style={{ width: 16, height: 16 }} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label
                className="flex items-center gap-2 text-xs cursor-pointer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#6b5e50",
                }}
              >
                <input
                  type="checkbox"
                  className="accent-[#c8973a] w-3.5 h-3.5"
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={onOpen}
                className="text-xs transition-colors duration-150"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#c8973a",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "#e0aa50")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "#c8973a")
                }
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: loading ? "rgba(200,151,58,0.5)" : "#c8973a",
                color: "#0f0d0a",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!loading)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#e0aa50";
              }}
              onMouseLeave={(e) => {
                if (!loading)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#c8973a";
              }}
            >
              {loading ? (
                <>
                  <IoPaw
                    className="animate-spin"
                    style={{ width: 16, height: 16 }}
                  />
                  Signing in…
                </>
              ) : (
                <>
                  <IoPaw style={{ width: 15, height: 15 }} />
                  Sign in
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <p
            className="text-center text-[11px] mt-6"
            style={{ fontFamily: "'DM Mono', monospace", color: "#3d3329" }}
          >
            By signing in you agree to our{" "}
            <Link href="#" style={{ color: "#c8973a", textDecoration: "none" }}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" style={{ color: "#c8973a", textDecoration: "none" }}>
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;