import React from "react";
import Image from "next/image";
import { SocialsList } from "@/utils/constants";

export default function Links() {
  return (
    <div className="flex justify-center mt-10">
      {SocialsList.map((items) => (
        <a href={items?.link} key={items?.name} target="">
          <Image src={items?.svg} width={50} height={50} alt=""></Image>
        </a>
      ))}
    </div>
  );
}
