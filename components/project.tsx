"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-18 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Content Container */}
        <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[26rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {/* Render description with HTML */}
          <div
            className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 overflow-hidden sm:overflow-y-auto sm:max-h-[8rem]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          {/* Tags */}
          <ul className="flex flex-wrap gap-2 mt-6 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <Image
          src={imageUrl}
          alt="Project"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[32rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 
        group-even:-right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
