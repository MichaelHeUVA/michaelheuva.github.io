import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home/page";
import Projects from "@/components/Projects/page";
import Experience from "@/components/Experience/page";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
