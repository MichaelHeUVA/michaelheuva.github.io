import React from "react";
import { ExperienceList } from "@/utils/constants";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience">
      <div className="flex justify-center text-5xl mt-10">Experience</div>
      <div className="flex justify-center">
        {ExperienceList.map((items) => (
          <a
            key={items?.companyName}
            href={items?.companyLink}
            target="_blank"
            className="w-[50%] h-fit p-6 rounded-xl shadow-md mt-5 hover:shadow-xl transition duration-500 ease-in-out"
          >
            <div className="flex">
              <div className="mr-5 mt-1">
                {items.companySVG ? (
                  <Image
                    src={process.env.BASEPATH + "/" + items.companySVG}
                    width={100}
                    height={100}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-3xl">{items?.companyName}</div>
                  <div className="italic">{items?.date}</div>
                </div>
                <div>{items?.role}</div>
                <div>{items?.description}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
