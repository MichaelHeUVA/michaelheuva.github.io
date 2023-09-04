import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="text-9xl">Michael He</div>
        <div>I&apos;m a second year at UVA </div>
      </div>
      <Footer />
    </>
  );
}
