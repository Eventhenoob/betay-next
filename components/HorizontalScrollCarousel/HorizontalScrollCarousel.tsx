import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalScrollCard from "./HorizontalScrollCard";
import RevelAnimation from "../RevelAnimation";
import PremiumButton from "../Buttons/PermiumButton";
interface Props {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const HorizontalScrollCarousel = ({ onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div className="">
      <RevelAnimation width="fit-content">
        <div className="flex h-20 items-center justify-center">
          <h2
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="text-4xl text-white font-heading font-bold text-center "
          >
            NOS EXPERTISES
          </h2>
        </div>
      </RevelAnimation>

      <HorizontalScrollCarouselContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className="flex h-48 items-center justify-center">
        <PremiumButton href="/expertises" text="NOS EXPERTISES" />
      </div>
    </div>
  );
};

const HorizontalScrollCarouselContainer = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[450vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pt-20">
          <HorizontalScrollCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            img="e1.jpeg"
            mainTitle="Stratégie de communication"
            subText={[
              {
                heading: "AUDIT DE COMMUNICATION",
                description:
                  "Pour mieux appréhender votre activité, identifier les enjeux et vous accompagner dans votre développement.",
              },
              {
                heading: "PLAN STRATEGIQUE DE COMMUNICATION",
                description:
                  "Élaboration d'un plan de communication opérationnel et définition des objectifs à atteindre grâce à votre présence en ligne.",
              },
              {
                heading: "ENGAGEMENT SUR LE RESULTAT",
                description:
                  "Nous nous engageons à booster votre trafic web, à générer plus de prospects et à renforcer votre marque.",
              },
            ]}
          />

          <HorizontalScrollCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            img="e2.jpeg"
            mainTitle="VOS SUPPORTS DE COMMUNICATION"
            subText={[
              {
                heading: "IMAGE DE MARQUE",
                description:
                  "Nous créons des visuels correspondant à votre marque, incluant logo, charte graphique, wording, plaquettes, mémoires techniques, livrets d'accueil, signatures d'e-mails, supports de correspondance et personnalisation des réseaux sociaux.",
              },
              {
                heading: "SITE WEB",
                description:
                  "Nous élaborons votre site web sur mesure, en fonction de vos besoins spécifiques et de vos objectifs de croissance.",
              },
              {
                heading: "PRODUCTION VISUELLE ",
                description:
                  "Des séances photo, vidéos d'entreprise, motion design... Notre équipe répond à tous vos besoins en contenu visuel.",
              },
            ]}
          />

          <HorizontalScrollCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            img="e3.jpeg"
            mainTitle="Community Management"
            subText={[
              {
                heading: "Stratégie de contenus",
                description:
                  "Une offre personnalisée pour répondre à vos objectifs de conquête et de recrutement : chaque semaine, nous créons du contenu pour votre site web et vos réseaux sociaux, tout en assurant la gestion de votre e-réputation.",
              },
              {
                heading: "PUBLICITÉ EN LIGNE",
                description:
                  "Nos social media managers dédiés à votre stratégie digitale prennent en charge et optimisent les publications sponsorisées pour atteindre vos prospects.",
              },
              {
                heading: "RAPPORTS DE PERFORMANCE",
                description:
                  "Un rapport mensuel détaillant les résultats chiffrés de chaque campagne de communication.",
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
