"use client";
import { useState } from "react";
import NavigationIcon from "./NavigationIcon/NavigationIcon";
import NavigationContent from "./NavigationContent";
import Link from "next/link";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <>
      <nav className="flex z-[999] items-start py-5 md:py-10 px-10 lg:pl-20 lg:pr-10  w-full fixed top-0 left-0 justify-between">
        <Link className="shrink-0" href="/home">
          <img src="/logo.png" alt="" className="h-8 sm:h-12 md:h-16 animateLogo" />
        </Link>

        <NavigationIcon
          isActive={isNavActive}
          onClick={() => {
            setIsNavActive((prev) => !prev);
          }}
        />
      </nav>
      <NavigationContent
        disableActive={() => setIsNavActive(false)}
        isActive={isNavActive}
      />
    </>
  );
};

export default Navigation;
