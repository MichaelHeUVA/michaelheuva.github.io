import React from "react";
import { NavbarList } from "@/utils/config";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center h-10 shadow-sm">
        <div className="flex justify-between items-center w-1/2">
          {NavbarList.map((items) => (
            <Link key={items?.name} href={items.path}>
              {items?.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
