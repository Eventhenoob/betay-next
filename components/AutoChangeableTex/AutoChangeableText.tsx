import { useEffect, useState } from "react";
import style from "./AutoChangeableText.module.css";

interface Props {
  textArray: string[];
  timings: number[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AutoChangeableText = ({
  textArray,
  timings,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}: Props) => {
  const [currentSelected, setCurrentSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSelected((previousItem) =>
        previousItem === textArray.length - 1 ? 0 : previousItem + 1
      );
    }, timings[currentSelected] * 1000);

    return () => clearInterval(interval);
  }, [currentSelected, textArray, timings]);

  return (
    <div className="relative flex w-full justify-center items-center">
      {textArray.map((text, index) => (
        <p
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          key={index}
          className={
            style["textItem"] +
            " text-slate-300 absolute top-0 left-0 text-3xl md:text-3xl lg:text-5xl font-bold uppercase w-full text-center  font-main " +
            (currentSelected === index ? style["active"] : "")
          }
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default AutoChangeableText;
