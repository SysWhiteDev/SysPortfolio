import React from "react";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";

type WorkCardType = {
  className?: string;
};

export default function WorkCard({
  className,
}: WorkCardType): React.JSX.Element {
  return (
    <Link
      href={"/work/0"}
      className={`${className} overflow-x-hidden shadow p-4 rounded-[10px] row-span-3  min-h-[350px] first-line:backdrop:h-full flex w-full flex-col justify-between`}
    >
      <div className="flex text-sm gap-2 items-center">
        <FaProjectDiagram size={18} />
        Project
      </div>
      <div className="w-full">
        <h1
          className={`${lora.className} max-w-[90%] text-6xl truncate pb-2.5`}
        >
          Project
        </h1>
        <p className="text-sm">Septemper 2023 - January 2022</p>
      </div>
    </Link>
  );
}
