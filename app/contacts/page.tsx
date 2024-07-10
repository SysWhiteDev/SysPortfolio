import { Lora } from "next/font/google";
import Link from "next/link";
const lora = Lora({ subsets: ["latin"] });
export default function Page() {
  return (
    <div className="noisy min-h-dvh flex justify-center items-center flex-col">
      <div className="-z-10 absolute w-full h-dvh flex justify-center items-center blur-[250px]">
        <div className="w-3/4 bg-purple-600 h-[150px]" />
      </div>
      <div className="max-w-7xl pt-[66px] lg:pt-[98px] w-full px-3 opacity-80 overflow-hidden pb-16 grid-cols-1 xl:mx-auto mt-16 flex flex-col gap-2">
        <Link
          href={"mailto:syswhite.commercial@gmail.com"}
          className={`bg-violet-950 h-[200px] transition-all text-violet-400 border bg-opacity-80 hover:bg-opacity-50 border-violet-500 relative overflow-x-hidden shadow p-4 rounded-[10px] row-span-3 first-line:backdrop:h-full flex w-full flex-col justify-between`}
        >
          <div className="flex text-sm gap-2 items-center"></div>
          <div className="w-full">
            <h1
              className={`${lora.className} max-w-[90%] my-0 font-normal text-6xl truncate`}
            >
              Email
            </h1>
            <p className="text-sm">syswhite.commercial@gmail.com</p>
          </div>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Link
            href={"https://x.com/sys_white"}
            target="_blank"
            className={`bg-slate-950 h-[200px] transition-all hover:bg-opacity-80 text-slate-400 border border-slate-500 relative overflow-x-hidden shadow p-4 rounded-[10px] row-span-3 first-line:backdrop:h-full flex w-full flex-col justify-between`}
          >
            <div className="flex text-sm gap-2 items-center"></div>
            <div className="w-full">
              <h1
                className={`${lora.className} max-w-[90%] my-0 font-normal text-6xl truncate`}
              >
                X
              </h1>
              <p className="text-sm">@sys_white</p>
            </div>
          </Link>
          <Link
            href={"https://github.com/syswhitedev"}
            target="_blank"
            className={`bg-slate-700 h-[200px] transition-all text-slate-300 border hover:bg-opacity-75 bg-opacity-90 border-slate-400 relative overflow-x-hidden shadow p-4 rounded-[10px] row-span-3 first-line:backdrop:h-full flex w-full flex-col justify-between`}
          >
            <div className="flex text-sm gap-2 items-center"></div>
            <div className="w-full">
              <h1
                className={`${lora.className} max-w-[90%] my-0 font-normal text-6xl truncate`}
              >
                GitHub
              </h1>
              <p className="text-sm">@SysWhiteDev</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
