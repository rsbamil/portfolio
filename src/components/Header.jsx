import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Header = () => {
  // toggle mobile menu button
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);
  return (
    <header className=" w-full z-50 transition-all duration-300 fixed top-0 left-0 backdrop-blur-md bg-transparent ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            <img src="/logo.jpg" className="rounded-xl h-10 w-10" alt="" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100  bg-clip-text text-transparent">
            Developer
          </span>
        </motion.div>

        {/* desktop navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map(
            (item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                key={item}
              >
                <Link
                  to={`${item.toLowerCase()}`}
                  smooth={true}
                  duration={500}
                  className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            )
          )}
        </nav>
        {/* social icons - desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://github.com/rsbamil"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600  dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://x.com/GWorld97878"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600  dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://www.linkedin.com/in/rohit-kumar-05697a372"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600  dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </div>
        {/* Hire me Button */}
        <div>
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500 "
          >
            Hire Me
          </motion.button>
        </div>
        {/* mobile menu button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 1.8,
            duration: 1.8,
          }}
          className="md:hidden flex items-center"
        >
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </motion.div>
      </div>
      {/* Mobile Menu  */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              to={`${item.toLowerCase()}`}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-gray-300 font-medium py-2"
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a
              onClick={toggleMenu}
              href="https://github.com/rsbamil"
              target="_blank"
            >
              <FiGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a
              onClick={toggleMenu}
              href="https://x.com/GWorld97878"
              target="_blank"
            >
              <FiTwitter className="w-5 h-5 text-gray-300" />
            </a>
            <a
              onClick={toggleMenu}
              href="https://www.linkedin.com/in/rohit-kumar-05697a372"
              target="_blank"
            >
              <FiLinkedin className="w-5 h-5 text-gray-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999]   flex justify-center items-start pt-30 backdrop-blur-2xl p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 mt-16"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
