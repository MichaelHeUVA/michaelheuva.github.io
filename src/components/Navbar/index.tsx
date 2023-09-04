import React from "react";
import { NavbarList } from "@/utils/constants";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center h-10 shadow-sm">
        <div className="flex justify-between w-1/2">
          {NavbarList.map((items) =>
            items.name === "Resume" ? (
              <a
                key={items?.name}
                href={items.path}
                className="w-[500px] h-full flex items-center justify-center hover:text-xl transition-all duration-250 ease-in-out"
                target="_blank"
              >
                {items?.name}
              </a>
            ) : (
              <a
                key={items?.name}
                href={items.path}
                className="w-[500px] h-full flex items-center justify-center hover:text-xl transition-all duration-250 ease-in-out"
              >
                {items?.name}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
}
