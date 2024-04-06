"use client";
import { useState } from "react";
import style from "./style.module.css";

const images = ["/s1.jpeg", "/s2.jpeg", "/s3.jpeg"];

const ImageSlider = () => {
  const [current, setCurrent] = useState(-1);
  return (
    <>
      <div className={style["container"]}>
        {images.map((img, i) => (
          <img
            className={
              style["img"] + " " + (i == current ? style["active"] : "")
            }
            onClick={() => {
              i == current && setCurrent(-1);
              i != current && setCurrent(i);
            }}
            src={img}
            key={i}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
