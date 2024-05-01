import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Agence Darwin | Agence Experte Communication Digitale",
  description: `Transformez votre entreprise avec des stratégies innovantes. De la conception de
sites Web au référencement, notre équipe passionnée propose des solutions numériques
percutantes adaptées à vos besoins.`,
};

export default function page() {
  return (
    <Home />
  );
}
