import React from "react";
import BackgroundVideo from "../assets/vid2.mp4";

function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden transition-colors duration-700">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 dark:bg-black/70 transition-colors duration-700"></div>

      {/* Contact Form */}
      <div className="relative bg-black/30 dark:bg-gray-900/50 backdrop-blur-md p-12 sm:p-16 rounded-2xl shadow-xl w-full max-w-2xl transition-colors duration-700">
        <p className="text-sm text-gray-200 dark:text-gray-400 uppercase transition-colors duration-700">Get in Touch</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white dark:text-yellow-400 mb-8 transition-colors duration-700">Contact.</h2>
        
        <form className="space-y-6">
          <div>
            <label className="text-gray-200 dark:text-gray-300 transition-colors duration-700">Your Name</label>
            <input
              type="text"
              placeholder="What is your good name?"
              className="w-full mt-2 p-4 rounded-lg bg-black/40 dark:bg-gray-800 text-gray-200 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-700"
            />
          </div>

          <div>
            <label className="text-gray-200 dark:text-gray-300 transition-colors duration-700">Your Email</label>
            <input
              type="email"
              placeholder="What is your email address?"
              className="w-full mt-2 p-4 rounded-lg bg-black/40 dark:bg-gray-800 text-gray-200 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-700"
            />
          </div>

          <div>
            <label className="text-gray-200 dark:text-gray-300 transition-colors duration-700">Your Message</label>
            <textarea
              placeholder="What do you want to say?"
              rows={6}
              className="w-full mt-2 p-4 rounded-lg bg-black/40 dark:bg-gray-800 text-gray-200 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-700"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500/80 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-lg shadow-md w-full transition-colors duration-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
