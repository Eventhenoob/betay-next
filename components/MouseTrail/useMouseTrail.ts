import { useEffect } from "react";
import style from "./Style.module.css";

const useMouseTrail = () => {
  let counter = 0;

  const makeBubbles = (e: any) => {
    // Increase the counter on each call
    counter++;

    // Only proceed and reset the counter every 5th call
    if (counter % 8 === 0) {
      const body = document.querySelector("body");
      const circle = document.createElement("span");

      // Check if e exists and has the nativeEvent property
      let offsetX, offsetY;
      if (e && e.nativeEvent) {
        offsetX = e.nativeEvent.offsetX;
        offsetY = e.nativeEvent.offsetY;
      } else if (e) {
        // If nativeEvent is not available, use pageX and pageY
        if (body) {
          offsetX = e.pageX - body.offsetLeft;
          offsetY = e.pageY - body.offsetTop;
        }
      }

      circle.classList.add(style["bubble"]);
      circle.style.left = offsetX + "px";
      circle.style.top = offsetY + "px";
      let size = Math.random() * 40;
      circle.style.width = 10 + size + "px";
      circle.style.height = 10 + size + "px";
      body?.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 2000);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", makeBubbles);

    return () => {
      document.removeEventListener("mousemove", makeBubbles);
    };
  }, []);
};

export default useMouseTrail;
