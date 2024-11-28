"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import Submitbtn from "./submit-btn";
import { toast } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:shadow-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          href="mailto:christopherperez@college.harvard.edu"
        >
          christopherperez@college.harvard.edu
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black space-y-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:border-gray-600 dark:focus:border-blue-400"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
          name="senderEmail"
        />
        <textarea
          className="h-52 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:border-gray-600 dark:focus:border-blue-400"
          placeholder="Your Message"
          required
          maxLength={5000}
          name="message"
        />
        <Submitbtn />
      </form>
    </motion.section>
  );
}
