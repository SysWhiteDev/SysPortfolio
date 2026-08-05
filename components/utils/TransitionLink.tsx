/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
  const transitionElementRef = useRef<Element | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (e: any) => {
    e.preventDefault();
    transitionElementRef.current?.classList.add("page-transition");
    setTimeout(() => {
      router.push(href);
    }, 150);
  };

  useEffect(() => {
    transitionElementRef.current?.classList.remove("page-transition");
  }, [pathname]);

  useEffect(() => {
    transitionElementRef.current = document.querySelector(".page-transition-element");
  }, []);

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
