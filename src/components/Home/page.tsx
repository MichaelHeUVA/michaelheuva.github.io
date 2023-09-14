import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl">Michael He</div>
      <Image
        className="rounded-full"
        src="./FullSizeRender.jpeg"
        width={500}
        height={0}
        alt=""
      />
      <div>Hi! I&apos;m a second year studying Computer Science at UVA.</div>
    </div>
  );
}
