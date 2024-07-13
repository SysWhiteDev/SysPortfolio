import { Lora } from "next/font/google";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandMysql, TbBrandNuxt } from "react-icons/tb";
import {
  SiAirtable,
  SiBootstrap,
  SiCircleci,
  SiClerk,
  SiCplusplus,
  SiCsharp,
  SiDocker,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiKubernetes,
  SiMariadb,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSqlite,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVapor,
  SiVercel,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="">
      <div className="relative h-dvh">
        <div className="overflow-x-hidden flex items-center flex-col w-full h-dvh noisy outline outline-1 outline-neutral-800">
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
      <div className="py-8 pb-12 px-3 bg-zinc-950">
        <p className="text-center text-3xl font-semibold">
          Technology experience
        </p>
        <p className="text-center opacity-70 text-sm pt-1.5">
          I can use it in your future project
        </p>
        <div className="max-w-7xl mx-auto">
          <div className="pt-10">
            <p className="pb-1 font-semibold text-lg">Languages</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiJavascript size={70} className="opacity-90 rounded-[5px]" />
                <p className="font-semibold text-lg">Javascript</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiTypescript size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Typescript</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiPython size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Python</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiCplusplus size={70} className="opacity-90" />
                <p className="font-semibold text-lg">C++</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiCsharp size={70} className="opacity-90" />
                <p className="font-semibold text-lg">C#</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiSwift size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Swift</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">Frontend</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <RiNextjsFill size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Next.JS</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <IoLogoVue size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Vue.JS</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <TbBrandNuxt size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Nuxt.JS</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <TbBrandReactNative size={70} className="opacity-90" />
                <p className="font-semibold text-lg">React Native</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <RiFlutterFill size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Flutter</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <RiReactjsLine size={70} className="opacity-90" />
                <p className="font-semibold text-lg">React</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">Backend</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiExpress size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Express.JS</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiVapor size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Vapor</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <TbBrandPrisma size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Prisma</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">Databases</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <TbBrandMysql size={70} className="opacity-90" />
                <p className="font-semibold text-lg">MySQL</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiSqlite size={70} className="opacity-90" />
                <p className="font-semibold text-lg">SQLite</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiPostgresql size={70} className="opacity-90" />
                <p className="font-semibold text-lg">PostgreSQL</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiRedis size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Redis</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiMariadb size={70} className="opacity-90" />
                <p className="font-semibold text-lg">MariaDB</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiSupabase size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Supabase</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiFirebase size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Firebase</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiAirtable size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Airtable</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">DevOps / Other</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiDocker size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Docker</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiKubernetes size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Kubernetes</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiGit size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Git</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiCircleci size={70} className="opacity-90" />
                <p className="font-semibold text-lg">CircleCI</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiVercel size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Vercel</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiClerk size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Clerk</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiNginx size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Nginx</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiTailwindcss size={70} className="opacity-90" />
                <p className="font-semibold text-lg">TailwindCSS</p>
              </div>
              <div className="shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                <SiBootstrap size={70} className="opacity-90" />
                <p className="font-semibold text-lg">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden flex justify-between flex-col max-w-7xl h-[250px] mx-auto mt-10 p-4 border-2 rounded-xl bg-neutral-900">
          <p className="text-3xl font-semibold sm:w-[65%]">
            See what I created with all those technologies!
          </p>
          <div className="absolute hidden sm:block w-[35%] bottom-0 right-0 h-full object-cover">
            <div className="h-full top-0 bottom-0 absolute left-0 w-40 bg-gradient-to-r from-neutral-900" />
            <Image
              className="h-full object-cover"
              alt="HomeFrames"
              src={"/assets/homeframes.svg"}
              width={450}
              height={2000}
            />
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <Link
              href={"/work"}
              className={`bg-white mt-2.5 hover:underline text-black hover:opacity-80 flex items-center gap-2 px-3 py-1.5 rounded-[6px]`}
            >
              My work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
