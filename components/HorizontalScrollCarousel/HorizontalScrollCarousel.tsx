import { useRef } from "react";
import RevelAnimation from "../RevelAnimation";
import Slider from "react-slick";
import CustomButtonPrev from "../ProductsShowcase/CustomButtonPrev";
import CustomButtonNext from "../ProductsShowcase/CustomButtonNext";
import HorizontalScrollCard from "./HorizontalScrollCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  let sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative h-[90vh] mb-40 ">
      <div className=" slider-container">
        <Slider
          arrows={false}
          {...settings}
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          className=" relative "
        >
          <HorizontalScrollCard subText={[{
            description: "Pour mieux appréhender votre activité, identifier les enjeux et vous accompagner dans votre développement.",
            heading: 'AUDIT DE COMMUNICATION'
          },
          {
            description: "Élaboration d'un plan de communication opérationnel et définition des objectifs à atteindre grâce à votre présence en ligne.",
            heading: 'PLAN STRATEGIQUE DE COMMUNICATION'
          },
          {
            description: "Nous nous engageons à booster votre trafic web, à générer plus de prospects et à renforcer votre marque.",
            heading: 'ENGAGEMENT SUR LE RESULTAT'
          }]} video="sliderV1.mp4" />

          

          <HorizontalScrollCard subText={[{
            description: "Nous créons des visuels correspondant à votre marque, incluant logo, charte graphique, wording, plaquettes, mémoires techniques, livrets d'accueil, signatures d'e-mails, supports de correspondance et personnalisation des réseaux sociaux.",
            heading: 'IMAGE DE MARQUE'
          },
          {
            description: "Nous élaborons votre site web sur mesure, en fonction de vos besoins spécifiques et de vos objectifs de croissance.",
            heading: 'SITE WEB'
          },
          {
            description: "Des séances photo, vidéos d'entreprise, motion design... Notre équipe répond à tous vos besoins en contenu visuel.",
            heading: 'PRODUCTION VISUELLE '
          }]} video="sliderV2.mp4" />
          <HorizontalScrollCard subText={[{
            description: "Une offre personnalisée pour répondre à vos objectifs de conquête et de recrutement : chaque semaine, nous créons du contenu pour votre site web et vos réseaux sociaux, tout en assurant la gestion de votre e-réputation.",
            heading: 'Stratégie de contenus'
          },
          {
            description: "Nos social media managers dédiés à votre stratégie digitale prennent en charge et optimisent les publications sponsorisées pour atteindre vos prospects.",
            heading: 'PUBLICITÉ EN LIGNE'
          },
          {
            description: "Un rapport mensuel détaillant les résultats chiffrés de chaque campagne de communication",
            heading: 'RAPPORTS DE PERFORMANCE'
          }]} video="sliderV3.mp4" />

        </Slider>

        <div className="w-full relative">
          <div className=" m-auto mt-0 flex justify-center gap-10">
            <div className="w-10">
              <CustomButtonPrev
                onClick={() => {
                  sliderRef.current?.slickPrev();
                }}
              />
            </div>
            <div className="w-10">
              <CustomButtonNext
                onClick={() => {
                  sliderRef.current?.slickNext();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
