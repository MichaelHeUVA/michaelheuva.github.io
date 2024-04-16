"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="text-8xl" variants={item}>
        Michael He
      </motion.div>
      <motion.div variants={item}>
        <Image
          className="rounded-full"
          src="./FullSizeRender.jpeg"
          width={500}
          height={0}
          alt=""
        />{" "}
      </motion.div>
      <motion.div variants={item}>
        Hi! I&apos;m a second year studying Computer Science and Data Science at
        UVA.
      </motion.div>
    </motion.div>
  );
}
