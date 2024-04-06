"use client";
import style from "./style.module.css";
const ClientsShowcase = () => {
  const logos = [
    "/logos/3m.svg",
    "/logos/barstool-store.svg",
    "/logos/budweiser.svg",
    "/logos/buzzfeed.svg",
    "/logos/forbes.svg",
    "/logos/macys.svg",
    "/logos/menshealth.svg",
    "/logos/mrbeast.svg",
  ];

  return (
    <>
      <div className={style["logos"]}>
        <div className={style["logos-slide"]}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className={style["logos"]}>
        <div className={style["logos-slide"]}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className={style["logos"]}>
        <div className={style["logos-slide"]}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientsShowcase;
