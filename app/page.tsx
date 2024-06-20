"use client";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="relative h-[400dvh]">
        <div className="sticky overflow-x-hidden flex items-center flex-col w-full bottom-0 h-dvh top-0 right-0 noisy left-0">
          <div className="-z-10 relative w-full blur-[300px] mb-24 h-full">
            <div className="absolute bottom-0 top-2 h-[300px] w-[300px] bg-blue-500" />
          </div>
          <span
            className={`${lora.className} absolute bottom-12 left-10 mx-auto font-semibold text-6xl sm:text-7xl lg:text-9xl text-left`}
          >
            Hello, <br /> I&apos;m SysWhite
          </span>
        </div>
      </div>
    </main>
  );
}
