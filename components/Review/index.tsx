// import { motion } from "framer-motion";
// import React from "react";
// import Image from "next/image";
// import Button from "@/components/Ui/Button";
// import { MdOutlineUnsubscribe } from "react-icons/md";

// interface ReviewData {
//   header: string;
//   subheader: string;
//   content: string;
//   image: string;
//   rating: number;
// }

// const reviewData: ReviewData[] = [
//   {
//     image: "/assets/Alice.svg",
//     header: "Alice Smith",
//     subheader: "Dog Lover",
//     content:
//       "Adopting from this platform was an incredible experience. My new furry friend has brought so much joy into my life!",
//     rating: 5,
//   },
//   {
//     image: "/assets/Bob.svg",
//     header: "Bob Johnson",
//     subheader: "Animal Enthusiast",
//     content:
//       "The adoption process was smooth and the staff were extremely helpful. Highly recommend!",
//     rating: 4,
//   },
//   {
//     image: "/assets/Carol.svg",
//     header: "Carol Williams",
//     subheader: "Pet Owner",
//     content:
//       "Found the perfect companion here. The team was very supportive throughout the adoption process.",
//     rating: 5,
//   },
//   {
//     image: "/assets/David.svg",
//     header: "David Jones",
//     subheader: "Pet Parent",
//     content:
//       "A wonderful platform for finding your new best friend. The variety of dogs available was impressive.",
//     rating: 4,
//   },
//   {
//     image: "/assets/Eva.svg",
//     header: "Eva Brown",
//     subheader: "Dog Trainer",
//     content:
//       "This platform connects dogs with loving homes. The process was easy and stress-free.",
//     rating: 5,
//   },
//   {
//     image: "/assets/Frank.svg",
//     header: "Frank Miller",
//     subheader: "Animal Advocate",
//     content:
//       "Great experience adopting a dog here. The support and guidance provided were top-notch.",
//     rating: 4,
//   },
//   {
//     image: "/assets/Gina.svg",
//     header: "Gina Thompson",
//     subheader: "Veterinarian",
//     content:
//       "Impressed by the professionalism and care taken to match dogs with suitable families.",
//     rating: 5,
//   },
//   {
//     image: "/assets/Henry.svg",
//     header: "Henry Clark",
//     subheader: "Dog Enthusiast",
//     content:
//       "Fantastic service and wonderful dogs. My new pet is a perfect match for my family.",
//     rating: 5,
//   },
// ];

// const Card: React.FC<ReviewData> = ({
//   header,
//   subheader,
//   content,
//   image,
//   rating,
// }) => (
//   <motion.div
//     className="card flex flex-col mr-2 p-5 border border-gray-200 rounded-md shadow-md relative mt-2"
//     style={{ width: "270px", minHeight: "198px" }}
//     whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: 50 }}
//     transition={{ duration: 0.5 }}
//   >
//     <motion.div
//       className="absolute top-0 left-0 w-full h-full"
//       style={{ pointerEvents: "none" }}
//     >
//       <motion.div
//         className="circle"
//         style={{
//           width: "10px",
//           height: "10px",
//           background: "ivory",
//           borderRadius: "50%",
//           position: "absolute",
//         }}
//         animate={{
//           x: [0, 10, 0],
//           y: [0, 10, 0],
//           rotate: [0, 180, 360],
//           opacity: [1, 0.5, 1],
//         }}
//         transition={{ duration: 2, repeat: Infinity }}
//       />
//       <motion.div
//         className="circle"
//         style={{
//           width: "20px",
//           height: "20px",
//           background: "olive",
//           borderRadius: "50%",
//           position: "absolute",
//         }}
//         animate={{
//           x: [0, -10, 0],
//           y: [0, -10, 0],
//           rotate: [0, 180, 360],
//           opacity: [1, 0.5, 1],
//         }}
//         transition={{ duration: 2, repeat: Infinity }}
//       />
//     </motion.div>

//     <div className="card-header flex items-center mb-4">
//       <Image src={image} alt={header} width={62} height={62} className="mr-2" />
//       <div>
//         <h3 className="text-lg font-semibold">{header}</h3>
//         <h4 className="text-sm text-gray-500">{subheader}</h4>
//       </div>
//     </div>
//     <div className="card-content">
//       <p>{content}</p>
//     </div>
//     <div
//       className="rating mt-2
//      text-amber-300"
//     >
//       {"★".repeat(rating)}
//       {"☆".repeat(5 - rating)}
//     </div>
//   </motion.div>
// );

// function Review() {
//   return (
//     <div className="w-full min-h-screen bg-[#000]">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="flex w-full h-full items-center justify-center">
//           <h2 className="text-white text-2xl md:text-4xl sm:text-2xl leading-[140%] font-semibold m-4">
//             Happy Clients Review
//           </h2>
//         </div>
//         <div className=" text-[#c2bfbf] ribbon-container">
//           <motion.div className="ribbon-track gap-4">
//             {reviewData.map((review, index) => (
//               <Card key={index} {...review} />
//             ))}
//           </motion.div>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <div className=" flex  flex-col justify-center items-center text-white">
//             <h2 className=" text-xl md:text-2xl sm:text-lg leading-[140%] font-semibold mt-4">
//               Sign up for our newsletter
//             </h2>
//             <p className=" mt-2">
//               Subscribe to our newsletter and enjoy a 30% discount on our pet
//               adoption services and veterinary clinic.
//             </p>
//           </div>
//           <div className="relative flex items-center mt-4">
//             <input
//               className="w-full p-4 pr-40 font-medium placeholder-opacity-100 border rounded-full focus:outline-none bg-gray-100"
//               type="text"
//               placeholder="contact@petadoption.com"
//             />
//             <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#807500] hover:bg-[#47431c86] focus:bg-[#807500] text-white text-sm font-medium leading-snug text-center rounded-full px-4 py-2 flex items-center ">
//               <MdOutlineUnsubscribe className="w-6 h-6 " />
//               Subscribe
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Review;

"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { IoPaw } from "react-icons/io5";
import { MdOutlineUnsubscribe } from "react-icons/md";

interface ReviewData {
  header: string;
  subheader: string;
  content: string;
  image: string;
  rating: number;
}

const reviewData: ReviewData[] = [
  {
    image: "/assets/Alice.svg",
    header: "Alice Smith",
    subheader: "Dog Lover",
    content:
      "Adopting from this platform was an incredible experience. My new furry friend has brought so much joy into my life!",
    rating: 5,
  },
  {
    image: "/assets/Bob.svg",
    header: "Bob Johnson",
    subheader: "Animal Enthusiast",
    content:
      "The adoption process was smooth and the staff were extremely helpful. Highly recommend to anyone looking to adopt!",
    rating: 4,
  },
  {
    image: "/assets/Carol.svg",
    header: "Carol Williams",
    subheader: "Pet Owner",
    content:
      "Found the perfect companion here. The team was very supportive throughout the entire adoption process.",
    rating: 5,
  },
  {
    image: "/assets/David.svg",
    header: "David Jones",
    subheader: "Pet Parent",
    content:
      "A wonderful platform for finding your new best friend. The variety of dogs available was truly impressive.",
    rating: 4,
  },
  {
    image: "/assets/Eva.svg",
    header: "Eva Brown",
    subheader: "Dog Trainer",
    content:
      "This platform connects dogs with loving homes effortlessly. The process was easy and completely stress-free.",
    rating: 5,
  },
  {
    image: "/assets/Frank.svg",
    header: "Frank Miller",
    subheader: "Animal Advocate",
    content:
      "Great experience adopting a dog here. The support and guidance provided throughout were absolutely top-notch.",
    rating: 4,
  },
  {
    image: "/assets/Gina.svg",
    header: "Gina Thompson",
    subheader: "Veterinarian",
    content:
      "Impressed by the professionalism and care taken to match each dog with the most suitable family.",
    rating: 5,
  },
  {
    image: "/assets/Henry.svg",
    header: "Henry Clark",
    subheader: "Dog Enthusiast",
    content:
      "Fantastic service and wonderful dogs. My new pet is an absolute perfect match for my whole family.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? "#c8973a" : "#2a2218",
          fontSize: 14,
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const Card: React.FC<ReviewData> = ({
  header,
  subheader,
  content,
  image,
  rating,
}) => (
  <motion.div
    className="flex-shrink-0 flex flex-col p-5 rounded-2xl"
    style={{
      width: 280,
      minHeight: 200,
      background: "#17130d",
      border: "1px solid rgba(200,151,58,0.12)",
    }}
    whileHover={{
      borderColor: "rgba(200,151,58,0.35)",
      y: -4,
      transition: { duration: 0.2 },
    }}
  >
    {/* Quote mark */}
    <span
      className="text-4xl leading-none mb-3 select-none"
      style={{ color: "rgba(200,151,58,0.2)", fontFamily: "Georgia, serif" }}
    >
      &ldquo;
    </span>

    {/* Content */}
    <p
      className="text-sm leading-relaxed flex-1 mb-4"
      style={{ fontFamily: "'DM Sans', sans-serif", color: "#7a6a5a" }}
    >
      {content}
    </p>

    <StarRating rating={rating} />

    {/* Divider */}
    <div
      className="my-4 h-px w-full"
      style={{ background: "rgba(200,151,58,0.08)" }}
    />

    {/* Author */}
    <div className="flex items-center gap-3">
      <div
        className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
        style={{ border: "1px solid rgba(200,151,58,0.25)" }}
      >
        <Image src={image} alt={header} fill className="object-cover" />
      </div>
      <div>
        <p
          className="text-white text-sm font-semibold"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {header}
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: "'DM Mono', monospace", color: "#4a3f35" }}
        >
          {subheader}
        </p>
      </div>
    </div>
  </motion.div>
);

// Duplicate cards for seamless loop
const allCards = [...reviewData, ...reviewData];

function Review() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="w-full bg-[#0f0d0a] py-20 overflow-hidden relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, #1a1205 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[5%]">
        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-14">
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
              Testimonials
            </span>
            <div className="h-px w-8 bg-[#c8973a]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
            }}
          >
            Happy{" "}
            <span className="italic" style={{ color: "#c8973a" }}>
              families,
            </span>{" "}
            happy pets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm max-w-md"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
          >
            Thousands of adopters have found their perfect companion.
            Here&apos;s what some of them have to say.
          </motion.p>
        </div>
      </div>

      {/* ── Scrolling ribbon (full-bleed, no clip) ── */}
      <div className="relative w-full mb-6 overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{
            background: "linear-gradient(to right, #0f0d0a, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{
            background: "linear-gradient(to left, #0f0d0a, transparent)",
          }}
        />

        <motion.div
          ref={trackRef}
          className="flex gap-4 py-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ paddingLeft: "1rem" }}
        >
          {allCards.map((review, index) => (
            <Card key={index} {...review} />
          ))}
        </motion.div>
      </div>

      {/* Second row — reversed direction
      <div className="relative w-full mb-20 overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{
            background: "linear-gradient(to right, #0f0d0a, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{
            background: "linear-gradient(to left, #0f0d0a, transparent)",
          }}
        />

        <motion.div
          className="flex gap-4 py-2 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ paddingLeft: "1rem" }}
        >
          {allCards.map((review, index) => (
            <Card key={index} {...review} />
          ))}
        </motion.div>
      </div> */}

      {/* ── Newsletter ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden p-10 md:p-14 flex flex-col items-center text-center"
          style={{
            background: "linear-gradient(135deg, #1a1408 0%, #221b08 100%)",
            border: "1px solid rgba(200,151,58,0.18)",
          }}
        >
          {/* Decorative watermark */}
          <IoPaw
            className="pointer-events-none absolute"
            style={{
              width: 220,
              height: 220,
              color: "#c8973a",
              opacity: 0.04,
              bottom: -30,
              right: -30,
            }}
          />

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
            style={{
              background: "rgba(200,151,58,0.12)",
              border: "1px solid rgba(200,151,58,0.3)",
            }}
          >
            <MdOutlineUnsubscribe
              style={{ color: "#c8973a", width: 22, height: 22 }}
            />
          </div>

          <h3
            className="text-white font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
            }}
          >
            Stay in the{" "}
            <span className="italic" style={{ color: "#c8973a" }}>
              loop
            </span>
          </h3>

          <p
            className="text-sm mb-8 max-w-md"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5e50" }}
          >
            Subscribe to our newsletter and enjoy a{" "}
            <span style={{ color: "#c8973a" }}>30% discount</span> on adoption
            services and veterinary care.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(200,151,58,0.15)",
                border: "1px solid rgba(200,151,58,0.4)",
                color: "#c8973a",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <IoPaw style={{ width: 16, height: 16 }} />
              You&apos;re subscribed — welcome to the pack! 🐾
            </motion.div>
          ) : (
            <div
              className="flex items-center w-full max-w-md rounded-full overflow-hidden p-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(200,151,58,0.25)",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="contact@petadoption.com"
                className="flex-1 bg-transparent px-5 py-2.5 text-sm outline-none"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#d4b896",
                }}
              />
              <button
                onClick={handleSubscribe}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex-shrink-0"
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
                Subscribe
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Review;