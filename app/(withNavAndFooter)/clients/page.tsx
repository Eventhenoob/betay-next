"use client"
// import { useState } from "react";
// import CursorMask from "../components/CursorMark/CursorMask";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import VideoBG from "@/components/VideoBG";

const Client = () => {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* <CursorMask isHovered={isHovered} /> */}
      <header className="flex p-1 relative justify-center items-center w-screen h-screen">
        <h1
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          className="text-4xl  md:text-5xl lg:text-7xl text-center font-thin"
        >
          DARWIN, experte en design graphique
        </h1>
        <VideoBG
          isDarkBg={true}
          onLoadedData={() => {}}
          video="clients-bg.mp4"
        />
      </header>
      <section className="pt-32">
        <ProjectsShowcase />
      </section>
    </>
  );
};

export default Client;
