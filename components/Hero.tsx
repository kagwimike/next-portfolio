"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="text-center max-w-3xl px-6">

        {/* Animated Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="text-blue-500 animate-pulse">
            Mike Kagwi
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Software Engineer specializing in Backend Engineering, Full-Stack Development, APIs, and scalable systems.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            View Projects
          </a>

          {/* Resume (Google Docs PDF) */}
          <a
            href="https://docs.google.com/document/d/1MREL05Y5qP19VYxPD-cAIcwG8r-wKXEVtLbRKTOW-10/export?format=pdf"
            target="_blank"
            className="px-6 py-3 border border-gray-600 hover:border-white rounded-lg transition"
          >
            Download Resume
          </a>

          {/* CV (Google Drive PDF) */}
          <a
            href="https://drive.google.com/uc?export=download&id=1ID5KTJvEz7ViR1jj4Ka1JehpBpnCoN-A"
            target="_blank"
            className="px-6 py-3 border border-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
