import WorkCard from "@/components/workPage/WorkCard";
export default function Page() {
  return (
    <div className="noisy min-h-dvh">
      <div className="relative flex  items-center flex-col">
        <div className="w-full blur-[200px]">
          <div className="w-3/4 absolute right-0 bg-sky-600 h-[150px]" />
        </div>
        <div className="mt-32 text-center">
          <h1 className={`text-6xl md:text-8xl font-extrabold mb-7`}>
            My Work
          </h1>
          <span className="border-amber-700 border px-3 mx-2 whitespace-nowrap py-1 rounded-full  shadow-black shadow-md bg-amber-900 bg-opacity-70 text-xs md:text-sm text-amber-400">
            Currently busy with something, not available for hire
          </span>
        </div>
      </div>
      <div className="max-w-7xl opacity-80 overflow-hidden mx-2 pb-16 grid-cols-1 xl:mx-auto mt-16 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <WorkCard className="bg-sky-950 text-sky-500 border border-sky-500" />
            <div className="flex flex-col lg:flex-row gap-2">
              <WorkCard className="bg-teal-700 text-teal-950 shadow shadow-teal-700" />
              <WorkCard className="bg-emerald-950 text-emerald-500 border border-emerald-500" />
            </div>
          </div>
          <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-2">
            <WorkCard className="lg:col-span-2 bg-sky-950 text-sky-500 border border-sky-500" />
            <WorkCard className="lg:col-span-1 bg-cyan-600 text-cyan-950 shadow shadow-cyan-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
