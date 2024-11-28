"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am a junior at Harvard College majoring in Statistics and Computer
        Science. My coursework has given me a solid foundation in machine
        learning, data structures, algorithms, probability, and statistical
        inference. This academic background is complemented by my involvement in
        tech-driven extracurriculars such as Harvard Tech for Social Good
        (T4SG), where I lead a team of software engineers to create innovative
        projects that benefit society.
      </p>

      <p className="mb-3">
        I also work part-time as a research assistant in the Harvard Economics
        department, training large language models to classify texts related to
        the Syrian Civil War. In addition, I am passionate about education—this
        semester, I’m serving as a Teaching Fellow for Stat 110, Harvard's
        introductory probability course, and working my second year as a Course
        Assistant for CS50, Harvard’s introductory computer science course,
        helping students master foundational programming concepts.
      </p>

      <p>
        This past summer, I worked with CS50's Research and Development Team as
        a Software Engineer Fellow, where I designed new AI educational tools
        for future iterations of the course. Outside of academics, I sing Tenor
        2 with the Harvard Glee Club (watch our last concert{" "}
        <a
          href="https://www.youtube.com/live/FYX1sGmoS44?si=d9iia-OWS6RQMD9N&t=4163"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>
        !), am a member of the Cuban-American Undergraduate Student Association,
        and enjoy photographing and traveling the world.
      </p>
    </motion.section>
  );
}
