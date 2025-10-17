import React from "react";
import bgImage from "../assets/bg2.webp"; // change to your background image

function Resume() {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 py-10 transition-colors duration-700"
      style={{ backgroundImage: `url(${bgImage})`, fontFamily: "Cambria, serif" }}
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-yellow-400 mb-8 text-center transition-colors duration-700">
        My Resume
      </h1>

      {/* Resume Card */}
      <div className="w-full max-w-4xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-60 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md border border-gray-300 dark:border-gray-700 transition-all duration-700">
        <iframe
          src="../src/assets/Manoj(Resume01).pdf"
          title="Manoj KR Resume"
          className="w-full h-[70vh] sm:h-[80vh] rounded-xl"
        />
      </div>

      {/* Download Button */}
      <a
        href="../src/assets/Manoj(Resume01).pdf"
        download
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 shadow-md transition-transform transform hover:scale-105"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
