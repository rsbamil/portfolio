import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import BagEffectName from "./BagEffectName";
const HeroSection = () => {
  const Hello = () => toast("Hello How are you doing..");
  return (
    <section className="h-screen  flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* left section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 "
        >
          Building Fast <br /> Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-2xl lg:text-3xl text-purple-200 max-w-2xl "
        >
          I deliver robust , production-ready websites and web apps with speed
          and precision. Every Project is backed by clean code , clear
          communication , and a commitment to getting it done , on time , every
          time.
        </motion.p>
      </div>
      {/* Right Section */}
      <BagEffectName />
    </section>
  );
};

export default HeroSection;
