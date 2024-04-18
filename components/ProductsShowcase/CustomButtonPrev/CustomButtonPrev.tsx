import { GrFormPrevious } from "react-icons/gr";

const CustomButtonPrev = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={" text-3xl cursor-pointer group flex "}
    >
      <GrFormPrevious className="group-[:hover]:-ml-2 transition-all duration-300" />
      <GrFormPrevious className="-ml-4 group-[:hover]:-ml-5 transition-all duration-300" />
      <GrFormPrevious className="-ml-4 group-[:hover]:-ml-5 transition-all duration-300" />
    </button>
  );
};

export default CustomButtonPrev;
