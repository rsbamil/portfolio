import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="min-h-screen my-4 px-4">
      {/* Heading */}
      <div className="relative inline-block text-center group mt-10 mb-10 mx-auto">
        <span className="text-gray-200 font-extrabold text-3xl sm:text-4xl">
          About Me
        </span>
        <span className="block h-0.5 bg-violet-600 w-0 group-hover:w-full transition-all duration-300"></span>
      </div>

      {/* Container */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full max-w-6xl mx-auto">
        {/* Image with animation */}
        <motion.div
          className="my-10 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            damping: 30,
            stiffness: 300,
          }}
        >
          <img
            className="object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full filter shadow-lg ring-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:scale-105 transition duration-300"
            src="/Profile.jpg"
            alt="Profile"
          />
        </motion.div>

        {/* Text Content with animation */}
        <motion.div
          className="md:w-1/2 text-left border p-4 bg-gray-300 shadow-lg rounded-2xl drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:scale-110 duration-200 transition-all ease-in"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            damping: 50,
            stiffness: 100,
          }}
        >
          <ul className="text-zinc-800 font-semibold text-base sm:text-lg md:text-xl leading-relaxed list-disc list-inside">
            <li>
              🚀 I’m <strong>Rohit Kumar</strong>, a passionate{" "}
              <strong>full-stack developer</strong> and{" "}
              <strong>Computer Science undergrad</strong> at{" "}
              <strong>GLA University</strong>.
            </li>
            <li>
              💡 Specialize in building{" "}
              <strong>scalable, responsive web applications</strong> using{" "}
              <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
              <strong>MySQL</strong>.
            </li>
            <li>
              🌩 Recently trained in <strong>AWS & Cloud Computing</strong>.
            </li>
            <li>
              💻 Solved <strong>400+ DSA problems</strong> on{" "}
              <strong>LeetCode</strong> with a current{" "}
              <strong>rating of 1563</strong>.
            </li>
            <li>
              🔍 Actively seeking{" "}
              <strong>internship/full-time opportunities</strong> in{" "}
              <strong>software development</strong> to <strong>grow</strong> and{" "}
              <strong>contribute to meaningful projects</strong>.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
