"use client";
import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "./style.css";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const path = usePathname();
  return (
    <div className="flex z-50 fixed right-0 top-0 left-0 justify-center md:justify-between items-start">
      <nav className=" w-6xl flex  md:flex-none justify-center md:justify-between items-center px-2 py-2 rounded-[10px] shadow-sm bg-opacity-65 border bg-neutral-800  border-neutral-700 backdrop-blur-[2px] mx-7 m-6">
        <div className="link-wrap flex gap-2 items-center ">
          <Link href={"/"} className={`${path === "/" ? "active " : ""}`}>
            Home
          </Link>
          <Link
            href={"/work"}
            className={`${path.includes("/work") ? "active " : ""} !py-0 link px-2.5`}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className="py-1">
                  <span className="flex items-center gap-1.5 transition-none">
                    Work
                    <div className="w-[8px] bg-amber-600 rounded-full h-[8px]" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="rounded-full mt-1 cursor-default">
                  <p className="text-amber-500">
                    Currently busy with something...
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </nav>
      {/* <div className="w-6xl flex flex-col justify-between p-3 py-2 rounded-full bg-opacity-100 border border-blue-900  bg-blue-950 backdrop-blur-[50px] mx-7 m-6">
        <div className="min-w-[250px] max-w-[300px] overflow-hidden flex gap-1.5 items-center">
          <BsSpotify size={34} className="mr-1.5 flex-shrink-0" />
          <div className="flex flex-col truncate">
            <span className="text-xs opacity-80">
              Currently I&apos;m listening to
            </span>
            <span className="text-md font-semibold truncate">I love you!</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
