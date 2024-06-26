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
            className="group bg-[#176B87] w-[50%] h-fit p-6 rounded-xl mt-5 transition duration-500 ease-in-out hover:shadow-[inset_0_0_5px_0_rgba(100,204,197,1)]"
          >
            <div className="flex">
              <div className="mr-5 mt-[5px]">
                {items.companySVG ? (
                  <Image
                    src={items.companySVG}
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
                  <div className="text-3xl transition duration-500 ease-in-out group-hover:text-[#64CCC5] mb-2">
                    {items?.companyName}
                  </div>
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
