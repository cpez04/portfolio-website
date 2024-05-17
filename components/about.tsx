"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView("About");

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3 "> 
          I am a rising junior at Harvard College, majoring in statistics and computer science. My coursework has provided me with a strong foundation in machine learning, data structures, algorithms, probability, and statistical inference. This academic background is complemented by my involvement in tech-driven extracurriculars such as Harvard Tech for Social Good (T4SG), where I engage in impactful projects aimed at societal benefit. </p>
          
        <p className="mb-3">  In addition to my coursework, I work part-time as a research assistant for PhD candidate Emily Silcock, where I am involved in training a large language model to classify texts related to the Syrian Civil War. I am also very passionate about education. This upcoming semester will mark my second year as a course assistant for CS50, Harvard’s introductory computer science course, where I support students in mastering foundational programming concepts. </p>
         
        <p>
          This summer I will be continuing my work with CS50 as a Summer Fellow, where I will be helping to develop the course’s curriculum and work on various software development projects. Outside of academics, I sing Tenor 2 with the Harvard Glee Club (watch our latest concert <a href="https://www.youtube.com/live/FYX1sGmoS44?si=d9iia-OWS6RQMD9N&t=4163" target="_blank" style={{ textDecoration: 'underline' }}>here</a>!), am a member of the Cuban-American Undergraduate Student Association, and enjoy traveling the world. 
        </p>
    </motion.section>
  )
}
