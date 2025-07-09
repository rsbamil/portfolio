import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const projectDetails = [
    {
      title: "Ai Career Helper",
      description:
        "It is a web application that helps job seekers find relevant career",
      image: "/CareerCoach.png",
      view: "#",
      github: "https://github.com/rsbamil/Ai-Career-Coach",
    },
    {
      title: "Employee Management System ",
      description:
        "It is the employee management system that helps to manage the employees in a company.",
      image: "/EMS.jpg",
      view: "https://ems-sigma-pearl.vercel.app/",
      github: "https://github.com/rsbamil/Employee-Management-System",
    },
    {
      title: "Mocktail Animations",
      description:
        "It is a web application fully responsive and interactive  mocktail animations.",
      image: "/Mocktail.jpg",
      view: "https://mocktail-steel.vercel.app/",
      github: "https://github.com/rsbamil/mocktail",
    },
    {
      title: "Obys Agency Clone",
      description: "It is the fully animated clone of the Obys Agency Website",
      image: "/Obys.jpg",
      view: "https://obys-agency-flax.vercel.app/",
      github: "https://github.com/rsbamil/Obys-Agency",
    },
    {
      title: "Refokus Clone",
      description: "It is the fully animated clone of the Refokus Website",

      image: "/Refokus.png",
      view: "https://refocus-clone-gray.vercel.app/",
      github: "https://github.com/rsbamil/Refocus-Clone",
    },
    {
      title: "Media Player App",
      description:
        "It is a web application fully responsive and interactive media player app.",
      image: "/media-player.png",
      view: "#",
      github: "https://github.com/rsbamil/Media-Player",
    },
  ];
  const gridRef = useRef(null);
  // Detect if grid is in view
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  // Animation variants for staggered children
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-content my-4">
      <div className="relative inline-block  text-center group mx-30 mt-10 mb-10 ">
        <span className="text-gray-200 font-extrabold text-4xl ">Projects</span>
        <span className="block h-0.5 bg-violet-600 w-0 group-hover:w-full transition-all duration-300"></span>
      </div>
      {/* projects displayed here in grid */}
      <motion.div
        ref={gridRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative flex justify-center items-center gap-10 flex-wrap "
      >
        {projectDetails.map((project, index) => (
          <motion.div
            variants={itemVariants}
            transition={{ delay: index * 0.3, duration: 1.5 }}
            key={index}
            className=" hover:scale-105 duration-300 transition-all ease-in rounded-md overflow-hidden w-[300px] space-y-2 "
          >
            <img
              className="w-[300px] h-[300px] object-cover"
              src={project.image}
            />
            <h1 className="text-xl px-2">{project.title}</h1>
            <p className="text-gray-500 px-2">{project.description}</p>
            <div className="flex justify-between px-2">
              {project.view == "#" ? (
                "Preview Not Available"
              ) : (
                <a href={project.view} target="_blank">
                  View
                </a>
              )}
              <a href={project.github} target="_blank">
                Github Link
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
