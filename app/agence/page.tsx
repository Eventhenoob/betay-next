"use client"
import GoalCard from "@/components/GoalCard";
import ImageSlider from "@/components/ImageSlider";

import CrewTray from "@/components/CrewTray";
import ClientsShowcase from "@/components/ClientsShowcase";
import { useEffect, useState } from "react";

const Agence = () => {
  const [cube, setCube] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCube(true);
    }, 100);
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
        <section className="pt-80 relative">
          <div className="relative z-50">
            <h2 className="md:text-6xl font-heading relative z-10 font-extralight text-4xl px-4 md:p-0 md:w-[60%] m-auto text-center text-bold text-[#EF7238] mb-40 md:mb-60">
              Excellence Collaborative <br/> <span className="block mt-3">Élever la Communication</span> 
            </h2>
            <div className="flex justify-evenly  gap-32 md:gap-96 lg:gap-0 flex-wrap">
              <GoalCard
                heading="Notre Engageant Manifeste"
                animation={"/rocket.png"}
                description="Chez Agence Darwin, nous croyons en la collaboration transparente, l'adaptabilité et la recherche constante de l'excellence. Notre approche personnalisée garantit que chaque client bénéficie d'une solution sur mesure pour évoluer avec succès dans le monde numérique en constante évolution"
              />

              <GoalCard
                heading="Collaboration Distinguée pour une Évolution Réussie"
                animation={"/target.png"}
                description="Votre réussite est notre priorité. Nous travaillons main dans la main avec nos clients, comprenant leurs besoins uniques pour créer des solutions qui vont au-delà des attentes et stimulent une véritable évolution dans leur communication"
              />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="p-4  md:p-20">
            <h2 className="text-6xl z-10 text-center font-heading mb-6 relative text-[#EF7238]">
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
          <h2 className="text-4xl px-4 relative md:text-6xl md:w-[80%] m-auto mb-20 capitalize font-extralight text-center text-[#EF7238]">
            Rencontrez nos experts passionnés pour une communication digitale
            complète.
          </h2>
          <CrewTray />
        </section>

        <section className="py-5 pb-40">
          <h2 className="text-6xl relative mb-20 font-extralight  capitalize text-center text-[#EF7238]">
            Nos Clients
          </h2>
          <ClientsShowcase />
        </section>
      </main>
    </>
  );
};

export default Agence;
