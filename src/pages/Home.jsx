import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaTools,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiSpring,
  SiHibernate,
  SiMysql,
  SiArduino,
  SiTailwindcss,
  SiGmail,
} from "react-icons/si";

import { motion } from "framer-motion";
import backgroundImage from "../assets/bg2.webp";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-start min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: "Cambria, serif",
      }}
    >
      <div className="absolute inset-0 bg-gray-200 bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mt-24 px-4 sm:px-8 md:px-16 pb-24">

        {/* Hero Section */}
        <motion.div
          className="p-8 sm:p-12 rounded-xl w-full text-center bg-white/40 dark:bg-black/40 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hi, I'm Manoj K R 👋
          </motion.h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-800 dark:text-gray-200 mb-8">
            <span className="font-semibold text-gray-900 dark:text-yellow-400">B.E. 2025 graduate</span> who loves turning ideas into fast, scalable web apps with
            <span className="font-semibold text-gray-900 dark:text-yellow-400"> Java, Spring Boot, MySQL, and React.js</span>.
            Certified in <span className="font-semibold text-gray-900 dark:text-yellow-400">Java Full Stack and React.js</span>, I thrive on clean code, problem-solving, and building projects that make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="/projects" className="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-700 dark:bg-white dark:text-black transition text-base sm:text-lg">
              View Projects
            </a>
            <a href="/resume" className="bg-white text-gray-900 px-5 py-3 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition text-base sm:text-lg">
              Resume
            </a>
          </div>
        </motion.div>

        {/* Internship Section */}
        <section className="mt-16 w-full">
          <h2 className="bg-white/40 dark:bg-black/40 p-6 rounded-xl shadow-xl text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Internship Journey
          </h2>

          <div className="relative border-l-4 border-fuchsia-300 ml-4">
            {/* Roborosx */}
            <motion.div
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="absolute -left-7 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center ring-4 ring-gray-200 dark:ring-gray-700">
                <FaTools className="text-white" />
              </span>
              <div className="p-6 rounded-lg shadow-lg bg-white/40 dark:bg-black/40">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Embedded Systems Intern
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                  Roborosx Omni Tech Solutions LLP – Dec 2024 – Mar 2025
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 space-y-2">
                  <li>Hands-on with <span className="font-semibold dark:text-yellow-400">C++, Bash, Linux</span>.</li>
                  <li>Worked on microcontrollers like <span className="font-semibold dark:text-yellow-400">Arduino & ESP32</span>.</li>
                </ul>
              </div>
            </motion.div>

            {/* JSpiders */}
            <motion.div
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="absolute -left-7 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ring-4 ring-gray-200 dark:ring-gray-700">
                <FaJava className="text-white" />
              </span>
              <div className="p-6 rounded-lg shadow-lg bg-white/40 dark:bg-black/40">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Java Full Stack Developer Trainee
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                  JSpiders Rajajinagar – Mar 2025 – Present
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 dark:text-gray-200 space-y-2">
                  <li>Hands-on in <span className="font-semibold dark:text-yellow-400">Core Java, React, MySQL</span>.</li>
                  <li>Currently developing a <span className="font-semibold dark:text-yellow-400">backend project</span>.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16 w-full">
          <h2 className="bg-white/40 dark:bg-black/40 p-6 rounded-xl shadow-xl text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Skills
          </h2>

          <div className="overflow-x-auto w-full flex gap-6 snap-x snap-mandatory scrollbar-hide px-2 sm:px-6">

            {/* Programming Languages */}
            <div className="flex flex-col items-center bg-white/40 dark:bg-black/40 p-6 rounded-xl shadow-lg min-w-[240px] snap-start">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                Programming Languages
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-1">
                  <FaJava className="text-3xl sm:text-4xl text-orange-500" />
                  <span className="text-xs sm:text-sm">Core Java</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaPython className="text-3xl sm:text-4xl text-blue-400" />
                  <span className="text-xs sm:text-sm">Python</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaTools className="text-3xl sm:text-4xl text-gray-500" />
                  <span className="text-xs sm:text-sm">C++</span>
                </div>
              </div>
            </div>

            {/* Web Technologies & Databases */}
            <div className="flex flex-col items-center bg-white/40 dark:bg-black/40 p-6 rounded-xl shadow-lg min-w-[260px] snap-start">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                Web Technologies & Databases
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-1">
                  <FaHtml5 className="text-3xl sm:text-4xl text-orange-600" />
                  <span className="text-xs sm:text-sm">HTML</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaCss3Alt className="text-3xl sm:text-4xl text-blue-500" />
                  <span className="text-xs sm:text-sm">CSS</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaJsSquare className="text-3xl sm:text-4xl text-yellow-400" />
                  <span className="text-xs sm:text-sm">JavaScript</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiMysql className="text-3xl sm:text-4xl text-blue-700" />
                  <span className="text-xs sm:text-sm">MySQL</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiMysql className="text-3xl sm:text-4xl text-indigo-600" />
                  <span className="text-xs sm:text-sm">SQL Plus</span>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="flex flex-col items-center bg-white/40 dark:bg-black/40 p-6 rounded-xl shadow-lg min-w-[260px] snap-start">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                Frameworks & Libraries
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-1">
                  <FaReact className="text-3xl sm:text-4xl text-cyan-400" />
                  <span className="text-xs sm:text-sm">React.js</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiTailwindcss className="text-3xl sm:text-4xl text-teal-400" />
                  <span className="text-xs sm:text-sm">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiSpring className="text-3xl sm:text-4xl text-green-600" />
                  <span className="text-xs sm:text-sm">Spring</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiHibernate className="text-3xl sm:text-4xl text-red-500" />
                  <span className="text-xs sm:text-sm">Hibernate</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaDatabase className="text-3xl sm:text-4xl text-gray-500" />
                  <span className="text-xs sm:text-sm">JDBC</span>
                </div>
              </div>
            </div>

            {/* Tools & IDEs */}
            <div className="flex flex-col items-center bg-white/40 dark:bg-black/40 p-6 rounded-xl shadow-lg min-w-[240px] snap-start">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                Tools & IDEs
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-1">
                  <FaTools className="text-3xl sm:text-4xl text-gray-400" />
                  <span className="text-xs sm:text-sm">VS Code</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaJava className="text-3xl sm:text-4xl text-indigo-500" />
                  <span className="text-xs sm:text-sm">Eclipse IDE</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiArduino className="text-3xl sm:text-4xl text-green-600" />
                  <span className="text-xs sm:text-sm">Arduino IDE</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section className="mt-16 w-full px-2 sm:px-0">
          <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white transition-colors duration-500">
              Featured Projects
            </h2>
            <ul className="space-y-2 text-gray-900 dark:text-white text-base sm:text-lg md:text-xl transition-colors duration-500">
              <li>
                ⚡ Java-Based Expense and Account Management System (JDBC +
                MySQL)
              </li>
              <li>🏠 Smart Automation & Security System Using ESP32</li>
              <li>📡 Carbon Fiber Dipole Antenna Design (HFSS Simulation)</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 w-full px-2 sm:px-0 mb-24">
          <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white transition-colors duration-500">
              Get in Touch
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-3xl sm:text-4xl">
              <a
                href="mailto:manojkr0724@gmail.com"
                className="group transition transform hover:scale-110"
                aria-label="Gmail"
              >
                <SiGmail className="text-red-500 group-hover:text-red-700 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/manojkr07"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
              </a>
              <a
                href="https://github.com/manojkr07"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-900 dark:text-white group-hover:text-yellow-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
