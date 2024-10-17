import React from "react";
import { LeadershipList } from "@/utils/constants";
import Image from "next/image";

export default function Leadership() {
  return (
    <div id="leadership">
      <div className="flex justify-center text-5xl mt-10">Leadership</div>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-[80%] justify-evenly">
          {LeadershipList.map((items) => (
            <a
              key={items?.organizationName}
              href={items?.organizationLink}
              target="_blank"
              className="group bg-[#176B87] w-[75%] h-fit p-6 rounded-xl mt-5 transition duration-500 ease-in-out hover:shadow-[inset_0_0_5px_0_rgba(100,204,197,1)]"
            >
              <div className="flex">
                <div className="mr-5 mt-[5px]">
                  {items.organizationSVG ? (
                    <div className="w-[75px]">
                      <Image
                        src={items.organizationSVG}
                        width={75}
                        height={75}
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div className="text-3xl transition duration-500 ease-in-out group-hover:text-[#64CCC5] mb-2">
                      {items?.organizationName}
                    </div>
                    <div className="italic">{items?.date}</div>
                  </div>
                  <div className="font-bold">{items?.role}</div>
                  <div>
                    {items?.description.map((list) => (
                      <div key={list}>• {list}</div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
