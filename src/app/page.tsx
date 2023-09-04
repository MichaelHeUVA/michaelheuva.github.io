import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home/page";
import Projects from "@/components/Projects/page";
import Experience from "@/components/Experience/page";
import Resume from "@/components/Resume/page";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}
