// import { motion } from "framer-motion";
// import React from "react";

// function Catalogue() {
//   return (
//     <div className=" w-full sm:h-screen h-full bg-[#000]">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="  flex w-full h-full items-center">
//           <div className=" flex flex-col md:flex-row justify-between  w-full min-h-[550px]">
//             <div className="flex flex-col flex-1">
//               <div className="">
//                 <motion.h2
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-white text-3xl md:text-5xl sm:text-2xl  font-normal  uppercase"
//                   style={{ fontFamily: "Noto Sans, sans-serif" }}
//                 >
//                   Adopt don&apos;t shop
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   className="font-normal mt-4 text-white sm:w-[500px] w-full"
//                 >
//                   "Adopt a furry friend and make a paw-sitive difference in
//                   their life today" Catalogue
//                 </motion.p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Catalogue;

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Image from "next/image";

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
      image: "/image1.jpg",
      title: "Card Title 1",
      description: "Card description goes here...",
    },
    {
      image: "/image2.jpg",
      title: "Card Title 2",
      description: "Card description goes here...",
    }
  ];

  return (
    <div className="w-full sm:h-screen h-full bg-[#000]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex w-full h-full items-center">
          <div className="flex flex-col md:flex-row justify-between w-full min-h-[550px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4 bg-transparent w-full">
                <Image
                  src="/assets/Lebrado.svg"
                  alt="Descriptive image alt text"
                  width={150}
                  height={150}
                  className="mr-4 rounded-full object-cover"
                />
                <div className=" flex flex-col">
                  <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=" text-white text-3xl md:text-5xl sm:text-2xl font-normal"
                    style={{ fontFamily: "Noto Sans, sans-serif" }}
                  >
                    They need your love and support
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className=" font-normal mt-4  text-gray-400 sm:w-[500px] w-full"
                  >
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                    vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum tellus.
                  </motion.p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence>
                  {cardData.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={150}
                        height={150}
                        className=" mb-2 rounded-full object-cover"
                      />
                      <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                      <p className="text-gray-700 text-sm">
                        {card.description}
                      </p>
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
