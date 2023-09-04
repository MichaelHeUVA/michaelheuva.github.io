import React from "react";
import { ExperienceList } from "@/utils/constants";

export default function Experience() {
  return (
    <div id="#experience">
      <div className="flex justify-center">
        {ExperienceList.map((items) => (
          <a
            key={items?.companyName}
            href={items?.companyLink}
            target="_blank"
            className="w-[50%] h-fit p-6 rounded-xl shadow-md mt-10 hover:shadow-xl transition duration-500 ease-in-out"
          >
            <div className="flex">
              <div className="mr-5 mt-1">
                {items.companySVG ? (
                  <object
                    type="image/svg+xml"
                    data={items?.companySVG}
                  ></object>
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
