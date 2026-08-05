import { Lora } from "next/font/google";
import { RiNextjsFill, RiFlutterFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandMysql, TbBrandNuxt, TbBrandReactNative, TbBrandPrisma } from "react-icons/tb";
import {
  SiAirtable,
  SiBootstrap,
  SiCircleci,
  SiClerk,
  SiDocker,
  SiExpress,
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
import { IoLogoVue } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { TransitionLink } from "@/components/utils/TransitionLink";
import type { IconType } from "react-icons/lib";

const lora = Lora({ subsets: ["latin"] });

type TechItem = {
  name: string;
  url: string;
  icon: IconType;
  hover?: string;
  iconClass?: string;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Javascript", url: "https://www.javascript.com/", icon: SiJavascript, hover: "hover:text-yellow-400 hover:shadow-yellow-400", iconClass: "rounded-[3px]" },
      { name: "Typescript", url: "https://www.typescriptlang.org/", icon: SiTypescript, hover: "hover:text-blue-500 hover:shadow-blue-500" },
      { name: "Python", url: "https://www.python.org/", icon: SiPython, hover: "hover:text-yellow-300 hover:shadow-yellow-300" },
      { name: "Swift", url: "https://www.swift.org/", icon: SiSwift, hover: "hover:text-orange-600 hover:shadow-orange-600" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Next.JS", url: "https://nextjs.org/", icon: RiNextjsFill, hover: "hover:shadow-white" },
      { name: "Vue.JS", url: "https://vuejs.org/", icon: IoLogoVue, hover: "hover:text-green-600 hover:shadow-green-600" },
      { name: "Nuxt.JS", url: "https://nuxt.com/", icon: TbBrandNuxt, hover: "hover:text-green-600 hover:shadow-green-600" },
      { name: "React Native", url: "https://reactnative.dev/", icon: TbBrandReactNative, hover: "hover:text-sky-400 hover:shadow-sky-400" },
      { name: "Flutter", url: "https://flutter.dev/", icon: RiFlutterFill, hover: "hover:text-blue-400 hover:shadow-blue-400" },
      { name: "React", url: "https://react.dev/", icon: RiReactjsLine, hover: "hover:text-sky-400 hover:shadow-sky-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Express.JS", url: "https://expressjs.com/", icon: SiExpress, hover: "hover:shadow-white" },
      { name: "Vapor", url: "https://vapor.codes/", icon: SiVapor, hover: "hover:text-violet-500 hover:shadow-violet-500" },
      { name: "Prisma", url: "https://www.prisma.io/", icon: TbBrandPrisma, hover: "hover:text-gray-300 hover:shadow-gray-300" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", url: "https://www.mysql.com/", icon: TbBrandMysql, hover: "hover:text-sky-600 hover:shadow-sky-600" },
      { name: "SQLite", url: "https://www.sqlite.org/index.html", icon: SiSqlite, hover: "hover:text-sky-700 hover:shadow-sky-700" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: SiPostgresql, hover: "hover:text-sky-600 hover:shadow-sky-600" },
      { name: "Redis", url: "https://redis.io/", icon: SiRedis, hover: "hover:text-red-600 hover:shadow-red-600" },
      { name: "MariaDB", url: "https://mariadb.org/", icon: SiMariadb, hover: "hover:text-pink-600 hover:shadow-pink-600" },
      { name: "Supabase", url: "https://supabase.com/", icon: SiSupabase, hover: "hover:text-green-600 hover:shadow-green-600" },
      { name: "Firebase", url: "https://firebase.google.com/", icon: SiFirebase, hover: "hover:text-red-500 hover:shadow-red-500" },
      { name: "Airtable", url: "https://airtable.com/", icon: SiAirtable, hover: "hover:text-yellow-600 hover:shadow-yellow-600" },
    ],
  },
  {
    title: "DevOps / Other",
    items: [
      { name: "Docker", url: "https://www.docker.com/", icon: SiDocker, hover: "hover:text-blue-700 hover:shadow-blue-700" },
      { name: "Kubernetes", url: "https://kubernetes.io/", icon: SiKubernetes, hover: "hover:text-blue-700 hover:shadow-blue-700" },
      { name: "Git", url: "https://git-scm.com/", icon: SiGit, hover: "hover:text-orange-700 hover:shadow-orange-700" },
      { name: "CircleCI", url: "https://circleci.com/", icon: SiCircleci, hover: "hover:shadow-white" },
      { name: "Vercel", url: "https://vercel.com/", icon: SiVercel, hover: "hover:shadow-white" },
      { name: "Clerk", url: "https://clerk.com/", icon: SiClerk, hover: "hover:text-blue-400 hover:shadow-blue-400" },
      { name: "Nginx", url: "https://nginx.org/", icon: SiNginx, hover: "hover:text-green-700 hover:shadow-green-700" },
      { name: "TailwindCSS", url: "https://tailwindcss.com/", icon: SiTailwindcss, hover: "hover:text-blue-400 hover:shadow-blue-400" },
      { name: "Bootstrap", url: "https://getbootstrap.com/", icon: SiBootstrap, hover: "hover:text-blue-600 hover:shadow-blue-600" },
    ],
  },
];

export default async function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="overflow-hidden relative justify-end flex items-center flex-col w-full h-full noisy outline outline-1 outline-neutral-800">
          <div className="-z-10 absolute top-0 bottom-0 left-0 right-0 w-full blur-[300px] mb-24 h-full">
            <div className="absolute bottom-0 top-2 h-[300px] w-[300px] bg-blue-500" />
          </div>
          <div className="px-4 lg:px-12 max-w-[1920px]  pt-[75px] lg:pt-[100px] md:px-10 flex-shrink-0 flex justify-between items-start pb-5 md:pb-7 lg:pb-10 w-full flex-col lg:flex-row lg:items-end">
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
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className={catIndex === 0 ? "pt-10" : "pt-6"}>
              <p className="pb-1 font-semibold text-lg">{category.title}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <Link key={itemIndex} href={item.url} target="_blank">
                      <div className={`${item.hover ?? ""} transition-all cursor-pointer shadow flex justify-center items-center gap-1 flex-col bg-neutral-800 shadow-black p-2 rounded-[8px]`}>
                        <Icon
                          size={70}
                          className={`opacity-90 ${item.iconClass ?? ""}`}
                        />
                        <p className="font-semibold text-lg">{item.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
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
              fetchPriority="high"
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
