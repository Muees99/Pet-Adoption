import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Button from "@/app/Ui/Button";
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
      "The adoption process was smooth and the staff were extremely helpful. Highly recommend!",
    rating: 4,
  },
  {
    image: "/assets/Carol.svg",
    header: "Carol Williams",
    subheader: "Pet Owner",
    content:
      "Found the perfect companion here. The team was very supportive throughout the adoption process.",
    rating: 5,
  },
  {
    image: "/assets/David.svg",
    header: "David Jones",
    subheader: "Pet Parent",
    content:
      "A wonderful platform for finding your new best friend. The variety of dogs available was impressive.",
    rating: 4,
  },
  {
    image: "/assets/Eva.svg",
    header: "Eva Brown",
    subheader: "Dog Trainer",
    content:
      "This platform connects dogs with loving homes. The process was easy and stress-free.",
    rating: 5,
  },
  {
    image: "/assets/Frank.svg",
    header: "Frank Miller",
    subheader: "Animal Advocate",
    content:
      "Great experience adopting a dog here. The support and guidance provided were top-notch.",
    rating: 4,
  },
  {
    image: "/assets/Gina.svg",
    header: "Gina Thompson",
    subheader: "Veterinarian",
    content:
      "Impressed by the professionalism and care taken to match dogs with suitable families.",
    rating: 5,
  },
  {
    image: "/assets/Henry.svg",
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
          background: "ivory",
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
          background: "olive",
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
    <div
      className="rating mt-2 
     text-amber-300"
    >
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
        <div className="flex flex-col justify-center items-center">
          <div className=" flex  flex-col justify-center items-center text-white">
            <h2 className=" text-xl md:text-2xl sm:text-lg leading-[140%] font-semibold mt-4">
              Sign up for our newsletter
            </h2>
            <p className=" mt-2">
              Subscribe to our newsletter and enjoy a 30% discount on our pet
              adoption services and veterinary clinic.
            </p>
          </div>
          <div className="relative flex items-center mt-4">
            <input
              className="w-full p-4 pr-40 font-medium placeholder-opacity-100 border rounded-full focus:outline-none bg-gray-100"
              type="text"
              placeholder="contact@petadoption.com"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#807500] hover:bg-[#47431c86] focus:bg-[#807500] text-white text-sm font-medium leading-snug text-center rounded-full px-4 py-2 flex items-center ">
              <MdOutlineUnsubscribe className="w-6 h-6 " />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
