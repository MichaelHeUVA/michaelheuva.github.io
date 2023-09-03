import React from "react";
import Navbar from "@/components/Navbar";

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <iframe
          className="w-screen h-screen"
          src="Michael He Resume.pdf"
        ></iframe>
      </div>
    </>
  );
}
