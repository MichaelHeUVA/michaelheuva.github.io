import React from "react";
import Navbar from "@/components/Navbar";
import { ExperienceList } from "@/utils/config";
import Footer from "@/components/Footer";

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        {ExperienceList.map((items) => (
          <div>
            <div className="text-3xl">{items?.companyName}</div>
            <div>{items?.role}</div>
            <div>{items?.date}</div>
            {items?.description.map((list) => (
              <div>{list}</div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
