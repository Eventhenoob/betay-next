import { useEffect, useRef } from "react";
import style from "./style.module.css";
const MyImageSlider = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    if (slideRef.current === null) return;
    let lists = slideRef.current.querySelectorAll(".item");

    slideRef.current.appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    if (slideRef.current === null) return;
    let lists = slideRef.current.querySelectorAll(".item");

    slideRef.current.prepend(lists[lists.length - 1]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextClick();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={
        style["container"] +
        " object-cover  w-[90vw] h[90vh] md:w-[70vw] md:h-[90vh] "
      }
    >
      <div ref={slideRef} className={style["slide"]}>
        <div
          className={"item  " + style["item"]}
          style={{ backgroundImage: "url(aspenGlass.jpg)" }}
        ></div>
        <div
          className={"item  " + style["item"]}
          style={{ backgroundImage: "url(aspenWall.jpg)" }}
        >
          <div className={style["content"]}></div>
        </div>
        <div
          className={"item  " + style["item"]}
          style={{ backgroundImage: "url(darwinTshirts.jpg)" }}
        >
          <div className={style["content"]}></div>
        </div>
        <div
          className={"item  " + style["item"]}
          style={{ backgroundImage: "url(mugTemplate.jpg)" }}
        >
          <div className={style["content"]}></div>
        </div>
        <div
          className={"item  " + style["item"]}
          style={{ backgroundImage: "url(tShirt.jpg)" }}
        >
          <div className={style["content"]}></div>
        </div>
      </div>
      <div className={style["buttons"] + "  flex gap-3"}>
        <button onClick={() => handlePrevClick()} id="prev">
          précédent
        </button>
        <button onClick={() => handleNextClick()} id="next">
          suivante
        </button>
      </div>
    </div>
  );
};

export default MyImageSlider;
