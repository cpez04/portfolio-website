import React from "react";
import { FaLaptopCode, FaChartLine, FaChalkboardTeacher, FaDatabase, FaLightbulb } from "react-icons/fa";
import skysoarer from "@/public/SkySoarer.png";
import cointribute from "@/public/cointribute.png";
import kkt from "@/public/kkt.png";

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
    name: "Experiences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ML Research Assistant",
    employer: "Harvard University Department of Economics",
    location: "Cambridge, MA",
    description:
      "Support economic research in the Syrian Civil War by collecting, cleaning, and analyzing large datasets. Trained RoBERTa models to classify Arabic text data, indentifying how civilians were affected by the conflict.",
    icon: React.createElement(FaChartLine),
    date: "January 2024 - present",
  },
  {
    title: "Software Engineering Fellow (CS50)",
    employer: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    location: "Cambridge, MA",
    description:
      "Designed and implemented new AI features for the CS50 course to enhance student learning. Revamped the CS50.ai website, improving user experience and aligning it with pedagogical teaching goals.",
    icon: React.createElement(FaLightbulb),
    date: "June - August 2024",
  },
  {
    title: "Software Engineer",
    employer: "Harvard Tech for Social Good",
    location: "Cambridge, MA",
    description:
      "Develop tech solutions addressing societal challenges. Utilize technologies such as Next.js/React and Node.js to build projects such as enhancing financial literacy and facilitating impactful charitable giving.",
    icon: React.createElement(FaLaptopCode),
    date: "February 2024 - present",
  },
  {
    title: "Course Assistant for CS50",
    employer: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    location: "Cambridge, MA",
    description:
      "Conducted weekly office hours, graded assignments, and assisted students in understanding course material. Recognized with an Excellent rating in end-of-semester evaluations by students.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "August - December 2023",
  },
  {
    title: "Data Science Intern",
    employer: "Instituto Milenio Fundamentos de los Datos",
    location: "Santiago, Chile",
    description:
      "Collaborated with professors and graduate students on an agent-based modeling project related to narcotraffic and organized crime in Chile. Developed Python scripts to process and visualize extensive crime data with dynamic geographic heat maps.",
    icon: React.createElement(FaDatabase),
    date: "June - July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "alpha.cs50.ai",
    description:
      "Revamped the CS50.ai website that hosts the CS50 chatbot that engages with students to assist with course material. ",
    tags: ["Next.js", "React", "Tailwind", "Prisma", "TypeScript", "Assistants API", "Chat Completions API"],
    imageUrl: cointribute,
  },
  {
    title: "RoBERTa Multiclass Text Classification",
    description:
      "Trained a RoBERTa model to classify Arabic text data on how civilians have died in the Syrian Civil War. ",
    tags: ["Pytorch", "Wandb", "Chat Completions API"],
    imageUrl: cointribute,
  },
  {
    title: "Cointribute",
    description:
      "A Harvard T4SG web application that promotes charitable donations and financial literacy amongst young adults. It allows users to donate to various charities, track their donations, and complete finance modules personalized via AI.",
    tags: ["Next.js", "React", "Tailwind", "Supabase", "TypeScript"],
    imageUrl: cointribute,
  },
  {
    title: "Multi-Objective and Multi-Constraint Optimization",
    description:
      "A paper that proves the Envelope Theorems and the Karush-Kuhn-Tucker Conditions, providing a lens to analyze their applicability to three fictional business models and to gain further theoretical and geometric mathematical intuition.",
    tags: ["Multivariable Calculus", "Linear Algebra", "Economics"],
    imageUrl: kkt,
  },
] as const;

export const greetings = [
  "Hello",       // English
  "Hola",        // Spanish
  "Bonjour",     // French
  "Hallo",       // German
  "Ciao",        // Italian
  "こんにちは",    // Japanese (Konnichiwa)
  "안녕하세요",     // Korean (Annyeonghaseyo)
  "你好",         // Chinese (Nǐ hǎo)
  "Привет",      // Russian (Privet)
  "مرحبا",       // Arabic (Marhaban)
  "Hej",         // Swedish
  "Hei",         // Norwegian
  "Hallo",       // Dutch
  "Ahoj",        // Czech
  "Olá",         // Portuguese
  "Selam",       // Turkish
  "Szia",        // Hungarian
  "สวัสดี",      // Thai (Sawasdee)
  "Hallo",       // Afrikaans
  "Kamusta",     // Filipino
  "שלום",        // Hebrew (Shalom)
  "नमस्ते",       // Hindi (Namaste)
  "வணக்கம்",     // Tamil (Vanakkam)
  "Γεια σας",    // Greek (Yia sas)
  "Բարեւ",       // Armenian (Barev)
  "გამარჯობა",   // Georgian (Gamarjoba)
  "Salve",       // Latin
  "Здраво",      // Serbian (Zdravo)
  "สวัสดีครับ",   // Thai (Sawasdee krub)
  "Здравей",     // Bulgarian (Zdravei)
  "नमस्कार",      // Marathi (Namaskar)
  "हॅलो",         // Marathi (Hello)
  "ಹಲೋ",         // Kannada (Halo)
  "હેલો",         // Gujarati (Hello)
  "안녕",          // Korean (Annyeong)
  "Cześć",       // Polish
  "سلام",        // Persian (Salam)
  "Merhaba",     // Turkish
  "Sveiki",      // Latvian
  "Tere",        // Estonian
  "Xin chào",    // Vietnamese
  "Hallo",       // Indonesian
  "Bula",        // Fijian
  "Aloha",       // Hawaiian
  "Sawubona",    // Zulu
  "Molo",        // Xhosa
  "Salam",       // Azerbaijani
  "Kaixo",       // Basque
  "नमस्ते",       // Nepali (Namaste)
  "Dia duit",    // Irish (Gaelic)
  "Dobrý den",   // Czech
  "สวัสดีค่ะ",     // Thai (Sawasdee ka)
  "سلام",        // Urdu (Salam)
] as const;
