import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";
import "./readme.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { CgReadme } from "react-icons/cg";
import { TbExternalLink } from "react-icons/tb";
import { TransitionLink } from "@/components/utils/TransitionLink";

type ProjectData = {
  name: string;
  description: string;
  tags: {
    text: string;
    color?: string;
  }[];
  links: {
    url: string;
    type: string;
    text?: string;
  }[];
  people: {
    name: string;
    role: string;
    avatar: string;
    url: string;
  }[];
};

const worksDir = path.join(process.cwd(), "public", "works");

export async function generateStaticParams() {
  let ids: { id: string }[] = [];
  try {
    const entries = await fs.readdir(worksDir, { withFileTypes: true });
    ids = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((name) => /^\d+$/.test(name))
      .sort((a, b) => Number(a) - Number(b))
      .map((id) => ({ id }));
  } catch {
    // Directory not readable — fall back to no params (pages will 404).
  }
  return ids;
}

async function readWork(id: string): Promise<{
  projectData: ProjectData;
  readmeHtml: string;
}> {
  const dataPath = path.join(worksDir, id, "data.json");
  const readmePath = path.join(worksDir, id, "README.md");

  let dataRaw: string;
  let readmeRaw: string;
  try {
    dataRaw = await fs.readFile(dataPath, "utf-8");
  } catch {
    notFound();
  }
  try {
    readmeRaw = await fs.readFile(readmePath, "utf-8");
  } catch {
    notFound();
  }

  let projectData: ProjectData;
  try {
    projectData = JSON.parse(dataRaw) as ProjectData;
  } catch {
    notFound();
  }

  const readmeFile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(readmeRaw);
  const readmeHtml = String(readmeFile);

  return { projectData, readmeHtml };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { projectData, readmeHtml } = await readWork(id);

  return (
    <div className="bg-black bg-opacity-40 noisy">
      <div className="min-h-dvh">
        <div className="absolute top-[25dvh] -z-10 w-full h-[40dvh] flex justify-start blur-[20dvh] lg:blur-[40dvh]">
          <div className="bg-sky-600 h-full w-[65%]" />
        </div>
        <div className="mx-auto pt-[66px] lg:pt-[15dvh] 2xl:px-0 px-3 lg:px-6 max-w-7xl py-12">
          <div className="flex flex-col gap-2 pb-4 pt-6 md:pt-12">
            <div className="flex flex-col lg:flex-row gap-2 justify-between items-start lg:items-center">
              <p className="text-3xl md:text-4xl lg:text-5xl pb-2 truncate max-w-[95%] font-semibold tracking-tighter">
                {projectData.name}
              </p>
              <div className="flex flex-row-reverse items-center gap-1.5">
                {projectData.links.map((tag, index) => (
                  <Link
                    href={tag.url}
                    target="_blank"
                    key={index}
                    className={`text-sm hover:opacity-80 flex items-center gap-2 px-3 py-1.5 rounded-[6px] ${
                      index == 0
                        ? "bg-white text-black"
                        : "bg-sky-950 border-sky-500 border"
                    }`}
                  >
                    {tag.type.toLocaleLowerCase() === "website" ? (
                      <FiExternalLink />
                    ) : (
                      <FaGithub />
                    )}
                    {tag.text || tag.type}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 pb-1 overflow-x-auto">
              {projectData.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs border flex-shrink-0 bg-sky-950 text-sky-300 border-sky-500 px-2 py-0.5 rounded-full`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
            <div className="flex-[3] col-span-3 bg-neutral-900  bg-opacity-75 border overflow-hidden border-neutral-700 rounded-[8px]">
              <div className="flex border-b bg-neutral-900 bg-opacity-75 border-neutral-700 items-center gap-1.5 py-1.5 p-2">
                <div className="flex items-center opacity-70 gap-1.5">
                  <CgReadme size={16} />
                  <span>README.md</span>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: readmeHtml }}
                className={`p-6 pt-0`}
              ></div>
              <div className="relative overflow-hidden flex justify-between flex-col sm:flex-row items-start w-full mx-auto mt-10 p-4 border-t bg-neutral-900 border-neutral-700">
                <p className="text-3xl font-semibold sm:w-[65%]">
                  Liked what you saw? Get in contact!
                </p>
                <div className="sm:w-auto mt-6 sm:mt-0 flex-col sm:flex-row w-full flex items-center gap-2.5">
                  <Link
                    href={
                      "https://docs.google.com/document/d/1TFzYKCOe1yHOBwgH3D-bM3E2tIS8q77oXxmzzA0EVJE/edit?usp=sharing"
                    }
                    className={`hover:opacity-80 w-full justify-center flex items-center gap-2 px-3 py-1.5 rounded-[6px] outline outline-1 -outline-offset-1 outline-zinc-700 bg-zinc-800
              `}
                  >
                    CV
                    <TbExternalLink />
                  </Link>
                  <TransitionLink
                    href={"/contacts"}
                    className={`bg-white w-full whitespace-nowrap text-center hover:underline text-black hover:opacity-80 flex items-center justify-center gap-2 px-3 py-1.5 rounded-[6px]`}
                  >
                    Contact me
                  </TransitionLink>
                </div>
              </div>
            </div>
            <div className="h-full w-full my-6 order-first lg:order-last col-span-1 lg:my-0 flex flex-col">
              <div className="lg:sticky w-full top-6 flex flex-col gap-12">
                <div className="w-full">
                  <span className="font-semibold">About</span>
                  <div className="text-sm pt-3">
                    <span className="opacity-80">{projectData.description}</span>
                  </div>
                  <div className="lg:hidden w-full mt-3.5 items-center">
                    {projectData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs inline-block mr-1 mb-0.5 border bg-sky-950 flex-shrink-0 text-sky-300 border-sky-500 px-2 py-0.5 rounded-full`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-semibold">People</span>
                  <div className="text-sm pt-3 flex flex-col gap-2.5">
                    {projectData.people.map((person, index) => (
                      <Link
                        href={person.url}
                        target="_blank"
                        key={index}
                        className="flex items-center gap-2 text-md cursor-pointer group font-semibold"
                      >
                        <Image
                          className="border border-neutral-700 rounded-full"
                          height={32}
                          width={32}
                          src={person.avatar}
                          alt="Profile Picture"
                        />
                        <p>
                          <span className="group-hover:underline font-bold">
                            {person.name}
                          </span>
                          <span className="font-normal opacity-65 ml-1.5">
                            {person.role}
                          </span>
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
