"use client"
import ImageSliderMini from "@/components/ImageSliderMini/ImageSliderMini";
// import CursorMask from "../components/CursorMark/CursorMask";
// import { useState } from "react";
import SkillsTray from "@/components/SkillsTray";
import WorkTray from "@/components/WorkTray";
const Expertises = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    // setIsHovered(true);
  };
  const handleMouseLeave = () => {
    // setIsHovered(false);
  };
  return (
    <>
      {/* <CursorMask isHovered={isHovered} /> */}

      <main className="w-full text-center lg:text-left lg:px-40 pt-48 flex flex-col  min-h-screen overflow-x-hidden">
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-5xl lg:text-7xl  font-heading  "
        >
          <span className="inline-block border-b-2 border-b-[#EF7238] ">
            Nos
          </span>{" "}
          expertises
        </h1>

        <section className="mt-10  mb-40 flex  flex-wrap justify-between items-center">
          <div className="text-xl p-4 lg:pr-16 flex gap-4 flex-col lg:w-3/6">
            <h3
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="text-4xl font-heading text-[#EF7238]"
            >
              Stratégie de communication
            </h3>
            <p className="">
              Une communication juste et efficace nécessite de choisir les bons
              supports avec le bon message et au bon moment. Nous vous
              accompagnons dans votre stratégie afin de réussir votre
              communication avec un budget maîtrisé.
            </p>
            <p className="">
              Nous pouvons intervenir en conseil stratégique au moment de la
              définition de l’identité : recherche d’un nom, d’une baseline, ou
              encore d’un logo jusqu’à l’établissement d’une charte graphique et
              éditoriale. Créer votre identité visuelle, la faire vivre ou
              évoluer sont des étapes essentielles pour permettre à votre marque
              de se faire connaître, de se distinguer et de révéler sa
              personnalité.
            </p>
            <p className="">
              Notre mission de conseil nous amène aussi à concevoir pour vous
              les supports à créer : définition de concepts, réflexion sur
              l’ergonomie, conception et rédaction des messages forts. La
              réflexion que nous menons en amont des phases graphiques et
              techniques, permet de laisser la meilleure expérience à ceux qui
              découvriront vos supports de communication.
            </p>
          </div>
          <div className="lg:w-3/6  w-full">
            <ImageSliderMini
              
              images={["e1.jpeg", "e2.jpeg", "e3.jpeg"]}
            />
          </div>
        </section>
        <section className="mt-4 mb-40 flex flex-wrap justify-center items-center">
          <div className="lg:-order-1 z-50 relative order-1 lg:w-1/2 w-full">
            <ImageSliderMini
             
              images={["e1.jpeg", "e2.jpeg", "e3.jpeg"]}
            />
          </div>
          <div className=" text-xl p-4 lg:pl-16 flex gap-4 flex-col lg:w-1/2">
            <h3
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="text-4xl font-heading text-[#EF7238]"
            >
              Création graphique
            </h3>
            <p className="">
              Pour être identifiée efficacement par vos cibles, votre marque
              doit présenter des supports cohérents entre eux. Les images, la
              ligne graphique et même le ton des textes doivent être conçus dans
              un même esprit.
            </p>
            <p className="">
              À l’agence Darwin, notre démarche créative consiste à traduire
              l’esprit de votre marque avec clarté et modernité, en respectant
              vos aspirations et le caractère de votre organisation. Vous avez
              déjà une identité ? Nous nous attachons à travailler dans la
              lignée de votre charte graphique, afin d’assurer la continuité de
              vos supports.
            </p>
            <p className="">
              Nous prenons en charge la création graphique de tous types de
              supports : de la brochure de présentation de votre société, aux
              supports événementiels pour vos salons, en passant par les
              marquages de véhicules, de textiles ou bien encore les enseignes.
              Le print, c’est aussi la conception de beaux ouvrages, la
              réalisation d’illustrations personnalisées ou encore la création
              d’affiches qui sauront attirer le regard de vos prospects.
            </p>
          </div>
        </section>
        <section className="mt-4 mb-40 flex flex-col flex-wrap justify-center items-center">
          <h3 className="text-4xl font-heading mb-20 font-bold italic">Prestations de service</h3>
          <SkillsTray />
        </section>
        <section className="mt-4 mb-40 flex flex-col flex-wrap justify-center items-center">
          <h3 className="text-4xl font-heading mb-20 font-bold italic">Nos réalisations</h3>
          <WorkTray />
        </section>
      </main>
    </>
  );
};

export default Expertises;
