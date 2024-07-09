import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { CgReadme } from "react-icons/cg";

export default function Page(): React.JSX.Element {
  return (
    <div className="min-h-dvh bg-neutral-950">
      <div className="relative">
        <Image
          width={4000}
          height={300}
          className="h-[350px] object-cover"
          src={"/assets/works/default/banner.svg"}
          alt="Project Banner"
        />
        <div className="w-full h-[300px] absolute bottom-0 bg-gradient-to-t from-neutral-950" />
      </div>
      <div className="mx-auto px-6 2xl:px-0 max-w-7xl py-12">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="text-5xl font-semibold tracking-tighter">
              PROJECT TITLE
            </p>
            <div className="flex items-center gap-1.5">
              <button className="bg-neutral-800 text-sm hover:opacity-80 flex items-center gap-2 px-3 py-1.5 rounded-[6px]">
                <FaGithub />
                GitHub
              </button>
              <button className="bg-white text-sm text-neutral-800 hover:opacity-80 flex items-center gap-2 px-3 py-1.5 rounded-[6px]">
                <FiExternalLink />
                Website
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1.5 pb-1 overflow-x-auto">
            <span className="text-xs border bg-blue-950 text-blue-300 border-blue-500 px-2 py-0.5 rounded-full">
              Personal Project
            </span>
            <span className="text-xs border bg-red-950 text-red-300 border-red-500 px-2 py-0.5 rounded-full">
              Next.JS
            </span>
          </div>
        </div>
        <div className="flex items-start gap-6 mt-6">
          <div className="flex-[3] border overflow-hidden border-neutral-700 rounded-[8px]">
            <div className="flex border-b bg-neutral-900 border-neutral-700 items-center gap-1.5 py-1.5 p-2">
              <div className="flex items-center opacity-70 gap-1.5">
                <CgReadme size={16} />
                <span>README.md</span>
              </div>
            </div>
            <div className="p-6 text-3xl font-semibold">
              This is a mockup page to show various projects
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-12">
            <div>
              <span className="font-semibold">About</span>
              <div className="text-sm pt-3">
                <span className="opacity-60">
                  This is a mockup page to show various projects
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Other people</span>
              <div className="text-sm pt-3 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-md cursor-pointer group font-semibold">
                  <Image
                    className="border border-neutral-700 rounded-full"
                    height={32}
                    width={32}
                    src={"https://avatars.githubusercontent.com/u/76256827?v=4"}
                    alt="Profile Picture"
                  />
                  <p className="group-hover:underline">SysWhite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
