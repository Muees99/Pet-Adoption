// "use client";

// import { NAVLINKS } from "@/app/libs/constant";
// import Image from "next/image";
// import cn from "@/app/utils/twcx";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { FaBars } from "react-icons/fa";
// import MobileNav from "../MobileNav";
// import { useStateCtx } from "@/context/StateContext";
// import useWindowHeight from "@/hooks/useDimension";
// import Button from "@/components/Ui/Button";
// import { CiLogin, CiLogout } from "react-icons/ci";
// import { IoPaw } from "react-icons/io5";
// import { BsSearchHeart } from "react-icons/bs";

// const Navbar = () => {
//   const { showMobileMenu, setShowMobileMenu } = useStateCtx();
//   const searchParams = useSearchParams().get("path");
//   const scrollHeight = useWindowHeight();
//   const router = useRouter();

//   const [isActive, setIsActive] = useState("");
//   useEffect(() => {
//     if (searchParams) {
//       setIsActive(searchParams);
//       return;
//     }
//   }, [searchParams]);

//   return (
//     <header className="w-full ">
//       <nav
//         className={cn(
//           "max-[500px]:py-2 shadow-lg font-montserrat sm:px-[5%] px-[4%] h-[12vh] flex shadow-slate-800/20 justify-between items-center transition-colors duration-500 max-w-[1440px] mx-auto",
//           scrollHeight > 200
//             ? "fixed backdrop-blur-xl top-0 left-0 z-50 -translate-y-28 opacity-0 animate-slideDown bg-white-100 py-3 border-b border-gray-200 shadow-md"
//             : "md:py-3 py-3",
//           {
//             "bg-white/60": scrollHeight > 800 && scrollHeight < 4300,
//           }
//         )}
//       >
//         <Link
//           href="/?path=home"
//           className={cn(
//             "max-sm:w-[120px] max-[450px]:w-[100px]",
//             scrollHeight > 200 ? "w-[120px] " : "w-fit",
//             "animate-pulse" // Apply the pulse animation
//           )}
//         >
//           <span className=" flex text-black text-lg lg:text-2xl font-bold">
//             <IoPaw />
//             Pet Care
//           </span>
//         </Link>

//         <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10">
//           {NAVLINKS.map((link) => (
//             <Link
//               href={
//                 link.link === "home"
//                   ? "/?path=home"
//                   : `${link.link}?path=${link.link}`
//               }
//               key={link.id}
//               onClick={() => {
//                 setIsActive(link.link);
//               }}
//               className={cn(
//                 "text-[#b8ae3d] capitalize text-base relative font-medium  before:bg-yellow-200 before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
//                 isActive === link.link ? "before:w-full text-yellow-200" : "",
//                 "hover:text-[#dcbf2de7]"
//               )}
//             >
//               <span>{link.label}</span>
//             </Link>
//           ))}
//         </div>

//         <div className="hidden lg:flex gap-x-3 xl:gap-x-5">
//           {/* <Button
//             href="/"
//             type="button"
//             className="bg-[#ffffff] hover:bg-[#9d997886] focus:bg-[#807500] px-4 py-2 rounded-md font-medium border border-[#484646] text-black"
//           >
//             Login
//             <CiLogin />
//           </Button> */}
//           <div className="relative flex-1">
//             <BsSearchHeart className="absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               className=" pl-10  px-4 py-2 font-medium placeholder-opacity-100 border rounded-full focus:outline-none bg-transparent"
//               type="text"
//               placeholder="Search your preferred Breed"
//             />
//           </div>
//           <Button
//             // href="/auth/login"
//             // type="button"
//             isLoading={false}
//             onClick={() => {
//               router.push("/auth/login");
//             }}
//             className="bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] px-4 py-2 rounded-full font-medium text-white"
//           >
//             <CiLogin className=" text-black" />
//             {/* <CiLogout /> */}
//           </Button>
//         </div>

//         <div
//           tabIndex={0}
//           className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
//           onClick={() => setShowMobileMenu(true)}
//         >
//           <FaBars className=" text-gray-500" />
//         </div>
//         <MobileNav />
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import { NAVLINKS } from "@/app/libs/constant";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "../MobileNav";
import { useStateCtx } from "@/context/StateContext";
import useWindowHeight from "@/hooks/useDimension";
import { CiLogin } from "react-icons/ci";
import { IoPaw } from "react-icons/io5";
import { BsSearchHeart } from "react-icons/bs";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const router = useRouter();
  const [isActive, setIsActive] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    if (searchParams) setIsActive(searchParams);
  }, [searchParams]);

  const isScrolled = scrollHeight > 60;

  return (
    <header className="w-full">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3 border-b" : "py-5",
        )}
        style={{
          background: isScrolled ? "rgba(10, 8, 5, 0.88)" : "transparent",
          borderColor: isScrolled ? "rgba(200,151,58,0.12)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
        }}
      >
        {/* Top amber accent line — only when scrolled */}
        {isScrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(200,151,58,0.35), transparent)",
            }}
          />
        )}

        <div className="max-w-[1440px] mx-auto px-[5%] flex items-center justify-between">
          {/* ── Logo ── */}
          <Link
            href="/?path=home"
            onClick={() => setIsActive("home")}
            className="flex items-center gap-2 group"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(200,151,58,0.15)",
                border: "1px solid rgba(200,151,58,0.3)",
              }}
            >
              <IoPaw style={{ color: "#c8973a", width: 15, height: 15 }} />
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

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-x-8">
            {NAVLINKS.map((link) => {
              const active = isActive === link.link;
              return (
                <Link
                  key={link.id}
                  href={
                    link.link === "home"
                      ? "/?path=home"
                      : `${link.link}?path=${link.link}`
                  }
                  onClick={() => setIsActive(link.link)}
                  className="relative text-sm font-medium capitalize transition-colors duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: active ? "#c8973a" : "#7a6a5a",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#d4b896";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#7a6a5a";
                  }}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      width: active ? "100%" : "0%",
                      background: "#c8973a",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── Desktop actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search input */}
            <div
              className="relative flex items-center transition-all duration-300"
              style={{ width: searchFocused ? 240 : 190 }}
            >
              <BsSearchHeart
                className="absolute left-3 pointer-events-none transition-colors duration-200"
                style={{
                  color: searchFocused ? "#c8973a" : "#4a3f35",
                  width: 14,
                  height: 14,
                }}
              />
              <input
                type="text"
                placeholder="Search a breed…"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-full transition-all duration-300 outline-none"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: searchFocused
                    ? "rgba(200,151,58,0.08)"
                    : "rgba(255,255,255,0.04)",
                  border: searchFocused
                    ? "1px solid rgba(200,151,58,0.45)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: "#d4b896",
                }}
              />
            </div>

            {/* Login button */}
            <button
              onClick={() => router.push("/auth/login")}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "rgba(200,151,58,0.12)",
                border: "1px solid rgba(200,151,58,0.3)",
                color: "#c8973a",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#c8973a";
                (e.currentTarget as HTMLButtonElement).style.color = "#0f0d0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(200,151,58,0.12)";
                (e.currentTarget as HTMLButtonElement).style.color = "#c8973a";
              }}
            >
              <CiLogin style={{ width: 16, height: 16 }} />
              Sign in
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: showMobileMenu
                ? "rgba(200,151,58,0.18)"
                : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(200,151,58,0.2)",
              color: "#c8973a",
              cursor: "pointer",
            }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <FaTimes style={{ width: 14, height: 14 }} />
            ) : (
              <FaBars style={{ width: 14, height: 14 }} />
            )}
          </button>
        </div>
      </nav>

      {/* Spacer so content doesn't sit under fixed nav */}
      <div className="h-[72px]" />

      <MobileNav />
    </header>
  );
};

export default Navbar;