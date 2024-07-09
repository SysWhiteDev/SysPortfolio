/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { CgReadme } from "react-icons/cg";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

type ProjectData = {
  name: string;
  description: string;
  tags: {
    text: string;
    color: string;
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

export default function Page(context: any) {
  const id = context.params.id;
  const [projectData, setProjectData] = React.useState<ProjectData>();
  const [readmeData, setReadmeData] = React.useState<TrustedHTML>();

  const getProjectData = async () => {
    await fetch(`/works/${id}/data.json`).then(async (response) => {
      const data = await response.json();
      setProjectData(data);
    });
  };
  useEffect(() => {
    getReadme();
    getProjectData();
  }, []);

  const getReadme = async () => {
    await fetch(`/works/${id}/README.md`).then(async (response) => {
      const data = await response.text();
      const result = await remark().use(html).process(data);
      setReadmeData(result.toString());
    });
  };

  return (
    <div className="bg-neutral-950">
      <div
        className={`${
          projectData && readmeData ? "opacity-100" : "opacity-0"
        } transition-all`}
      >
        <div className="min-h-dvh ">
          <div className="relative">
            <Image
              width={4000}
              height={300}
              className="h-[25dvh] object-cover"
              src={`/works/${id}/banner.svg`}
              alt="Project Banner"
            />
            <div className="w-full h-[300px] absolute bottom-0 bg-gradient-to-t from-neutral-950" />
          </div>
          <div className="mx-auto px-6 2xl:px-0 max-w-7xl py-12">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <p className="text-5xl font-semibold tracking-tighter">
                  {projectData?.name || "Loading..."}
                </p>
                <div className="flex flex-row-reverse items-center gap-1.5">
                  {projectData?.links.map((tag, index) => (
                    <Link
                      href={tag.url}
                      target="_blank"
                      key={index}
                      className={`text-sm hover:opacity-80 flex items-center gap-2 px-3 py-1.5 rounded-[6px] ${
                        index == 0 ? "bg-white text-black" : "bg-neutral-800"
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
              <div className="flex items-center gap-1.5 pb-1 overflow-x-auto">
                {projectData?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs border bg-blue-950 text-blue-300 border-blue-500 px-2 py-0.5 rounded-full`}
                  >
                    {tag.text}
                  </span>
                ))}
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: readmeData || "Loading...",
                  }}
                  className="p-6 text-3xl font-semibold"
                ></div>
              </div>
              <div className="flex-[1] flex flex-col gap-12">
                <div>
                  <span className="font-semibold">About</span>
                  <div className="text-sm pt-3">
                    <span className="opacity-60">
                      {projectData?.description || "Loading..."}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Other people</span>
                  <div className="text-sm pt-3 flex flex-col gap-2.5">
                    {projectData?.people.map((person, index) => (
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
