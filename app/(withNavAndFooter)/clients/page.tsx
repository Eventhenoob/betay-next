import Clients from "./Clients";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `ÉLevez Votre Marque Avec Des Meilleurs Clients`,
  description: `Libérez le succès grâce à notre expertise en stratégies de communication
innovantes. De la conception de sites Web au référencement, nous nous engageons à
propulser votre entreprise vers l'avant.`,
};

const Page = () => {

  return (
    <>
      <Clients />
    </>
  );
};

export default Page;
