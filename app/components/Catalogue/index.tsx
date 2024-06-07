// import { motion, AnimatePresence } from "framer-motion";
// import React from "react";
// import Image from "next/image";
// import Button from "@/app/Ui/Button";
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
//       title: "Card Title 1",
//       description: "Card description goes here...",
//     },
//     {
//       image: "/image2.jpg",
//       title: "Card Title 2",
//       description: "Card description goes here...",
//     },
//     {
//       image: "/image2.jpg",
//       title: "Card Title 2",
//       description: "Card description goes here...",
//     },
//     {
//       image: "/image2.jpg",
//       title: "Card Title 2",
//       description: "Card description goes here...",
//     },
//     {
//       image: "/image2.jpg",
//       title: "Card Title 2",
//       description: "Card description goes here...",
//     },
//     {
//       image: "/image2.jpg",
//       title: "Card Title 2",
//       description: "Card description goes here...",
//     },
//   ];

//   return (
//     <div className="w-full sm:h-screen h-full bg-[#000]">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="flex w-full h-full items-center">
//           <div className="flex flex-col md:flex-row justify-between w-full min-h-[550px]">
//             <div className="flex flex-col w-full">
//               <div className="flex flex-col md:flex-row items-center mb-4 bg-[#454746] border border-none rounded-md">
//                 <div className="relative md:w-24 md:h-24 m-4 hidden sm:block">
//                   {/* Image */}
//                   <Image
//                     src="/assets/Lebrado.svg"
//                     alt="Descriptive image alt text"
//                     layout="fill"
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div className="flex flex-col flex-grow m-4">
//                   {/* Title */}
//                   <motion.h3
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="text-white text-3xl md:text-5xl sm:text-2xl font-normal p-4 md:ml-0"
//                     style={{ fontFamily: "Noto Sans, sans-serif" }}
//                   >
//                     They need your love and support
//                   </motion.h3>
//                   {/* Description */}
//                   <motion.p
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     className="font-normal mt-4 p-4 md:ml-0 text-gray-400 sm:w-[500px] w-full"
//                   >
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
//                     dignissim, metus nec fringilla accumsan, risus sem
//                     sollicitudin lacus, ut interdum tellus elit sed risus.
//                     Maecenas eget condimentum velit, sit amet feugiat lectus.
//                   </motion.p>
//                 </div>
//               {/* Button */}
//               <div className="flex justify-center p-2">
//                 <Button className="flex items-center px-4 py-2 rounded-full font-medium text-[#FFF] bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] mt-4">
//                   More <IoIosArrowForward />
//                 </Button>
//               </div>
//               </div>
//               {/* Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-4">
//                 <AnimatePresence>
//                   {cardData.map((card, index) => (
//                     <motion.div
//                       key={index}
//                       variants={cardVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="hidden"
//                       className="bg-white rounded-full shadow-md p-4 flex flex-col items-center"
//                     >
//                       <div className="relative w-24 h-24 mb-2 sm:hidden">
//                         {/* Small device only placeholder */}
//                         <div className="w-full h-full bg-gray-300 "></div>
//                       </div>
//                       <div className="relative w-24 h-24 mb-2  hidden sm:block">
//                         {/* Image */}
//                         <Image
//                           src={card.image}
//                           alt={card.title}
//                           layout="fill"
//                           className="rounded-full object-cover"
//                         />
//                       </div>
//                       {/* Title */}
//                       <h3 className="text-lg font-medium mb-2">{card.title}</h3>
//                       {/* Description */}
//                       <p className="text-gray-700 text-sm">
//                         {card.description}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Catalogue;


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
      title: "Card Title 1",
      description: "Card description goes here...",
    },
    {
      image: "/assets/Mastiff.svg",
      title: "Card Title 2",
      description: "Card description goes here...",
    },
    {
      image: "/assets/Bernese.svg",
      title: "Card Title 3",
      description: "Card description goes here...",
    },
    {
      image: "/assets/Husky.svg",
      title: "Card Title 4",
      description: "Card description goes here...",
    },
    {
      image: "/assets/Pinscher.svg",
      title: "Card Title 5",
      description: "Card description goes here...",
    },

  ];

  return (
    <div className="w-full sm:h-screen h-full bg-[#000]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex w-full h-full items-center">
          <div className="flex flex-col md:flex-row justify-between w-full min-h-[550px]">
            <div className="flex flex-col w-full">
              <div className="flex flex-col md:flex-row items-center mb-4 bg-[#454746] border border-none rounded-md">
                <div className="relative md:w-24 md:h-24 m-4 hidden sm:block">
                  {/* Image */}
                  <Image
                    src="/assets/Lebrado.svg"
                    alt="Descriptive image alt text"
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col flex-grow m-4">
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-3xl md:text-4xl sm:text-2xl font-normal p-4 md:ml-0"
                    style={{ fontFamily: "Noto Sans, sans-serif" }}
                  >
                    They need your love and support
                  </motion.h3>
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-normal mt-2 p-4 md:ml-0 text-gray-400 sm:w-[500px] w-full"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                  </motion.p>
                </div>
                {/* Button */}
                <div className="flex justify-center p-2">
                  <Button className="flex items-center px-4 py-2 rounded-full font-medium text-[#FFF] bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] mt-4">
                    More <IoIosArrowForward />
                  </Button>
                </div>
              </div>
              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
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
                      {/* Image */}
                      <div className="relative w-full  h-56 ">
                        <Image
                          src={card.image}
                          alt={card.title}
                          layout="fill"
                          className="rounded-lg object-cover"
                        />
                      </div>
                      {/* Card Content */}
                      <div className="p-2">
                        <div className="rounded-lg bg-gray-100 p-4">
                          {/* Title */}
                          {/* <h3 className="text-md font-medium mb-1">
                            {card.title}
                          </h3> */}
                          {/* Description */}
                          <p className="text-gray-700 text-sm">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
