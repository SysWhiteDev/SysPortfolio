/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [transitionElement, setTransitionElement] = useState<Element | null>(
    null
  );
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTransition = async (e: any) => {
    e.preventDefault();
    transitionElement?.classList.add("page-transition");
    setTimeout(() => {
      router.push(href);
    }, 150);
  };

  useEffect(() => {
    transitionElement?.classList.remove("page-transition");
  }, [pathname, searchParams]);

  useEffect(() => {
    setTransitionElement(document.querySelector(".page-transition-element"));
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
