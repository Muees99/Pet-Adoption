// "use client";
// import { useStateCtx } from "@/context/StateContext";
// import { NAVLINKS } from "@/app/libs/constant";
// import cn from "@/app/utils/twcx";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { BsX } from "react-icons/bs";
// import { CiLogin, CiLogout } from "react-icons/ci";
// import Button from "@/components/Ui/Button";

// const MobileNav = () => {
//   const { showMobileMenu, setShowMobileMenu } = useStateCtx();
//   const [isActive, setIsActive] = useState("");
//   const searchParams = useSearchParams().get("path");

//   useEffect(() => {
//     if (searchParams) {
//       setIsActive(searchParams);
//     }
//   }, [searchParams]);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setShowMobileMenu(false);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [setShowMobileMenu]);

//   const handleCloseMenu = () => {
//     setShowMobileMenu(false);
//   };

//   return (
//     <>
//       {showMobileMenu && (
//         <div
//           className="fixed inset-0 bg-black/50 z-20"
//           onClick={handleCloseMenu}
//         />
//       )}
//       <nav
//         className={cn(
//           "fixed inset-y-0 right-0 w-80 bg-white/30 backdrop-blur-lg flex flex-col items-center p-6 z-50 transition-transform duration-300",
//           showMobileMenu ? "translate-x-0" : " translate-x-full"
//         )}
//       >
//         <Button
//           aria-label="close menu"
//           type="button"
//           className="outline-none text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full border focus:border-2 focus-visible:border-primary  flex justify-center items-center"
//           onClick={handleCloseMenu}
//         >
//           <BsX />
//         </Button>
//         <div className="flex flex-col items-start gap-4 mt-8">
//           {NAVLINKS.map((link) => (
//             <Link
//               href={link.link === "home" ? "/?path=home" : `/${link.link}`}
//               key={link.id}
//               onClick={() => {
//                 setIsActive(link.link);
//                 setShowMobileMenu(false);
//               }}
//               className={cn(
//                 "text-black relative font-medium text-lg capitalize before:bg- before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
//                 isActive === link.link ? "before:w-full text-primary-light" : ""
//               )}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//         <div className="flex flex-col items-center gap-4 mt-auto">
//           <Button
//             href="/"
//             type="button"
//             className="bg-[#ffffff] focus:bg-[#807500] px-8 py-2 rounded-md font-medium  border border-[#484646] text-black"
//           >
//             Login
//             <CiLogin className="ml-2" />
//           </Button>
//           <Button
//             href="/"
//             type="button"
//             className="bg-[#484646] focus:bg-[#807500] px-8 py-2 rounded-md font-medium text-white"
//           >
//             Sign Up
//             <CiLogout className="ml-2" />
//           </Button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default MobileNav;

"use client";

import { useStateCtx } from "@/context/StateContext";
import { NAVLINKS } from "@/app/libs/constant";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { IoPaw } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) setIsActive(searchParams);
  }, [searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMobileMenu(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setShowMobileMenu]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  const handleClose = () => setShowMobileMenu(false);

  return (
    <AnimatePresence>
      {showMobileMenu && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40"
            style={{
              background: "rgba(5,3,1,0.7)",
              backdropFilter: "blur(4px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          {/* ── Drawer ── */}
          <motion.nav
            key="drawer"
            className="fixed inset-y-0 right-0 z-50 flex flex-col w-[300px] max-w-[85vw]"
            style={{
              background: "#100d08",
              borderLeft: "1px solid rgba(200,151,58,0.15)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 50% 0%, #1e1508 0%, transparent 60%)",
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(200,151,58,0.4), transparent)",
              }}
            />

            {/* Watermark paw */}
            <IoPaw
              className="pointer-events-none absolute"
              style={{
                width: 180,
                height: 180,
                color: "#c8973a",
                opacity: 0.03,
                bottom: 20,
                right: -20,
              }}
            />

            <div className="relative z-10 flex flex-col h-full p-6">
              {/* ── Header row ── */}
              <div className="flex items-center justify-between mb-10">
                {/* Logo */}
                <Link
                  href="/?path=home"
                  onClick={handleClose}
                  className="flex items-center gap-2"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(200,151,58,0.15)",
                      border: "1px solid rgba(200,151,58,0.3)",
                    }}
                  >
                    <IoPaw
                      style={{ color: "#c8973a", width: 13, height: 13 }}
                    />
                  </div>
                  <span
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Paw
                    <span style={{ color: "#c8973a", fontStyle: "italic" }}>
                      Adopt
                    </span>
                  </span>
                </Link>

                {/* Close button */}
                <button
                  aria-label="Close menu"
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(200,151,58,0.08)",
                    border: "1px solid rgba(200,151,58,0.2)",
                    color: "#c8973a",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(200,151,58,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(200,151,58,0.08)";
                  }}
                >
                  <BsX style={{ width: 18, height: 18 }} />
                </button>
              </div>

              {/* ── Nav links ── */}
              <div className="flex flex-col gap-1 flex-1">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#3d3329",
                  }}
                >
                  Navigation
                </p>

                {NAVLINKS.map((link, i) => {
                  const active = isActive === link.link;
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={
                          link.link === "home"
                            ? "/?path=home"
                            : `/${link.link}?path=${link.link}`
                        }
                        onClick={() => {
                          setIsActive(link.link);
                          handleClose();
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl capitalize text-sm font-medium transition-all duration-200"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          textDecoration: "none",
                          background: active
                            ? "rgba(200,151,58,0.1)"
                            : "transparent",
                          color: active ? "#c8973a" : "#7a6a5a",
                          border: active
                            ? "1px solid rgba(200,151,58,0.25)"
                            : "1px solid transparent",
                        }}
                      >
                        <IoPaw
                          style={{
                            width: 12,
                            height: 12,
                            color: active ? "#c8973a" : "#3d3329",
                            flexShrink: 0,
                          }}
                        />
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* ── Auth buttons ── */}
              <div
                className="flex flex-col gap-3 pt-6 mt-6"
                style={{ borderTop: "1px solid rgba(200,151,58,0.1)" }}
              >
                <button
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "#c8973a",
                    color: "#0f0d0a",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#e0aa50";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#c8973a";
                  }}
                >
                  <CiLogin style={{ width: 16, height: 16 }} />
                  Sign In
                </button>

                <button
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "transparent",
                    color: "#c8973a",
                    border: "1px solid rgba(200,151,58,0.3)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(200,151,58,0.6)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(200,151,58,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(200,151,58,0.3)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                  }}
                >
                  Create Account
                </button>
              </div>

              {/* ── Footer note ── */}
              <p
                className="text-center text-[11px] mt-4"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "#3d3329",
                }}
              >
                Made with love for every paw 🐾
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;