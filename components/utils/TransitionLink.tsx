"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

type TransitionLink = {
  children: React.ReactNode;
  href: string;
  target?: string;
  className: string;
};

export const TransitionLink = ({
  children,
  href,
  target,
  className,
  ...props
}: TransitionLink): React.JSX.Element => {
  const router = useRouter();

  const handleTransition = async (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      onClick={(e) => handleTransition(e)}
      href={href}
      className={className}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};
