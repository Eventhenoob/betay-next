import { MdOutlineNavigateNext } from "react-icons/md";
const CustomButtonNext = ({
  onClick,
}: {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      onClick={onClick}
      className={"cursor-pointer  flex  text-3xl   z-50 group"}
    >
      <MdOutlineNavigateNext className="-mr-4 group-[:hover]:translate-x-3 transition-all duration-300" />
      <MdOutlineNavigateNext className="-mr-4 group-[:hover]:translate-x-2 transition-all duration-300" />
      <MdOutlineNavigateNext className="-mr-4 group-[:hover]:translate-x-1 transition-all duration-300" />
    </button>
  );
};

export default CustomButtonNext;
