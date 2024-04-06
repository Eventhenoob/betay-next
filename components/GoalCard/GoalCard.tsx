"use client";
import style from "./style.module.css";
interface Props {
  heading: string;
  description: string;
  animation: string;
}

const GoalCard = ({ animation, description, heading }: Props) => {
  return (
    <div
      className={
        "hover:scale-110 transition-all duration-500 w-[20rem] h-[30rem] sm:h-[30rem] sm:w-[25rem] md:h-[40rem] md:w-[30rem] bg-zinc-900 rounded-3xl flex flex-col items-center  " +
        style["card"]
      }
    >
      <img className="w-1/2 h-auto -mt-12 md:-mt-28" src={animation} />
      <div className=" p-4">
        <h3 className="font-bold text-[#EF7238] text-xl sm:text-2xl md:text-4xl mb-2 ">
          {heading}
        </h3>
        <p className="md:text-xl mt-1 md:mt-7 leading-8">{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
