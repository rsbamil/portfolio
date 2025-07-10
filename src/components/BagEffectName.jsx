import React, { useState } from "react";
import { motion } from "framer-motion";
const NameBagEffect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBag = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 10,
        duration: 1.5,
        delay: 2,
      }}
      className="w-[40%]  flex h-[500px] bg-transparent  bg-opacity-75"
    >
      {/* Right Side */}
      <div className="flex items-center justify-center relative overflow-hidden">
        <div className="text-center">
          <div className="ml-[20%] cursor-pointer relative" onClick={toggleBag}>
            {/* Top half */}
            <div
              className={`font-extrabold transition-transform duration-500 ${
                isOpen ? "-translate-y-16" : ""
              } text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              Coding
            </div>

            {/* Paragraph inside bag */}
            <div
              className={` transition-all duration-500 overflow-hidden ${
                isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex justify-between items-center gap-4">
                <a
                  href="https://leetcode.com/u/Rohit_kumar_45/"
                  target="_blank"
                >
                  <img
                    className="w-[100px] rounded-full object-cover hover:scale-103 duration-200 transition-all ease-in hover:border-2"
                    src="/CodingProfiles/Leetcode.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/rsbam23us/"
                  target="_blank"
                >
                  <img
                    className="w-[100px] rounded-full object-cover hover:scale-103 duration-200 transition-all ease-in hover:border-2"
                    src="/CodingProfiles/GFG.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://codeforces.com/profile/rohitbamil"
                  target="_blank"
                >
                  <img
                    className="w-[100px] rounded-full object-cover hover:scale-103 duration-200 transition-all ease-in hover:border-2"
                    src="/CodingProfiles/codeforces.webp"
                    alt=""
                  />
                </a>
              </ul>
            </div>

            {/* Bottom half */}
            <div
              className={`font-extrabold transition-transform duration-500 ${
                isOpen ? "translate-y-16" : ""
              } text-3xl sm:text-3xl md:text-5xl lg:text-6xl`}
            >
              Profiles
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NameBagEffect;
