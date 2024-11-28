"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { greetings } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 4000); // Change greeting every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
            className="rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl dark:border-gray-600"
          >
            <Image
              src="/chris.JPG"
              alt="Chris"
              width="384"
              height="384"
              quality={95}
              priority={true}
              className="w-48 h-48 object-cover object-[50%_55%]"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-6 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl text-gray-800 dark:text-blue-400"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[greetingIndex]}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-blue-500 dark:text-blue-400"
            >
              {greetings[greetingIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="inline-block">
            , I'm <strong>Chris</strong>.
          </span>
        </div>
        <div className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          I'm currently a student at <strong>Harvard College</strong>, majoring
          in <strong>Statistics</strong> and <strong>Computer Science</strong>.
          My passion lies in using <strong>machine learning</strong>,{" "}
          <strong>software engineering</strong>, and{" "}
          <strong>data science</strong> to make a positive social impact. I
          thrive on building innovative solutions that can help address
          real-world challenges.
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-4 px-4 text-lg font-medium mt-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ flexWrap: "nowrap" }}
      >
        <a
          className="bg-white p-4 hover:text-blue-600 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 shadow-lg dark:bg-white/10 dark:text-white/60 dark:border-blue-400"
          href="https://linkedin.com/in/cpez"
          target="_blank"
        >
          <BsLinkedin size={28} />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-blue-600 active:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 shadow-lg dark:bg-white/10 dark:text-white/60 dark:border-blue-400"
          href="https://github.com/cpez04"
          target="_blank"
        >
          <FaGithubSquare size={28} />
        </a>
      </motion.div>
    </section>
  );
}
