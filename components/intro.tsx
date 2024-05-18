"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';


export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image 
                    src="/chris.jpeg" 
                    alt="Sexy photo of Chris" 
                    width="384"
                    height="384"
                    quality={95}
                    priority={true}
                    className=" w-48 h-48 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
                    />
                </motion.div>
            

            </div>

        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl "
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y: 0}}
        >
            Hey, I'm <strong>Chris</strong>. I'm a student at <strong>Harvard College</strong> studying <strong>Statistics</strong> and <strong>Computer Science</strong>. I'm passionate about leveraging <strong>machine learning</strong>, <strong>software engineering</strong>, and <strong>data science</strong> for social good. 

        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
            initial={{opacity:0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{
                delay:0.1,
            }}
        >
            <a className="bg-white p-4 hover:text-gray-950 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/cpez" target="_blank">
                <BsLinkedin />
            </a>
            <a className="bg-white p-4 text-gray-700 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/cpez04" target="_blank">
                <FaGithubSquare />
            </a>
        </motion.div>



    </section>
  )
}
