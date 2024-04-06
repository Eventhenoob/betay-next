import { useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  lottieElement: ReactNode;
}

const AnimationOnHover = ({ children, lottieElement, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);
  let prevX: null | number = null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(event) => {
        if (prevX === null) prevX = event.clientX;
        let currentX = event.clientX;

        let deltaX = currentX - prevX;

        if (svgRef.current)
          svgRef.current.style.transform = `translate(${deltaX}px, -120%)`;
      }}
      className={
        "inline-block m-auto md:m-0 md:w-max relative translate-y-0 " +
        className +
        " " +
        (isHovered ? "" : " animate-pulse ")
      }
    >
      {children}
      {
        <div
          ref={svgRef}
          className={
            "absolute z-50 w-44 -translate-y-full left-0 " +
            (isHovered ? "visible " : "hidden")
          }
        >
          {lottieElement}
        </div>
      }
    </div>
  );
};

export default AnimationOnHover;
