import Button from "@/app/Ui/Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoPaw } from "react-icons/io5";
import { SiFurrynetwork } from "react-icons/si";

function Hero() {
  return (
    <header className=" w-full sm:h-screen h-full bg-[#000]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="  flex w-full h-full items-center">
          <div className=" flex flex-col md:flex-row justify-between items-center w-full min-h-[550px]">
            <div className="flex flex-col flex-1">
              <div className="">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white text-3xl md:text-5xl sm:text-2xl  leading-[140%] font-semibold tracking-[0.063em] uppercase"
                  style={{ fontFamily: "Noto Sans, sans-serif" }}
                >
                  Adopt don&apos;t shop
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-normal mt-4 text-gray-400 sm:w-[500px] w-full"
                >
                  &quot;Adopt a furry friend and make a paw-sitive difference in
                  their life today&quot;
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row mt-4 md:mt-8 w-full md:w-auto"
                >
                  <Link href="#">
                    <Button
                      type="button"
                      className="flex items-center  px-4 py-2 rounded-full font-medium text-[#FFF] bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] mb-6 sm:mb-0 sm:mr-4"
                    >
                      <IoPaw className="w-6 h-6" />
                      <span> Let&apos;s Chat</span>
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button
                      type="button"
                      className="flex items-center  px-4 py-2 rounded-full font-medium text-[#FFF] bg-[#837c3a86] hover:bg-[#dbd28086] focus:bg-[#807500] mb-6 sm:mb-0 sm:mr-4"
                    >
                      <SiFurrynetwork className="w-6 h-6" />
                      <span>Adopt Now</span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className=" flex flex-1">
              <div className=" flex justify-end w-full ">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Image
                    src="/assets/Doggo.svg"
                    alt=" header banner"
                    width={450}
                    height={350}
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
