import Expertises from "./Experties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Solutions Numériques Expertes - Agence Darwin`,
  description: `Révolutionnez votre entreprise grâce à notre expertise numérique. Du
référencement à la conception Web, nos stratégies innovantes sont le moteur du succès.
Atteignez vos objectifs numériques avec nous.`,
};
const page = () => {

  return (
    <Expertises />
  );
};

export default page;
