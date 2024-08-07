"use client";
import React from "react";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";
import "./workcard.css";
import { TransitionLink } from "../utils/TransitionLink";

type WorkCardType = {
  className?: string;
  title: string;
  id: number;
  timespan: string;
  company?: string;
};

export default function WorkCard({
  className,
  title,
  timespan,
  id,
  company,
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
    <TransitionLink
      href={`/work/${id}`}
      className={`${className} relative lg:cursor-none overflow-x-hidden shadow p-4 rounded-[10px] row-span-3  min-h-[350px] first-line:backdrop:h-full flex w-full flex-col justify-between`}
    >
      <div
        ref={mouseContainerRef}
        className="absolute n overflow-hidden group top-0 right-0 left-0 bottom-0"
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div
          className="w-[32px] hidden lg:flex workcard-mousediv opacity-0 group-hover:opacity-100 active:outline-offset-0 absolute justify-center items-center invisible group-hover:visible h-[32px] rounded-full mix-blend-difference bg-white outline-2 outline-white outline-dashed outline-offset-[3px]"
          ref={mouseDivRef}
        >
        </div>
      </div>
      <div className="flex text-sm gap-2 items-center">
        <FaProjectDiagram size={18} />
        Project
      </div>
      <div className="w-full">
        <h1 className={`${lora.className} text-5xl my-0 font-semibold lg:text-6xl pb-2.5`}>
          {title}
        </h1>
        <p className="text-sm">
          {company} • {timespan}
        </p>
      </div>
    </TransitionLink>
  );
}
