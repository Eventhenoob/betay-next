import Link from "next/link";

interface NavigationContentProps {
  isActive: boolean;
  disableActive: () => void;
}

const NavigationContent = ({
  isActive,
  disableActive,
}: NavigationContentProps) => {
  return (
    <div
      className={
        "fixed px-10 md:px-52 top-0 z-[998] left-0 bg-[#131312] w-screen translate-all duration-300 h-screen " +
        (!isActive && "-translate-x-full")
      }
    >
      <ul
        onClick={(e) => {
          e.target !== e.currentTarget && disableActive();
        }}
        className={
          " flex opacity-0 flex-col font-bold justify-center items-start  h-full gap-10 transition-all duration-[2s]  " +
          (isActive && "opacity-100")
        }
      >
        <li className="text-3xl hover:text-[#EF7238] transition-all duration-300 text-white">
          <Link href="/home">Home</Link>
        </li>
        <li className="text-3xl hover:text-[#EF7238] transition-all duration-300 text-white">
          <Link href="/agence">Agence</Link>
        </li>
        <li className="text-3xl hover:text-[#EF7238] transition-all duration-300 text-white">
          <Link href="/expertises">Expertise</Link>
        </li>

        <li className="text-3xl hover:text-[#EF7238] transition-all duration-300 text-white">
          <Link href="/clients">Cas clients</Link>
        </li>

        <li className="text-3xl hover:text-[#EF7238] transition-all duration-300 text-white">
          <Link href="/actualites">Actualités</Link>
        </li>
        <li className="text-3xl hover:text-[#EF7238] transition-all duration-300 text-white">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationContent;
