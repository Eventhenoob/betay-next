import Link from "next/link";
import style from "./style.module.css";

const RainbowHover = ({ text, href = "" }: { text: string; href?: string }) => {
  return (
    <Link
      href={href}
      className={
        " text-xs z-40 md:text-base py-4 px-8 " + style["glow-on-hover"]
      }
      type="button"
    >
      {text}
    </Link>
  );
};

export default RainbowHover;
