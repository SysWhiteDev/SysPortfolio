import { BiConfused } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { TransitionLink } from "@/components/utils/TransitionLink";

export default function NotFound() {
  return (
    <div className="bg-black bg-opacity-40 noisy">
      <div className="flex justify-center flex-col text-center items-center h-dvh mx-4">
        <BiConfused className="rounded-full text-white" size={160} />
        <p className="font-semibold text-xl">
          The project you are looking for doesn&apos;t exist.
        </p>
        <div className="pt-8">
          <TransitionLink
            href={"/work"}
            className={`text-sm hover:opacity-80 flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-sky-950 border-sky-500 border
              `}
          >
            <IoIosArrowBack />
            Go back to project list
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
