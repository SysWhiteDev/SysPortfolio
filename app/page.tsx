"use client";
import { Lora } from "next/font/google";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";
const lora = Lora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="relative h-dvh">
        <div className="overflow-x-hidden flex items-center flex-col w-full h-dvh noisy">
          <div className="-z-10 relative w-full blur-[300px] mb-24 h-full">
            <div className="absolute bottom-0 top-2 h-[300px] w-[300px] bg-blue-500" />
          </div>
          <div className="px-6 md:px-10 lg:px-12 flex justify-between items-start py-5 md:py-7 lg:py-10 w-full flex-col lg:flex-row lg:items-end">
            <div>
              <div className="border group border-yellow-600 bg-opacity-70 hover:bg-opacity-90 transition-all cursor-pointer text-yellow-600 bg-yellow-950 mb-4 rounded-[10px] p-3">
                <span className="flex mb-0.5 text-md items-center gap-1 font-semibold">
                  <FaStar className="mb-0.5" />
                  Featured
                </span>
                <div className="flex justify-between items-end">
                  <span className="truncate opacity-80">Hello</span>
                  <IoArrowForwardSharp
                    size={20}
                    className="group-hover:w-[20px] h-[20px] w-0 transition-all"
                  />
                </div>
              </div>
              <span
                className={`${lora.className} font-semibold text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-left`}
              >
                Hello, <br /> I&apos;m SysWhite
              </span>
            </div>
            <p className="text-xl opacity-70 mt-4 lg:mt-0 text-left lg:text-right">
              UI/UX Design and Fullstack development
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
