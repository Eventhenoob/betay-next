"use client"
import PremiumButton from "@/components/Buttons/PermiumButton";
import ProductsShowcase from "@/components/ProductsShowcase";
// import { useState } from "react";
// import CursorMask from "../components/CursorMark/CursorMask";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import RevelAnimation from "@/components/RevelAnimation";
import VideoBG from "@/components/VideoBG";
import Link from "next/link";

const Clients = () => {

    return (
        <>

            <header className="flex p-1 relative justify-center items-center w-screen h-screen">
                <h1
                    className="text-4xl  md:text-5xl lg:text-7xl text-center font-thin"
                >
                    DARWIN, experte en design graphique
                </h1>
                <VideoBG
                    isDarkBg={true}
                    onLoadedData={() => { }}
                    video="clients-bg.mp4"
                />
            </header>
            <section className="pt-32">
                <div className="">
                    <RevelAnimation width="fit-content">
                        <h2
                            className="text-4xl lg:text-7xl mb-14 text-white font-heading font-bold text-center w-[80%] m-auto"
                        >
                            Identité de marque et Marketing
                        </h2>
                    </RevelAnimation>
                    <p className="w-[80%] mb-10 text-xl md:text-3xl  m-auto">
                        L&apos;agence de communication {" "}
                        <Link className="text-blue-400" href="/">
                            Agence Darwin
                        </Link>{" "}
                        se distingue par son expertise dans la création de stratégies de
                        communication novatrices destinées aux entreprises.{" "}
                    </p>

                    <p className="mb-10 w-[80%] text-xl md:text-3xl  m-auto">
                        Notre vaste expérience englobe la conception de sites web, la gestion
                        efficace des réseaux sociaux et la mise en œuvre de campagnes
                        publicitaires en ligne percutantes.
                    </p>

                    <p className="mb-10 w-[80%] text-xl md:text-3xl  m-auto">
                        Chez Darwin, nous sommes fiers d&apos;avoir accompagné de nombreuses
                        entreprises locales dans l&apos;amélioration de leur référencement SEO et
                        l&apos;augmentation de leurs ventes. Notre équipe est composée de
                        professionnels chevronnés et passionnés, prêts à mettre leur
                        savoir-faire au service de votre projet.
                    </p>

                    <p className="mb-10 w-[80%] text-xl md:text-3xl  m-auto">
                        Nous vous invitons à nous contacter pour discuter de vos besoins
                        spécifiques et élaborer ensemble une stratégie marketing sur mesure.
                        Chez Darwin, notre objectif est de vous aider à atteindre vos objectifs
                        commerciaux grâce à des solutions digitales innovantes et efficaces.
                    </p>
                    <ProductsShowcase />
                    <div className="p-10 my-20 flex justify-center items-center">
                        <PremiumButton
                            text="UN PROJET EN TÊTE? CONTACTEZ-NOUS"
                            href="/contact"
                        />
                    </div>
                </div>

            </section>
        </>
    );
};

export default Clients;
