import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface Props {
  onClick: () => void;
  isDisabled?: boolean;
  direction: "left" | "right";
}

const ArrowFloatingButton = ({
  onClick,
  direction,
  isDisabled = false,
}: Props) => {
  return (
    <button
      disabled={isDisabled}
      className={
        "rounded-full flex justify-center items-center text-3xl absolute top-[50%] -translate-y-[50%] z-30 text-black bg-white h-12 w-12 hover:scale-110 transition-all duration-200 active:scale-95 " +
        (direction === "left" ? "left-3" : "right-3") +
        " " +
        (isDisabled
          ? "!bg-slate-300 opacity-0 hover:scale-100 active:scale-100 cursor-not-allowed "
          : "")
      }
      onClick={onClick}
    >
      {direction === "left" ? <BsArrowLeftShort /> : <BsArrowRightShort />}
    </button>
  );
};

export default ArrowFloatingButton;