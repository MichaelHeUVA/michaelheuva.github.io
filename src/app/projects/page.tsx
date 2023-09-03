import React from "react";
import Navbar from "@/components/Navbar";
import { ProjectList } from "@/utils/config";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        {ProjectList.map((items) => (
          <div key={items?.name}>
            <div className="text-3xl">{items?.name}</div>
            <div>
              {items?.skills.map((list) => (
                <div key={list}>{list}</div>
              ))}
            </div>
            <div>{items?.date}</div>
            <div>{items?.description}</div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
