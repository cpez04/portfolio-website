import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import skysoarer from "@/public/SkySoarer.png";
import cointribute from "@/public/cointribute.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Cointribute",
    description:
      "A Harvard T4SG web application that promotes charitable donations and financial literacy amongst young adults. It allows users to donate to various charities, track their donations, and complete finance modules personalized via AI.",
    tags: ["Next.js", "React", "Tailwind", "Supabase", "TypeScript"],
    imageUrl: cointribute,
  },
  {
    title: "SkySoarer",
    description:
      "A web application that allows users to track flights, search for the best flight deals, and find nearby airports, and manage their accounts, using a Flask framework and an SQLite database. It integrates Airlabs, Skyscanner, and Google Maps APIs to fetch flight data and geolocation services.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    imageUrl: skysoarer,
  },
] as const;
