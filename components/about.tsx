"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";


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

       {/* <Fireworks autorun={{ speed: 1, duration: 20000 }} /> */}
        
        <p className="mb-3 "> 
          I am a rising junior at Harvard College majoring in statistics and computer science. My coursework has provided me with a strong foundation in machine learning, data structures, algorithms, probability, and statistical inference. This academic background is complemented by my involvement in tech-driven extracurriculars such as Harvard Tech for Social Good (T4SG), where I engage in impactful projects aimed at societal benefit. </p>
          
        <p className="mb-3">  In addition to my coursework, I work part-time as a research assistant for PhD candidate Emily Silcock, where I am involved in training a large language model to classify texts related to the Syrian Civil War. I am also very passionate about education. This upcoming semester will mark my second year as a course assistant for CS50, Harvard’s introductory computer science course, where I support students in mastering foundational programming concepts. </p>
         
        <p>
          This summer I am continuing my work with CS50 as a Summer Fellow in their Research & Development Team, where I am designing artificial intelligence educational tools to be used in future iterations of the course. Outside of academics, I sing Tenor 2 with the Harvard Glee Club (watch our latest concert <a href="https://www.youtube.com/live/FYX1sGmoS44?si=d9iia-OWS6RQMD9N&t=4163" target="_blank" style={{ textDecoration: 'underline' }}>here</a>!), am a member of the Cuban-American Undergraduate Student Association, and enjoy traveling the world. 
        </p>
    </motion.section>
  )
}
