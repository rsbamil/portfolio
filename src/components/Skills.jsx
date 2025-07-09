import React, { useEffect } from "react";
import techStackDetails from "../Details.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    vscode,
    postman,
    gsap,
    github,
    next,
    aws,
    java,
    mongo,
    node,
    shadcn,
  } = techStackDetails;

  const techStack = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: js, title: "JavaScript" },
    { src: react, title: "React" },
    { src: redux, title: "Redux" },
    { src: tailwind, title: "Tailwind CSS" },
    { src: bootstrap, title: "Bootstrap" },
    { src: gsap, title: "GSAP" },
    { src: next, title: "Next.js" },
    { src: aws, title: "AWS" },
    { src: java, title: "Java" },
    { src: mongo, title: "MongoDB" },
    { src: node, title: "Node.js" },
    { src: shadcn, title: "Shadcn UI" },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code" },
    { src: github, title: "GitHub" },
    { src: postman, title: "Postman" },
  ];

  return (
    <main className="container mx-auto max-width pt-10 pb-20 my-20">
      {/* Section Title */}
      <section>
        <motion.div
          className="relative text-center group mx-30 mt-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-gray-200 font-extrabold text-4xl text-center">
            Tech Stack
          </h1>
          <span className="inline-block h-0.5 bg-violet-600 w-0 group-hover:w-full transition-all duration-300 text-center"></span>
        </motion.div>

        <p className="text-content py-2 lg:max-w-3xl ml-10 my-10 text-xl dark:text-light-content border-b-1 w-[400px]">
          Technologies I've been working with recently
        </p>
      </section>

      {/* Tech Icons */}
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {techStack.map((tech, index) => (
          <AnimatedSkillIcon
            key={index}
            index={index}
            src={tech.src}
            title={tech.title}
          />
        ))}
      </section>

      {/* Tools Section */}
      <section className="my-15">
        <motion.div
          className="relative text-center group mx-30 mt-20 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-gray-200 font-extrabold text-4xl text-center">
            Tools
          </h1>
          <span className="inline-block h-0.5 bg-violet-600 w-0 group-hover:w-full transition-all duration-300 text-center"></span>
        </motion.div>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-10 pt-6">
        {tools.map((tool, index) => (
          <AnimatedSkillIcon
            key={index}
            index={index}
            src={tool.src}
            title={tool.title}
            isLarge
          />
        ))}
      </section>
    </main>
  );
}

export default Skills;

// === AnimatedSkillIcon Component ===
const AnimatedSkillIcon = ({ src, title, index, isLarge = false }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.img
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      src={src}
      alt={title}
      title={title}
      className={`hover:scale-105 transition-all duration-300 ease-in rounded-xl ${
        isLarge ? "w-[200px] h-[200px]" : ""
      }`}
    />
  );
};
