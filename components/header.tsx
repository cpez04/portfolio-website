"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-[999]">
      {/* Button to toggle sidebar */}
      <button
        className="fixed top-4 left-4 z-[1000] text-2xl p-2 bg-white rounded-md shadow-md dark:bg-gray-800 dark:text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <MdClose /> : <FiMenu />}
      </button>

      {/* Sidebar Navigation */}
      <motion.nav
        className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 shadow-2xl pt-16 p-6 z-[999]"
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className="space-y-2 text-lg font-medium text-gray-800 dark:text-gray-200">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "block px-4 py-2 rounded transition-all duration-150 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 hover:pl-6",
                  {
                    "text-gray-950 dark:text-gray-200 font-bold":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  toggleSidebar();
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
