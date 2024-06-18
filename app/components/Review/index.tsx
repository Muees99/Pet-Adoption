import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

// interface ReviewData {
//   header: string;
//   subheader: string;
//   content: string;
//   image: string;
// }

// const reviewData: ReviewData[] = [
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Alice Smith",
//     subheader: "Software Engineer",
//     content:
//       "I was blown away by the level of detail and innovation in their designs. They truly understand the tech landscape and how to create user-friendly experiences.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Bob Johnson",
//     subheader: "Tech Enthusiast",
//     content:
//       "The team's expertise in technology shines through in every aspect of their work. From UI design to functionality, they exceeded my expectations.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Carol Williams",
//     subheader: "Product Manager",
//     content:
//       "Working with them was a game-changer for our product. Their tech-driven approach led to significant improvements in user engagement and satisfaction.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "David Jones",
//     subheader: "IT Consultant",
//     content:
//       "Their attention to detail and deep understanding of technology trends make them stand out in the industry. I highly recommend their services for any tech-related project.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Eva Brown",
//     subheader: "Software Developer",
//     content:
//       "I've collaborated with many design teams, but none have impressed me as much as this one. Their tech-centric approach ensures that every design decision is backed by solid reasoning.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Frank Miller",
//     subheader: "Tech Blogger",
//     content:
//       "I've reviewed countless tech products and platforms, and I can confidently say that the work produced by this team is top-notch. They are setting new standards in the industry.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Gina Thompson",
//     subheader: "UX Designer",
//     content:
//       "As a fellow designer, I admire their commitment to pushing the boundaries of what's possible in tech design. Their creations are not only visually stunning but also highly functional.",
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Henry Clark",
//     subheader: "Tech Entrepreneur",
//     content:
//       "Their designs are not just aesthetically pleasing; they are strategically crafted to drive user engagement and retention. They have a keen eye for what works in the tech industry.",
//   },
//   // {
//   //   image: "/assets/ClientDP.svg",
//   //   header: "Irene Davis",
//   //   subheader: "Digital Marketer",
//   //   content:
//   //     "Their designs have played a crucial role in our marketing campaigns. They understand how technology can be leveraged to create compelling brand experiences that resonate with our audience.",
//   // },
// ];

// const Card: React.FC<ReviewData> = ({ header, subheader, content, image }) => (
//   <motion.div
//     className="card flex flex-col mr-2 p-5 border border-gray-200 rounded-md shadow-md relative mt-2"
//     style={{ width: "270px", minHeight: "198px" }}
//     whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: 50 }}
//     transition={{ duration: 0.5 }}
//   >
//     {/* Motion shapes */}
//     <motion.div
//       className="absolute top-0 left-0 w-full h-full"
//       style={{ pointerEvents: "none" }}
//     >
//       {/* Small animated circles */}
//       <motion.div
//         className="circle"
//         style={{
//           width: "10px",
//           height: "10px",
//           background: "red",
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
//           background: " blue",
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
//   </motion.div>
// );

// function Review() {
//   return (
//     <div className="w-full min-h-screen bg-[#000]">
//       {/* Review */}
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="  flex w-full h-full items-center  justify-center ">
//           <h2 className=" text-white text-2xl md:text-4xl sm:text-2xl leading-[140%] font-semibold m-4 ">
//             Happy Clients Review
//           </h2>
//         </div>
//         <div className=" text-[#c2bfbf] grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 ml-2 ">
//           {reviewData.map((review, index) => (
//             <Card key={index} {...review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Review;

// interface ReviewData {
//   header: string;
//   subheader: string;
//   content: string;
//   image: string;
//   rating: number; // Add rating property
// }

// const reviewData: ReviewData[] = [
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Alice Smith",
//     subheader: "Dog Lover",
//     content:
//       "Adopting from this platform was an incredible experience. My new furry friend has brought so much joy into my life!",
//     rating: 5,
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Bob Johnson",
//     subheader: "Animal Enthusiast",
//     content:
//       "The adoption process was smooth and the staff were extremely helpful. Highly recommend!",
//     rating: 4,
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Carol Williams",
//     subheader: "Pet Owner",
//     content:
//       "Found the perfect companion here. The team was very supportive throughout the adoption process.",
//     rating: 5,
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "David Jones",
//     subheader: "Pet Parent",
//     content:
//       "A wonderful platform for finding your new best friend. The variety of dogs available was impressive.",
//     rating: 4,
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Eva Brown",
//     subheader: "Dog Trainer",
//     content:
//       "This platform connects dogs with loving homes. The process was easy and stress-free.",
//     rating: 5,
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Frank Miller",
//     subheader: "Animal Advocate",
//     content:
//       "Great experience adopting a dog here. The support and guidance provided were top-notch.",
//     rating: 4,
//   },
//   {
//     image: "/assets/ClientDP.svg",
//     header: "Gina Thompson",
//     subheader: "Veterinarian",
//     content:
//       "Impressed by the professionalism and care taken to match dogs with suitable families.",
//     rating: 5,
//   },
//   {
//     image: "/assets/ClientDP.svg",
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
//     {/* Motion shapes */}
//     <motion.div
//       className="absolute top-0 left-0 w-full h-full"
//       style={{ pointerEvents: "none" }}
//     >
//       <motion.div
//         className="circle"
//         style={{
//           width: "10px",
//           height: "10px",
//           background: "red",
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
//           background: "blue",
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
//     <div className="rating mt-2">
//       {"★".repeat(rating)}
//       {"☆".repeat(5 - rating)}
//     </div>
//   </motion.div>
// );

// function Review() {
//   return (
//     <div className="w-full min-h-screen bg-[#000]">
//       {/* Review */}
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="flex w-full h-full items-center justify-center">
//           <h2 className="text-white text-2xl md:text-4xl sm:text-2xl leading-[140%] font-semibold m-4">
//             Happy Clients Review
//           </h2>
//         </div>
//         <div className="text-[#c2bfbf] grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 ml-2">
//           {reviewData.map((review, index) => (
//             <Card key={index} {...review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Review;





interface ReviewData {
  header: string;
  subheader: string;
  content: string;
  image: string;
  rating: number;
}

const reviewData: ReviewData[] = [
  {
    image: "/assets/ClientDP.svg",
    header: "Alice Smith",
    subheader: "Dog Lover",
    content:
      "Adopting from this platform was an incredible experience. My new furry friend has brought so much joy into my life!",
    rating: 5,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Bob Johnson",
    subheader: "Animal Enthusiast",
    content:
      "The adoption process was smooth and the staff were extremely helpful. Highly recommend!",
    rating: 4,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Carol Williams",
    subheader: "Pet Owner",
    content:
      "Found the perfect companion here. The team was very supportive throughout the adoption process.",
    rating: 5,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "David Jones",
    subheader: "Pet Parent",
    content:
      "A wonderful platform for finding your new best friend. The variety of dogs available was impressive.",
    rating: 4,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Eva Brown",
    subheader: "Dog Trainer",
    content:
      "This platform connects dogs with loving homes. The process was easy and stress-free.",
    rating: 5,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Frank Miller",
    subheader: "Animal Advocate",
    content:
      "Great experience adopting a dog here. The support and guidance provided were top-notch.",
    rating: 4,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Gina Thompson",
    subheader: "Veterinarian",
    content:
      "Impressed by the professionalism and care taken to match dogs with suitable families.",
    rating: 5,
  },
  {
    image: "/assets/ClientDP.svg",
    header: "Henry Clark",
    subheader: "Dog Enthusiast",
    content:
      "Fantastic service and wonderful dogs. My new pet is a perfect match for my family.",
    rating: 5,
  },
];

const Card: React.FC<ReviewData> = ({
  header,
  subheader,
  content,
  image,
  rating,
}) => (
  <motion.div
    className="card flex flex-col mr-2 p-5 border border-gray-200 rounded-md shadow-md relative mt-2"
    style={{ width: "270px", minHeight: "198px" }}
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        className="circle"
        style={{
          width: "10px",
          height: "10px",
          background: "red",
          borderRadius: "50%",
          position: "absolute",
        }}
        animate={{
          x: [0, 10, 0],
          y: [0, 10, 0],
          rotate: [0, 180, 360],
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="circle"
        style={{
          width: "20px",
          height: "20px",
          background: "blue",
          borderRadius: "50%",
          position: "absolute",
        }}
        animate={{
          x: [0, -10, 0],
          y: [0, -10, 0],
          rotate: [0, 180, 360],
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>

    <div className="card-header flex items-center mb-4">
      <Image src={image} alt={header} width={62} height={62} className="mr-2" />
      <div>
        <h3 className="text-lg font-semibold">{header}</h3>
        <h4 className="text-sm text-gray-500">{subheader}</h4>
      </div>
    </div>
    <div className="card-content">
      <p>{content}</p>
    </div>
    <div className="rating mt-2">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  </motion.div>
);

function Review() {
  return (
    <div className="w-full min-h-screen bg-[#000]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex w-full h-full items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl sm:text-2xl leading-[140%] font-semibold m-4">
            Happy Clients Review
          </h2>
        </div>
        <div className=" text-[#c2bfbf] ribbon-container">
          <motion.div className="ribbon-track gap-4">
            {reviewData.map((review, index) => (
              <Card key={index} {...review} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Review;
