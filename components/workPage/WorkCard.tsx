"use client";
import React from "react";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";
import "./workcard.css";

type WorkCardType = {
  className?: string;
};

export default function WorkCard({
  className,
}: WorkCardType): React.JSX.Element {
  const mouseDivRef = React.useRef<HTMLDivElement | any>();
  const mouseContainerRef = React.useRef<HTMLDivElement | any>();
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDivRef.current && mouseContainerRef.current) {
      const rect = mouseContainerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      mouseDivRef.current.style.left = offsetX + "px";
      mouseDivRef.current.style.top = offsetY + "px";
    }
  };

  return (
    <Link
      href={"/work/0"}
      className={`${className} relative cursor-none overflow-x-hidden shadow p-4 rounded-[10px] row-span-3  min-h-[350px] first-line:backdrop:h-full flex w-full flex-col justify-between`}
    >
      <div
        ref={mouseContainerRef}
        className="absolute overflow-hidden group top-0 right-0 left-0 bottom-0"
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div
          className="w-[72px] workcard-mousediv opacity-0  group-hover:opacity-75 active:outline-offset-0 absolute flex justify-center items-center invisible group-hover:visible h-[72px] rounded-full bg-green-300 shadow shadow-green-500 outline-dashed outline-offset-4"
          ref={mouseDivRef}
        >
          <FaArrowRight size={32} className="text-green-900" />
        </div>
      </div>
      <div className="flex text-sm gap-2 items-center">
        <FaProjectDiagram size={18} />
        Project
      </div>
      <div className="w-full">
        <h1
          className={`${lora.className} max-w-[90%] text-6xl truncate pb-2.5`}
        >
          Project
        </h1>
        <p className="text-sm">Septemper 2023 - January 2022</p>
      </div>
    </Link>
  );
}
