import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Image from "next/image";
import Button from "@/app/Ui/Button";
import { IoIosArrowForward } from "react-icons/io";

type CardVariant = {
  hidden: { opacity: number; y: number };
  visible: { opacity: number; y: number };
};

const cardVariants: CardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Catalogue: React.FC = () => {
  const cardData = [
    {
      image: "/assets/Pitbull.svg",
      title: "PIT BULL",
      age: "11 months old",
      description: "Protective and watchful",
    },
    {
      image: "/assets/Mastiff.svg",
      title: "MASTIFF",
      age: "4 months old",
      description: "Affectionate and friendly",
    },
    {
      image: "/assets/Bernese.svg",
      title: "BERNESE",
      age: "5 months old",
      description: "Gentle and Affectionate",
    },
    {
      image: "/assets/Husky.svg",
      title: "HUSKY",
      age: "4 months old",
      description: "Energetic and friendly ",
    },
    {
      image: "/assets/Pinscher.svg",
      title: "PINSCHER",
      age: "9 months old",
      description: "Loyal, alert and watchful",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#000]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        {/* Introductory Section */}
        <div className="bg-[#454746] rounded-md p-8 flex flex-col md:flex-row items-center">
          <div className="relative w-24 h-24 md:w-1/3 md:h-48 mb-4 md:mb-0">
            <Image
              src="/assets/Fur.png"
              alt="Descriptive image alt text"
              layout="fill"
              className=""
            />
          </div>
          <div className="flex-1 md:ml-8">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-3xl md:text-4xl sm:text-2xl font-normal mb-4"
              style={{ fontFamily: "Noto Sans, sans-serif" }}
            >
              They need your love and support
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm md:text-base mb-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </motion.p>
            <div className="flex justify-center">
              <Button className="flex items-center px-4 py-2 rounded-full font-medium text-white bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500]">
                More <IoIosArrowForward />
              </Button>
            </div>
          </div>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 p-4 flex-1 overflow-y-auto">
          <AnimatePresence>
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white rounded-lg shadow-md overflow-hidden"
                style={{ position: "relative" }}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="p-1 flex flex-col items-center text-center">
                  <div className="rounded-lg bg-gray-100 p-4 w-full">
                    <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                    <p className="text-gray-700 text-sm">{card.age}</p>
                    <p className="text-gray-700 text-sm">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
