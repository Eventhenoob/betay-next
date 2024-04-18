"use client"
import GoalCard from "@/components/GoalCard";
import ImageSlider from "@/components/ImageSlider";

import CrewTray from "@/components/CrewTray";
import ClientsShowcase from "@/components/ClientsShowcase";
import { useEffect, useState } from "react";
import SoloCard3D from "@/components/SoloCard3D";
import CrewCard from "@/components/CrewCard";

const Agence = () => {
  const [cube, setCube] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCube(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <header className="w-screen overflow-hidden h-screen flex justify-center items-center">
        <div className="relative group">
          <div
            className={
              " w-[150rem]  h-[150rem] z-10 bg-[#EF7238] absolute origin-center -top-[40rem] -left-[10rem]  group-[:hover]:scale-100 transition-all duration-1000 group-[:hover]:rotate-0  " +
              (cube && " scale-0 rotate-90")
            }
          ></div>
          <h1 className="relative z-30 text-5xl   md:text-[8rem] lg:text-[11rem] text-center  text-outline transition-all duration-1000 flex flex-wrap leading-[8rem] font-bold text-[#131312]">
            <span
              className={
                "group-[:hover]:text-white transition-all duration-1000 " +
                "text-white"
              }
            >
              Bienvenue
            </span>
          </h1>
          <p
            className={
              " md:text-4xl -mt-10 md:mt-0 md:p-4 font-semibold  z-20 absolute left-0 group-[:hover]:text-black transition-all duration-1000 " +
              (!cube && "text-black")
            }
          >
            DARWIN,
            <br /> l’évolution de la communication.
          </p>
        </div>
      </header>
      <main className="overflow-hidden min-h-screen w-full ">
        <section className=" py-40 w-full">
          <h2 className="md:text-6xl font-heading relative z-10 font-bold text-4xl px-4 md:p-0 md:w-[60%] m-auto text-center  text-[#EF7238] mb-40">
            Excellence Collaborative <br /> <span className="block mt-3">Élever la Communication</span>
          </h2>
          <div className="flex justify-center flex-wrap gap-10">
            <SoloCard3D image="tempimg2.png" description="" title={"Notre Engageant Manifeste"} />
            <SoloCard3D image="tempimg1.png" description="" title={"Collaboration Distinguée pour une Évolution Réussie"} />
            <SoloCard3D image="tempimg3.png" description="" title={"This is the heading"} />
          </div>
        </section>

        <section className="py-20">
          <div className="p-4  md:p-20">
            <h2 className="text-6xl z-10 text-center font-bold font-heading mb-6 relative text-[#EF7238]">
              L&apos;agence
            </h2>
            <p className="relative text-xl">
              Notre agence tire son inspiration de la vision novatrice de
              Charles Darwin, et nous nous engageons à guider nos clients dans
              la transformation digitale de leur communication
              d&apos;entreprise. Fondée avec passion, l&apos;Agence Darwin est
              le partenaire idéal pour redéfinir et dynamiser votre présence
              digitale. Notre équipe dévouée allie créativité et expertise
              technique pour propulser votre communication vers de nouveaux
              sommets.
            </p>
          </div>
          <ImageSlider />
        </section>

        <section className="py-40">
          <h2 className="text-4xl px-4 relative md:text-6xl md:w-[80%] m-auto mb-20 capitalize font-bold text-center text-[#EF7238]">
            Rencontrez nos experts passionnés pour une communication digitale
            complète.
          </h2>
          <div className="flex gap-10 flex-wrap justify-center items-center">
            <CrewCard about="One of the best programers in the world abdjhab ajhdb aan jahdiahdj abdibajnd jhvauvdaj d gadvabvdiad aiodoadh iadbh" image="Dov.jpeg" name="Dov A" post="Chef de projet" linkedin="ahjf" twitter="adknad" />
            <CrewCard about="One of the best programers in the world abdjhab ajhdb aan jahdiahdj abdibajnd jhvauvdaj d gadvabvdiad aiodoadh iadbh" image="Soji.png" name="Sojivanan M" post="Expert digital" insta="asdnad" linkedin="ahjf" twitter="" />
            <CrewCard about="One of the best programers in the world abdjhab ajhdb aan jahdiahdj abdibajnd jhvauvdaj d gadvabvdiad aiodoadh iadbh" image="Taye.png" name="Tayebi M." post="Responsable éditorial" linkedin="ahjf" twitter="" />
            <CrewCard about="One of the best programers in the world abdjhab ajhdb aan jahdiahdj abdibajnd jhvauvdaj d gadvabvdiad aiodoadh iadbh" image="Manu .png" name="Emmanuel V." post="Développeur web" linkedin="ahjf" twitter="asdasdad" />
            <CrewCard about="One of the best programers in the world abdjhab ajhdb aan jahdiahdj abdibajnd jhvauvdaj d gadvabvdiad aiodoadh iadbh" image="Sedi.png" name="Sedi Y" post="Community manager" linkedin="ahjf" twitter="" />
            <CrewCard about="One of the best programers in the world abdjhab ajhdb aan jahdiahdj abdibajnd jhvauvdaj d gadvabvdiad aiodoadh iadbh" image="Alain.png" name="Alain-Samson D." post="Motion designer" linkedin="ahjf" twitter="" />

          </div>
        </section>

        <section className="py-5 pb-40">
          <h2 className="text-6xl relative mb-20 font-bold  capitalize text-center text-[#EF7238]">
            Nos Clients
          </h2>
          <ClientsShowcase />
        </section>
      </main>
    </>
  );
};

export default Agence;
