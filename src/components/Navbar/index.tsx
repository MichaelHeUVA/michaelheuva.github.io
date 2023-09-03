import React from "react";
import { NavbarList } from "@/utils/config";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center h-10">
        <div className="flex justify-between items-center w-1/3">
          {NavbarList.map((items) => (
            <a key={items?.name} href={items.path}>
              {items?.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
