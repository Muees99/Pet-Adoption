// import { motion } from "framer-motion";
// import React from "react";
// import Image from "next/image";
// import Button from "@/components/Ui/Button";
// import { IoIosArrowForward } from "react-icons/io";

// type CardVariant = {
//   hidden: { opacity: number; y: number };
//   visible: { opacity: number; y: number };
// };

// const cardVariants: CardVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Catalogue: React.FC = () => {
//   const cardData = [
//     {
//       image: "/assets/Pitbull.svg",
//       title: "PIT BULL",
//       age: "11 months old",
//       description: "Protective and watchful",
//     },
//     {
//       image: "/assets/Mastiff.svg",
//       title: "MASTIFF",
//       age: "4 months old",
//       description: "Affectionate and friendly",
//     },
//     {
//       image: "/assets/Bernese.svg",
//       title: "BERNESE",
//       age: "5 months old",
//       description: "Gentle and Affectionate",
//     },
//     {
//       image: "/assets/Husky.svg",
//       title: "HUSKY",
//       age: "4 months old",
//       description: "Energetic and friendly ",
//     },
//     {
//       image: "/assets/Pinscher.svg",
//       title: "PINSCHER",
//       age: "9 months old",
//       description: "Loyal, alert and watchful",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-[#000]">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         {/* Introductory Section */}
//         <div className="bg-[#454746] rounded-md p-8 flex flex-col md:flex-row items-center">
//           <div className="relative w-24 h-24 md:w-1/3 md:h-48 mb-4 md:mb-0">
//             <Image
//               src="/assets/Fur.png"
//               alt="Descriptive image alt text"
//               layout="fill"
//               className=""
//             />
//           </div>
//           <div className="flex-1 md:ml-8">
//             <motion.h3
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-white text-3xl md:text-4xl sm:text-2xl font-normal mb-4"
//               style={{ fontFamily: "Noto Sans, sans-serif" }}
//             >
//               They need your love and support
//             </motion.h3>
//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-gray-400 text-sm md:text-base mb-4"
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
//               turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
//               nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
//               tellus elit sed risus. Maecenas eget condimentum velit, sit amet
//               feugiat lectus.
//             </motion.p>
//             <div className="flex justify-center">
//               <Button className="flex items-center px-4 py-2 rounded-full font-medium text-white bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500]">
//                 More <IoIosArrowForward />
//               </Button>
//             </div>
//           </div>
//         </div>
//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 p-4 flex-1 overflow-y-auto">
//           {cardData.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//               style={{ position: "relative" }}
//             >
//               <div className="relative w-full h-64">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
//                 <p className="text-gray-700 text-sm">{card.age}</p>
//                 <p className="text-gray-700 text-sm">{card.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Catalogue;

"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoPaw } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

const cardData = [
  {
    image: "/assets/Pitbull.svg",
    title: "Pit Bull",
    age: "11 months old",
    description: "Protective and watchful",
    tag: "Guard",
    tagColor: "#c8973a",
  },
  {
    image: "/assets/Mastiff.svg",
    title: "Mastiff",
    age: "4 months old",
    description: "Affectionate and friendly",
    tag: "Family",
    tagColor: "#7a9e6e",
  },
  {
    image: "/assets/Bernese.svg",
    title: "Bernese",
    age: "5 months old",
    description: "Gentle and affectionate",
    tag: "Gentle",
    tagColor: "#6e8db5",
  },
  {
    image: "/assets/Husky.svg",
    title: "Husky",
    age: "4 months old",
    description: "Energetic and friendly",
    tag: "Active",
    tagColor: "#b56e6e",
  },
  {
    image: "/assets/Pinscher.svg",
    title: "Pinscher",
    age: "9 months old",
    description: "Loyal, alert and watchful",
    tag: "Loyal",
    tagColor: "#9e7ab5",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Catalogue: React.FC = () => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const toggleLike = (i: number) =>
    setLiked((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="w-full bg-[#0f0d0a] py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #1e1508 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[5%]">
        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-[#c8973a]" />
              <span
                className="text-[#c8973a] text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Meet the pets
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
              }}
            >
              They need your{" "}
              <span className="italic" style={{ color: "#c8973a" }}>
                love
              </span>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-1 text-sm font-medium whitespace-nowrap"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#c8973a",
              textDecoration: "none",
            }}
          >
            View all pets <IoIosArrowForward />
          </motion.a>
        </div>

        {/* ── Banner callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-12 flex flex-col md:flex-row items-center gap-8 p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #1a1408 0%, #221b08 100%)",
            border: "1px solid rgba(200,151,58,0.18)",
          }}
        >
          {/* Decorative paw watermark */}
          <IoPaw
            className="absolute right-6 bottom-4 pointer-events-none"
            style={{ width: 120, height: 120, color: "#c8973a", opacity: 0.05 }}
          />

          <div
            className="relative flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(200,151,58,0.2)" }}
          >
            <Image
              src="/assets/Fur.png"
              alt="A shelter pet"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p
              className="text-[#c8973a] text-xs font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Why adopt?
            </p>
            <p
              className="text-white text-lg md:text-xl font-semibold leading-snug mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Thousands of animals are waiting for a second chance.
            </p>
            <p
              className="text-[#7a6a5a] text-sm leading-relaxed mb-6 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Shelter pets are just as loving, loyal, and unique as any other.
              When you adopt, you save a life — and gain a best friend for years
              to come.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#c8973a",
                color: "#0f0d0a",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "#e0aa50")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "#c8973a")
              }
            >
              Learn more <IoIosArrowForward />
            </a>
          </div>
        </motion.div>

        {/* ── Pet cards grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "#17130d",
                border: "1px solid rgba(200,151,58,0.12)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(200,151,58,0.4)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(200,151,58,0.12)")
              }
            >
              {/* Image area */}
              <div className="relative w-full h-56 overflow-hidden bg-[#1e1810]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tag badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    background: "rgba(15,13,10,0.75)",
                    color: card.tagColor,
                    border: `1px solid ${card.tagColor}40`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {card.tag}
                </div>

                {/* Like button */}
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: liked[i]
                      ? "rgba(200,151,58,0.9)"
                      : "rgba(15,13,10,0.65)",
                    border: "1px solid rgba(200,151,58,0.3)",
                    backdropFilter: "blur(8px)",
                    color: liked[i] ? "#0f0d0a" : "#c8973a",
                    cursor: "pointer",
                  }}
                  aria-label={`Like ${card.title}`}
                >
                  <FiHeart
                    style={{
                      width: 14,
                      height: 14,
                      fill: liked[i] ? "currentColor" : "none",
                    }}
                  />
                </button>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-4 gap-1">
                <h4
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-[#6b5e50] text-xs"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {card.age}
                </p>
                <p
                  className="text-[#9a8878] text-sm mt-1 leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {card.description}
                </p>

                {/* Adopt CTA */}
                <div className="mt-auto pt-4">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full text-xs font-semibold transition-all duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: "rgba(200,151,58,0.1)",
                      color: "#c8973a",
                      border: "1px solid rgba(200,151,58,0.25)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "#c8973a";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#0f0d0a";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(200,151,58,0.1)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#c8973a";
                    }}
                  >
                    <IoPaw style={{ width: 12, height: 12 }} />
                    Adopt me
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Catalogue;