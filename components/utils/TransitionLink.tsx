/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

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
  const transitionElement = document.querySelector(".page-transition-element");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTransition = async (e: any) => {
    e.preventDefault();
    transitionElement?.classList.add("page-transition");
    setTimeout(() => {
      router.push(href);
    }, 250);
  };

  useEffect(() => {
    transitionElement?.classList.remove("page-transition");
  }, [pathname, searchParams]);

  return (
    <>
      <Link
        onClick={(e) => handleTransition(e)}
        href={href}
        className={className}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};
