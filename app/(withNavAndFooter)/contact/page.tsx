import { Metadata } from "next";
import Contact from "./Contact";
export const metadata: Metadata = {
  title: "Agence de Communication Digitale",
  description: `Transformez votre présence numérique avec l'agence de communication
numérique n°1. Des conseils d’experts de la stratégie à la mise en œuvre pour des
résultats exceptionnels !`,
};

const Page = () => {

  return (
    <Contact />
  );
};

export default Page;
