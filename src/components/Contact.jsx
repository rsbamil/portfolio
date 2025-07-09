import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center space-y-10  ">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-violet-200">
        Contact Me
      </h1>

      {/* Content */}
      <div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
          For any query, feel free to drop a mail at{" "}
          <a
            href="mailto:rsbamil66@gmail.com"
            className="text-violet-400 hover:underline font-semibold"
          >
            rsbamil66@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
