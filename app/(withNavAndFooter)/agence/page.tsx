import Agence from "./Agence";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: `L'Agence Darwin | L'évolution de la communication`,
  description: `Vivez l’évolution de la communication avec notre agence visionnaire
inspirée de Charles Darwin. Transformez votre présence numérique avec
créativité et expertise.`,
};

const page = () => {

  return (
    <>
      <Agence />
    </>
  );
};

export default page;
