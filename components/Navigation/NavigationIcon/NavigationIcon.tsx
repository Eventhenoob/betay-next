import style from "./style.module.css";

interface NavigationIconProps {
  onClick: () => void;
  isActive: boolean;
}

const NavigationIcon = ({ onClick, isActive }: NavigationIconProps) => {
  return (
    
   <div className=" group  flex flex-col items-end "> 
   <button
      onClick={onClick}
      className={
        " justify-center peer h-14 w-14 overflow-hidden  items-center bg-[#131312] rounded-full flex flex-col " +
        style["button"] +
        " " +
        (isActive && style["active"])
      }
    >
      <span className={style["icon"]}></span>
    </button>
    <p className="invisible absolute top-20 right-0 md:top-28 transition-all duration-500 mx-2 md:min-w-max opacity-0 bg-black p-2 rounded-md border-b-2 border-b-orange-400 peer-[:hover]:visible peer-[:hover]:opacity-100">Qu'est-ce que vous pouvez nous proposer ?</p>
    </div>
    
    
  );
};

export default NavigationIcon;
