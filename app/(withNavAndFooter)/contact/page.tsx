"use client"
import ArrowButton from "@/components/Buttons/ArrowButton";
import VideoBG from "@/components/VideoBG";
import { useState } from "react";
import MessageForm from "@/components/MessageForm/MessageForm";
import useMouseTrail from "@/components/MouseTrail";

const Contact = () => {
  useMouseTrail();
  const [position, setPosition] = useState("start");

  return (
    <main className="overflow-hidden relative h-screen w-screen flex items-center justify-center flex-col ">
      <div className=" z-20 w-full h-full absolute top-0 left-0 flex overflow-hidden md:gap-32 gap-20  justify-center flex-col">
        <VideoBG
          video="contactUsBg.mp4"
          isDarkBg={false}
          onLoadedData={() => {}}
        />

        <h1 className="text-6xl group transition-all duration-300 hover:scale-105  md:text-9xl text-center  text-slate-100 font-light italic ">
          <span className="group-[:hover]:text-[#EF7238] transition-all duration-1000">
            C
          </span>
          ontactez-nous.
        </h1>

        <div className="md:px-20 px-2 gap-10 md:gap-0 flex justify-between md:flex-row flex-col">
          <div className="md:w-96 flex flex-col justify-center items-center">
            <h3 className="mb-4 text-slate-300">Commencez une conversation.</h3>
            <ArrowButton
              direction="right"
              onClick={() => {
                setPosition("form");
              }}
              text="Prenez contact."
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="mb-4  text-slate-300">Contacter directement</h3>
            <a
              className="flex text-sm gap-0 relative w-44 p-2 px-4 rounded-3xl hover:text-white hover:bg-black transition-all duration-500 bg-white text-black z-40 justify-center items-center "
              href="mailto:contact@betaye.fr"
            >
              contact@betaye.fr
            </a>
          </div>
        </div>
      </div>
      <MessageForm position={position} setPosition={setPosition} />
    </main>
  );
};

export default Contact;
