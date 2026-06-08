// "use client";

// import { BsArrowUp } from "react-icons/bs";

// import useWindowHeight from "@/hooks/useDimension";
// import React from "react";
// import cn from "@/app/utils/twcx";

// const GotoTop = () => {
//   const scrollY = useWindowHeight();

//   const handleTop = () => {
//     if (!window) return;
//     window && window.scrollTo(0, 0);
//   };

//   return (
//     <div
//       role="button"
//       className={cn(
//         "max-[400px]:scale-75 text-xl pt-1 px-1 sm:text-4xl rounded  sm:rounded-lg fixed bottom-1 right-2 sm:bottom-10 sm:right-5 z-50 select-none flex flex-col items-center border border-primary text-primary transition-all duration-1000 bg-white/60 backdrop-blur-xl cursor-pointer active:scale-75 active:duration-300",
//         scrollY > 1500
//           ? "opacity-100 translate-x-0 shadow-[0_0_40px_0_rgba(0,0,0,0.16)]"
//           : "opacity-0 translate-x-10"
//       )}
//       onClick={handleTop}
//     >
//       <BsArrowUp />
//       <span className="text-[10px] sm:text-sm ">Top</span>
//     </div>
//   );
// };

// export default GotoTop;

"use client";

import { IoPaw } from "react-icons/io5";
import useWindowHeight from "@/hooks/useDimension";
import React from "react";

const GotoTop = () => {
  const scrollY = useWindowHeight();

  const handleTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Back to top"
      onClick={handleTop}
      className="fixed bottom-6 right-5 z-50 select-none flex flex-col items-center gap-1 px-3 py-2.5 rounded-2xl transition-all duration-500 cursor-pointer active:scale-90"
      style={{
        background: "rgba(15, 13, 8, 0.85)",
        border: "1px solid rgba(200,151,58,0.35)",
        backdropFilter: "blur(14px)",
        boxShadow:
          scrollY > 1500
            ? "0 0 0 1px rgba(200,151,58,0.15), 0 8px 32px rgba(0,0,0,0.4)"
            : "none",
        opacity: scrollY > 1500 ? 1 : 0,
        transform: scrollY > 1500 ? "translateY(0)" : "translateY(16px)",
        pointerEvents: scrollY > 1500 ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(200,151,58,0.7)";
        (e.currentTarget as HTMLButtonElement).style.background =
          "rgba(200,151,58,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(200,151,58,0.35)";
        (e.currentTarget as HTMLButtonElement).style.background =
          "rgba(15,13,8,0.85)";
      }}
    >
      <IoPaw
        style={{
          width: 18,
          height: 18,
          color: "#c8973a",
          transform: "rotate(-30deg)",
        }}
      />
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          color: "#c8973a",
          textTransform: "uppercase",
        }}
      >
        Top
      </span>
    </button>
  );
};

export default GotoTop;