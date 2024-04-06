import { useState } from "react";
import { GoDot } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

interface ArrowButtonProps {
  direction: "left" | "right" | "top" | "bottom";
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  text: string;
  isDisabled?: boolean;
}
const ArrowButton = ({
  isDisabled = false,
  direction,
  onClick,
  text,
  type = "button",
}: ArrowButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      disabled={isDisabled}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onClick={onClick}
      className="flex text-sm gap-0 group relative min-w-32 p-2 px-4 rounded-3xl hover:bg-black transition-all duration-500 bg-white text-black z-40 justify-center items-center "
      type={type}
    >
      <span
        className={
          "text-xs text-slate-400 p-2 transition-all duration-500  " +
          "group-[:hover]:bg-white group-[:hover]:font-bold group-[:hover]:rounded-full  group-[:hover]:mr-2 group-[:hover]:text-black"
        }
      >
        {!hover ? (
          <GoDot className="" />
        ) : (
          <>
            {direction === "bottom" && (
              <GoArrowDown className={"font-bold text-black"} />
            )}
            {direction === "top" && (
              <GoArrowUp className={"font-bold text-black"} />
            )}
            {direction === "right" && (
              <GoArrowRight className={"font-bold text-black"} />
            )}
            {direction === "left" && (
              <GoArrowLeft className={"font-bold text-black"} />
            )}
          </>
        )}
      </span>
      <span
        className={
          "  inline-flex flex-col uppercase transition-all duration-500 " +
          (hover && " font-bold text-white ")
        }
      >
        {text}
        <span
          className={
            "w-full h-[1px] transition-all duration-500 text-slate-100 bg-white " +
            (hover && " w-0 ")
          }
        ></span>
      </span>
    </button>
  );
};

export default ArrowButton;
