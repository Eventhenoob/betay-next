"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Initial = () => {
  const [isEnded, setIsEnded] = useState(false);
  const navigate = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push("/home");
    }, 14000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Link
      href={isEnded ? "/home" : ""}
      className="flex fixed top-0 left-0 z-[9999] flex-col justify-center items-center bg-white w-screen h-screen"
    >
          <div
      className={
        "absolute z-10 top-0 left-0 overflow-hidden w-full h-full " }>
      <video
        onEnded={() => {
          setIsEnded(true);
        }}
        playsInline={true}
        autoPlay={true}
        preload="auto"
        muted={true}
        loop={false}
        controls={false}
        className="object-contain absolute md:object-cover w-full h-full"
      >
         <source src={`/initial.mp4`} type="video/mp4" />
      </video>

        </div>
      <div className="top-[54%] flex z-20  justify-center items-center flex-col sm:top-[54%] md:top-2/3 text-2xl md:text-4xl absolute">
        <p
          className={
            " transition-all duration-500 text-black p-4 text-center font-heading " +
            (isEnded ? " opacity-100 " : " opacity-0 ")
          }
        >
          La communication et le marketing pensé par des passionnées dont c&apos;est
          le métier
        </p>
        <p
          className={
            " rounded-lg text-base transition-all mt-10 inline-block duration-[1.5s] ease-in bg-opacity-30 bg-black text-white p-4 text-center font-main " +
            (isEnded ? " opacity-100 " : " opacity-0 ")
          }
        >
          cliquez ici
        </p>
      </div>
    </Link>
  );
};

export default Initial;
