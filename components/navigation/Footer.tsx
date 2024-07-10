import React from "react";
import { BiLogoGithub, BiEnvelope, BiLogoDiscord } from "react-icons/bi";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

export default function Footer(): React.JSX.Element {
  return (
    <div className="z-50 border-t border-neutral-700">
      <div className="max-w-7xl 2xl:px-0 px-4 mx-auto p-8 flex">
        <div className="w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center mb-1 justify-between w-full gap-6 text-amber-500 text-sm">
            <span
              className={`${lora.className} text-neutral-100 flex justify-center text-4xl font-semibold`}
            >
              SysWhite
              <div className="transition-all ml-3 text-2xl flex gap-2 items-center bg-neutral-800 shadow px-2.5 rounded-[6px]">
                <BiLogoGithub className="opacity-70 hover:opacity-100 cursor-pointer" />
                <BiLogoDiscord className="opacity-70 hover:opacity-100 cursor-pointer" />
                <BiEnvelope className="opacity-70 hover:opacity-100 cursor-pointer" />
              </div>
            </span>
            <div className="flex items-center gap-2">
              <div className="w-[8px] bg-amber-600 rounded-full h-[8px]" />
              Currently busy with work
            </div>
          </div>
          <div className="flex justify-center lg:justify-between items-center  opacity-70">
            <span className="text-sm">
              UI/UX Designer and Fullstack Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
