import React from "react";

export default function Page(): React.JSX.Element {
  return (
    <div className="h-dvh overflow-hidden">
      <div className="px-2 lg:px-6 pt-[66px] lg:pt-[90px] py-2 border-b border-neutral-700">
        <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter">
          Contacts
        </span>
      </div>
      <div className="grid grid-cols-2 h-full items-center">
        <div className="flex-1 flex-col border-r border-neutral-700">
          <p className="text-2xl font-semibold">Email</p>
          <a href="mailto:syswhite.commercial@gmail.com"></a>
        </div>
        <div className="flex-1">
          <span className="text-2xl font-semibold">Email:</span>
          <a href="mailto:syswhite.commercial@gmail.com"></a>
        </div>
      </div>
    </div>
  );
}
