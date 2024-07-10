import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main>
      <div className="relative h-dvh">
        <div className="overflow-x-hidden flex items-center flex-col w-full h-dvh noisy">
          <div className="-z-10 relative w-full blur-[300px] mb-24 h-full">
            <div className="absolute bottom-0 top-2 h-[300px] w-[300px] bg-blue-500" />
          </div>
          <div className="px-6 md:px-10 lg:px-12 flex justify-between items-start py-5 md:py-7 lg:py-10 w-full flex-col lg:flex-row lg:items-end">
            <div>
              <span
                className={`${lora.className} font-semibold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-left`}
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
