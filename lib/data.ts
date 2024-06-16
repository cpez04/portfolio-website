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
    title: "CS50 Summer Fellow",
    employer: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    location: "Cambridge, MA",
    description:
      "Design and implement new AI features for the CS50 course to aid student learning and update curriculum materials.",
    icon: React.createElement(FaLightbulb),
    date: "June 2024 - present",
  },
  {
    title: "Computational Research Assistant",
    employer: "Harvard University Department of Economics",
    location: "Cambridge, MA",
    description:
      "Support advanced economic research in the Syrian Civil War by collecting, cleaning, and analyzing large datasets to uncover insights on the conflict's impact on civilians. I am currently training a BERT model to classify Arabic text data on how civilians have died in the conflict.",
    icon: React.createElement(FaChartLine),
    date: "January 2024 - present",
  },
  {
    title: "Software Engineer",
    employer: "Harvard Tech for Social Good",
    location: "Cambridge, MA",
    description:
      "Contribute to developing innovative solutions that address critical societal issues through technology. Leverage technologies such as Next.js/React and Node.js to build projects that improve financial literacy and facilitate impactful charitable giving.",
    icon: React.createElement(FaLaptopCode),
    date: "February 2024 - present",
  },
  {
    title: "Course Assistant for CS50",
    employer: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    location: "Cambridge, MA",
    description:
      "Conducted weekly office hours, graded assignments, and assisted students in understanding course material. Earned an overall Excellent rating by students in the end-of-semester course evaluations.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "August - December 2023",
  },
  {
    title: "Data Science Intern",
    employer: "Instituto Milenio Fundamentos de los Datos",
    location: "Santiago, Chile",
    description:
      "Collaborated with a team of professors and graduate students on an agent-based modeling project aimed at uncovering patterns related to narcotraffic and organized crime within Chile. Developed a Python script capable of processing extensive CSV files containing crime data and visualizing the results with a dynamic geographic heat map.",
    icon: React.createElement(FaDatabase),
    date: "June - July 2023",
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
    title: "Multi-Objective and Multi-Constraint Optimization",
    description:
      "A paper that proves the Envelope Theorems and the Karush-Kuhn-Tucker Conditions, providing a lens to analyze their applicability to three fictional business models and to gain further theoretical and geometric mathematical intuition.",
    tags: ["Multivariable Calculus", "Linear Algebra", "Economics"],
    imageUrl: kkt,
  },
  {
    title: "SkySoarer",
    description:
      "A web application that allows users to track flights, search for the best flight deals, and find nearby airports, and manage their accounts, using a Flask framework and an SQLite database. It integrates Airlabs, Skyscanner, and Google Maps APIs to fetch flight data and geolocation services.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    imageUrl: skysoarer,
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
