import React from "react";
import Image from "next/image";

export default function Page(): React.JSX.Element {
  return (
    <div className="min-h-dvh bg-neutral-950">
      <div className="relative">
        <Image
          width={4000}
          height={350}
          className="h-[350px] object-cover"
          src={"/assets/works/default/banner.png"}
          alt="Project Banner"
        />
        <div className="w-full h-[350px] absolute bottom-0 bg-gradient-to-t from-neutral-950" />
      </div>
      <div className="mx-auto max-w-7xl py-12">
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>      
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  );
}
