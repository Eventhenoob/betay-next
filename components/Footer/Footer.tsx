"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import style from "./style.module.css";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { Meteors } from "../Meteors/Meteors";
import axios from "axios";

const Footer = () => {
  const [showError, setShowError] = useState("");
  const [showSuccess, setShowSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleShowError = (message: string) => {
    setShowError(message);
    setIsLoading(false)
    setTimeout(() => {
      setShowError("");
    }, 4000);
  };

  const toggleShowSuccess = (message: string) => {
    setShowSuccess(message);
    setIsLoading(false);
    setTimeout(() => {
      setShowSuccess("");
    }, 4000);
  };

  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {showError && (
        <p className="bg-red-600 p-4 fixed w-screen top-20 left-1 z-30 text-black font-heading ">
          {showError}
        </p>
      )}
      {showSuccess && (
        <p className="bg-[#EF7238] p-4 fixed w-screen top-20 left-1 z-30 text-white font-heading ">
          {showSuccess}
        </p>
      )}
      <footer
        ref={footerRef}
        className=" relative overflow-hidden lg:pl-36 bg-gray-950 w-full p-6 md:p-10 py-20 "
      >
        <div className="">
          <Link href="/home" className="relative z-50 text-4xl font-bold">
            <img src="/logo.png" alt="" className="h-20" />
          </Link>
          <p className="text-4xl mt-7 text-outline text-gray-900 font-bold">
            prêt à faire le point?
          </p>
        </div>

        <div className="mt-10 flex items-center relative z-50 gap-3 ">
          <div className="w-20 h-[1px] bg-slate-50"></div>
          <a
            className="text-xl transition-all duration-300 hover:text-[#EF7238] font-bold"
            href="tel:0185121850"
          >
            0185121850
          </a>
          <div className="w-20 h-[1px] bg-slate-50"></div>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true)
          try {
            axios
              .post("/api/newsLetter", { email: inputRef.current?.value })
              .then((_res) => {
                toggleShowSuccess("Newsletter Abonné");
              })
              .catch((error: any) => {
                toggleShowError("Il y a une erreur: " + 'Cet e - mail est déjà abonné à la newsletter');
              });
          }
          catch (err: any) {
            toggleShowError("Il y a une erreur: " + err?.message);
          }

        }} className="mt-10 mb-10 flex-wrap relative z-50">
          <p className="mb-4 text-xl font-bold">
            inscrivez-vous à notre newsletter
          </p>
          <div className="flex gap-2  flex-wrap">
            <input
              ref={inputRef}
              type="email"
              placeholder="votre adresse email"
              className=" italic rounded-lg border-white border-2 p-2 md:p-4 bg-transparent outline-none text-[#EF7238]"
              required={true}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={" bg-[#EF7238] hover:bg-[#c85f2e] transition-all duration-200 rounded-lg px-4 py-2 text-black font-bold " + (isLoading && " hover:bg-[#70371c] bg-[#70371c] ")}
            >
              {!isLoading ? "s'inscrire" :
                'attendez'}
            </button>
          </div>
        </form>
        <div className=" text-4xl  flex items-center gap-3 relative z-50">
          <a href="" className="">
            <TiSocialLinkedin className="hover:text-blue-400 transition-all duration-500" />
          </a>
          <a href="" className="">
            <TiSocialInstagram className="hover:text-pink-600 transition-all duration-500" />
          </a>
        </div>

        <div className="mt-4 mb-2 text-center justify-center items-center flex gap-4 flex-wrap text-slate-300">
          <p className="">BE-TAYE &#169; 2024. Tous droits réservés.</p>
          <Link
            href={"/legal"}
            className="relative z-50 hover:text-orange-400 transition-all duration-200"
          >
            mentions légales
          </Link>
        </div>
        <div className="absolute top-0 right-0">
          <Meteors number={40} />
        </div>
        <div className="absolute top-0 right-[50%]">
          <Meteors number={20} />
        </div>

        <div className="w-full h-full absolute top-0 left-0 ">
          <article className={style["wrap"]}>
            <article className={style["lightings"]}>
              <section className={style["one"] + " " + style["section"]}>
                <section className={style["two"] + " " + style["section"]}>
                  <section className={style["three"] + " " + style["section"]}>
                    <section className={style["four"] + " " + style["section"]}>
                      <section
                        className={style["five"] + " " + style["section"]}
                      ></section>
                    </section>
                  </section>
                </section>
              </section>
            </article>
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
