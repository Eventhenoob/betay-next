"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Initial = () => {
  const [isEnded, setIsEnded] = useState(false);
  const navigate = useRouter ();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push("/home");
    }, 14000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Link
      href={isEnded ? "/home" : "/"}
      className="flex flex-col justify-center items-center bg-white w-screen h-screen"
    >
      <video
        onEnded={() => {
          setIsEnded(true);
        }}
        src="/initial.mp4"
        className="object-contain md:object-cover w-full h-full"
        controls={false}
        autoPlay
        muted
      />
      <div className="top-[62%] flex  justify-center items-center flex-col sm:top-[54%] md:top-2/3 text-2xl md:text-4xl absolute">
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
            " rounded-lg text-base transition-all mt-20 inline-block duration-[1.5s] ease-in bg-opacity-30 bg-black text-white p-4 text-center font-main " +
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
