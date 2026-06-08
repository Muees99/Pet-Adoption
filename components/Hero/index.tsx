// import Button from "@/components/Ui/Button";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { IoPaw } from "react-icons/io5";
// import { SiFurrynetwork } from "react-icons/si";

// function Hero() {
//   return (
//     <header className=" w-full sm:h-screen h-full bg-[#000]">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="  flex w-full h-full items-center">
//           <div className=" flex flex-col md:flex-row justify-between items-center w-full min-h-[550px]">
//             <div className="flex flex-col flex-1">
//               <div className="">
//                 <motion.h2
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-white text-3xl md:text-5xl sm:text-2xl  leading-[140%] font-semibold tracking-[0.063em] uppercase"
//                   style={{ fontFamily: "Noto Sans, sans-serif" }}
//                 >
//                   Adopt don&apos;t shop
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   className="font-normal mt-4 text-gray-400 sm:w-[500px] w-full"
//                 >
//                   &quot;Adopt a furry friend and make a paw-sitive difference in
//                   their life today&quot;
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.8 }}
//                   className="flex flex-col sm:flex-row mt-4 md:mt-8 w-full md:w-auto"
//                 >
//                   <Link href="#">
//                     <Button
//                       type="button"
//                       className="flex items-center  px-4 py-2 rounded-full font-medium text-[#FFF] bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] mb-6 sm:mb-0 sm:mr-4"
//                     >
//                       <IoPaw className="w-6 h-6" />
//                       <span> Let&apos;s Chat</span>
//                     </Button>
//                   </Link>
//                   <Link href="#">
//                     <Button
//                       type="button"
//                       className="flex items-center  px-4 py-2 rounded-full font-medium text-[#FFF] bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] mb-6 sm:mb-0 sm:mr-4"
//                     >
//                       <SiFurrynetwork className="w-6 h-6" />
//                       <span>Adopt Now</span>
//                     </Button>
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//             <div className=" flex flex-1">
//               <div className=" flex justify-end w-full ">
//                 <motion.div
//                   initial={{ opacity: 0, y: -50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 }}
//                 >
//                   <Image
//                     src="/assets/Doggo.svg"
//                     alt=" header banner"
//                     width={450}
//                     height={350}
//                     priority
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Hero;

"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoPaw } from "react-icons/io5";

const floatingPaws = [
  { top: "12%", left: "8%", size: 18, delay: 0.2, rotate: -20, opacity: 0.15 },
  { top: "70%", left: "4%", size: 12, delay: 0.5, rotate: 30, opacity: 0.1 },
  { top: "30%", right: "6%", size: 22, delay: 0.7, rotate: 15, opacity: 0.12 },
  { top: "80%", right: "10%", size: 14, delay: 0.3, rotate: -10, opacity: 0.1 },
  { top: "55%", left: "45%", size: 10, delay: 0.9, rotate: 45, opacity: 0.08 },
];

const stats = [
  { value: "12K+", label: "Pets Rehomed" },
  { value: "98%", label: "Happy Owners" },
  { value: "500+", label: "Shelters" },
];

export default function Hero() {
  return (
    <header className="relative w-full min-h-screen overflow-hidden bg-[#0f0d0a]">
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, #2a1f0a 0%, transparent 70%)",
        }}
      />

      {/* Floating paw prints */}
      {floatingPaws.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-0"
          style={{
            top: p.top,
            left: p.left,
            right: (p as { right?: string }).right,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: p.opacity, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: p.delay },
            scale: { duration: 0.6, delay: p.delay },
            y: {
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            },
          }}
        >
          <IoPaw
            style={{
              width: p.size,
              height: p.size,
              color: "#c8973a",
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Decorative accent line */}
      <motion.div
        className="absolute left-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c8973a] to-transparent z-10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        style={{ width: "100%" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[5%] flex items-center min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 py-24 md:py-0">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col flex-1 max-w-xl">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-[#c8973a]" />
              <span
                className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Pet Adoption
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
              }}
            >
              Adopt,{" "}
              <span className="italic" style={{ color: "#c8973a" }}>
                don&apos;t
              </span>
              <br />
              shop.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-[#a09080] text-base leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Every pet deserves a loving home. Browse hundreds of animals
              waiting to meet their forever family — one adoption changes
              everything.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link href="#">
                <button
                  className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
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
                  <IoPaw className="w-4 h-4" />
                  Adopt Now
                </button>
              </Link>

              <Link href="#">
                <button
                  className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "transparent",
                    color: "#d4b896",
                    border: "1px solid rgba(200,151,58,0.35)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(200,151,58,0.7)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#c8973a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(200,151,58,0.35)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#d4b896";
                  }}
                >
                  Meet the Pets
                </button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex gap-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[#6b5e50] text-xs tracking-wide uppercase mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-1 justify-center md:justify-end relative">
            {/* Background circle */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: "clamp(280px, 40vw, 480px)",
                height: "clamp(280px, 40vw, 480px)",
                background:
                  "radial-gradient(circle, #1e1508 0%, transparent 70%)",
                border: "1px solid rgba(200,151,58,0.12)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Orbit ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "clamp(320px, 45vw, 540px)",
                height: "clamp(320px, 45vw, 540px)",
                border: "1px dashed rgba(200,151,58,0.15)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              }}
            />

            {/* Dog image */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              style={{
                filter: "drop-shadow(0 30px 60px rgba(200,151,58,0.15))",
              }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/Doggo.svg"
                  alt="Adopt a pet"
                  width={460}
                  height={400}
                  priority
                  style={{
                    maxWidth: "clamp(220px, 35vw, 460px)",
                    height: "auto",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute z-20 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
              style={{
                background: "rgba(20,15,5,0.85)",
                border: "1px solid rgba(200,151,58,0.3)",
                backdropFilter: "blur(12px)",
                bottom: "18%",
                left: "0%",
                fontFamily: "'DM Sans', sans-serif",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(200,151,58,0.2)" }}
              >
                <IoPaw style={{ color: "#c8973a", width: 16, height: 16 }} />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-semibold">
                  New arrivals
                </span>
                <span className="text-[#8a7060] text-[11px]">
                  24 pets this week
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}