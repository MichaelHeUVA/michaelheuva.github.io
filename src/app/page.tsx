"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home/page";
import Projects from "@/components/Projects/page";
import Experience from "@/components/Experience/page";
import Links from "@/components/Links/page";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.25,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export default function App() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Navbar />
      <motion.div variants={item}>
        <Home />
      </motion.div>
      <motion.div variants={item}>
        <Experience />
        <Projects />
        <Links />
        <Footer />
      </motion.div>
    </motion.div>
  );
}
