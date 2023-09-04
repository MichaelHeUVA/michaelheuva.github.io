import React from "react";
import { ProjectList } from "@/utils/constants";

export default function Projects() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-[80%] justify-evenly">
          {ProjectList.map((items) => (
            <a
              href={items?.link}
              target="_blank"
              className="shadow-md w-[600px] h-fit p-6 rounded-xl mt-10 hover:shadow-xl transition duration-500 ease-in-out"
              key={items?.name}
            >
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-3xl">{items?.name}</div>
                  <div className="italic">{items?.date}</div>
                </div>
                <div>{items?.description}</div>
                <div className="flex">
                  {items?.skills.map((list) => (
                    <div key={list}>{list}</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
