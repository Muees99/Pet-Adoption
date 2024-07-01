import { motion } from "framer-motion";
import React from "react";

function AdoptProcess() {
  return (
    <div className="w-full sm:h-screen h-full bg-[#000]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] flex flex-col justify-center items-center sm:h-screen">
        <div className="text-center my-10">
          <h2 className="text-white text-2xl md:text-4xl sm:text-2xl leading-[140%] font-semibold">
            Adoption Process Information
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start w-full text-white h-full overflow-y-auto">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mt-10">Choose A Pet</h3>
              <p className="mt-4">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mt-10">Meet Us</h3>
              <p className="mt-4">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mt-10">Fill The Adoption Form</h3>
              <p className="mt-4">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mt-10">Take Your Pet Home</h3>
              <p className="mt-4">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <img
              src="/assets/AdoptProcess.svg"
              alt="Description of image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptProcess;


