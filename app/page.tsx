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
import { TransitionLink } from "@/components/utils/TransitionLink";
const lora = Lora({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="">
      <div className="relative h-[35dvh]">
        <div className="overflow-hidden relative justify-end flex items-center flex-col w-full h-full noisy outline outline-1 outline-neutral-800">
          <div className="-z-10 absolute top-0 bottom-0 left-0 right-0 w-full blur-[300px] mb-24 h-full">
            <div className="absolute bottom-0 top-2 h-[300px] w-[300px] bg-blue-500" />
          </div>
          <div className="px-4 md:px-10 flex-shrink-0 lg:px-12 flex justify-between items-start pb-5 md:pb-7 lg:pb-10 w-full flex-col lg:flex-row lg:items-end">
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
              <Link href={"https://www.javascript.com/"} target="_blank">
                <div className="hover:text-yellow-400 hover:shadow-yellow-400 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiJavascript
                    size={70}
                    className="opacity-90 rounded-[4px]"
                  />
                  <p className="font-semibold text-lg">Javascript</p>
                </div>
              </Link>
              <Link href={"https://www.typescriptlang.org/"} target="_blank">
                <div className="hover:text-blue-500 hover:shadow-blue-500 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiTypescript size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Typescript</p>
                </div>
              </Link>
              <Link href={"https://www.python.org/"} target="_blank">
                <div className="hover:text-yellow-300 hover:shadow-yellow-300 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiPython size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Python</p>
                </div>
              </Link>
              <Link href={"https://cplusplus.com/"} target="_blank">
                <div className="hover:text-blue-600 hover:shadow-blue-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiCplusplus size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">C++</p>
                </div>
              </Link>
              <Link
                href={"https://dotnet.microsoft.com/en-us/languages/csharp"}
                target="_blank"
              >
                <div className="hover:text-purple-600 hover:shadow-purple-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiCsharp size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">C#</p>
                </div>
              </Link>
              <Link href={"https://www.swift.org/"} target="_blank">
                <div className="hover:text-orange-600 hover:shadow-orange-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiSwift size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Swift</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">Frontend</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <Link href={"https://nextjs.org/"} target="_blank">
                <div className="hover:shadow-white transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <RiNextjsFill size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Next.JS</p>
                </div>
              </Link>
              <Link href={"https://vuejs.org/"} target="_blank">
                <div className="hover:text-green-600 hover:shadow-green-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <IoLogoVue size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Vue.JS</p>
                </div>
              </Link>
              <Link href={"https://nuxt.com/"} target="_blank">
                <div className="hover:text-green-600 hover:shadow-green-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <TbBrandNuxt size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Nuxt.JS</p>
                </div>
              </Link>
              <Link href={"https://reactnative.dev/"} target="_blank">
                <div className="hover:text-sky-400 hover:shadow-sky-400 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <TbBrandReactNative size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">React Native</p>
                </div>
              </Link>
              <Link href={"https://flutter.dev/"} target="_blank">
                <div className="hover:text-blue-400 hover:shadow-blue-400 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <RiFlutterFill size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Flutter</p>
                </div>
              </Link>
              <Link href={"https://react.dev/"} target="_blank">
                <div className="hover:text-sky-400 hover:shadow-sky-400 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <RiReactjsLine size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">React</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">Backend</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <Link href={"https://expressjs.com/"} target="_blank">
                <div className="hover:shadow-white transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiExpress size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Express.JS</p>
                </div>
              </Link>
              <Link href={"https://vapor.codes/"} target="_blank">
                <div className="hover:text-violet-500 hover:shadow-violet-500 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiVapor size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Vapor</p>
                </div>
              </Link>
              <Link href={"https://www.prisma.io/"} target="_blank">
                <div className="hover:text-gray-300 hover:shadow-gray-300 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <TbBrandPrisma size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Prisma</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">Databases</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <Link href={"https://www.mysql.com/"} target="_blank">
                <div className="hover:text-sky-600 hover:shadow-sky-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <TbBrandMysql size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">MySQL</p>
                </div>
              </Link>
              <Link href={"https://www.sqlite.org/index.html"} target="_blank">
                <div className="hover:text-sky-700 hover:shadow-sky-700 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiSqlite size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">SQLite</p>
                </div>
              </Link>
              <Link href={"https://www.postgresql.org/"} target="_blank">
                <div className="hover:text-sky-600 hover:shadow-sky-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiPostgresql size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">PostgreSQL</p>
                </div>
              </Link>
              <Link href={"https://redis.io/"} target="_blank">
                <div className="hover:text-red-600 hover:shadow-red-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiRedis size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Redis</p>
                </div>
              </Link>
              <Link href={"https://mariadb.org/"} target="_blank">
                <div className="hover:text-pink-600 hover:shadow-pink-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiMariadb size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">MariaDB</p>
                </div>
              </Link>
              <Link href={"https://supabase.com/"} target="_blank">
                <div className="hover:text-green-600 hover:shadow-green-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiSupabase size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Supabase</p>
                </div>
              </Link>
              <Link href={"https://firebase.google.com/"} target="_blank">
                <div className="hover:text-red-500 hover:shadow-red-500 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiFirebase size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Firebase</p>
                </div>
              </Link>
              <Link href={"https://airtable.com/"} target="_blank">
                <div className="hover:text-yellow-600 hover:shadow-yellow-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiAirtable size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Airtable</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-6">
            <p className="pb-1 font-semibold text-lg">DevOps / Other</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <Link href={"https://www.docker.com/"} target="_blank">
                <div className="hover:text-blue-700 hover:shadow-blue-700 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiDocker size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Docker</p>
                </div>
              </Link>
              <Link href={"https://kubernetes.io/"} target="_blank">
                <div className="hover:text-blue-700 hover:shadow-blue-700 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiKubernetes size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Kubernetes</p>
                </div>
              </Link>
              <Link href={"https://git-scm.com/"} target="_blank">
                <div className="hover:text-orange-700 hover:shadow-orange-700 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiGit size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Git</p>
                </div>
              </Link>
              <Link href={"https://circleci.com/"} target="_blank">
                <div className="hover:shadow-white transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiCircleci size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">CircleCI</p>
                </div>
              </Link>
              <Link href={"https://vercel.com/"} target="_blank">
                <div className="hover:shadow-white transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiVercel size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Vercel</p>
                </div>
              </Link>
              <Link href={"https://clerk.com/"} target="_blank">
                <div className="hover:text-blue-400 hover:shadow-blue-400 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiClerk size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Clerk</p>
                </div>
              </Link>
              <Link href={"https://nginx.org/"} target="_blank">
                <div className="hover:text-green-700 hover:shadow-green-700 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiNginx size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Nginx</p>
                </div>
              </Link>
              <Link href={"https://tailwindcss.com/"} target="_blank">
                <div className="hover:text-blue-400 hover:shadow-blue-400 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiTailwindcss size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">TailwindCSS</p>
                </div>
              </Link>
              <Link href={"https://getbootstrap.com/"} target="_blank">
                <div className="hover:text-blue-600 hover:shadow-blue-600 transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]">
                  <SiBootstrap size={70} className="opacity-90" />
                  <p className="font-semibold text-lg">Bootstrap</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden flex justify-between flex-col max-w-7xl lg:h-[250px] h-auto mx-auto mt-12 p-4 border-2 rounded-xl bg-neutral-900">
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
          <div className="flex flex-row mt-6 items-center gap-1.5">
            <TransitionLink
              href={"/work"}
              className={`bg-white w-full sm:w-auto text-center hover:underline text-black hover:opacity-80 flex items-center justify-center gap-2 px-3 py-1.5 rounded-[6px]`}
            >
              My work
            </TransitionLink>
          </div>
        </div>
      </div>
    </main>
  );
}
