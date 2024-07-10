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
import { TbExternalLink } from "react-icons/tb";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const path = usePathname();
  return (
    <div className="flex z-50 fixed top-0 left-0 justify-center md:justify-between flex-col items-start">
      <nav className="w-6xl flex md:flex-none justify-center md:justify-between items-center px-2 py-2 rounded-[10px] shadow-sm bg-opacity-65 border bg-neutral-800  border-neutral-700 !mr-2 backdrop-blur-[2px] m-2 lg:mx-7 lg:m-6">
        <div className="link-wrap flex gap-2 items-center ">
          <Link href={"/"} className={`${path === "/" ? "active " : ""}`}>
            Home
          </Link>
          <Link
            href={"/work"}
            className={`${
              path.includes("/work") ? "active " : ""
            } !py-0 link px-2.5`}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className="py-1">
                  <span className="flex items-center gap-1.5 transition-none">
                    Work
                    <div className="w-[8px] bg-green-600 rounded-full h-[8px]" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="rounded-full mt-1 cursor-default">
                  <p className="text-green-500">Available for hire</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link
            href={"/contacts"}
            className={`${path === "/contacts" ? "active " : ""}`}
          >
            Contacts
          </Link>
        </div>
      </nav>
    </div>
  );
}
