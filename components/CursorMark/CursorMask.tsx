import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import styles from "./sytle.module.css"; // Corrected typo in
import useMobile from "@/utils/useMobile";

interface CursorMaskProps {
  isHovered?: boolean;
}

const CursorMask = ({ isHovered = false }: CursorMaskProps) => {
  const isMobile = useMobile();
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  return (
    <>
      {!isMobile && x != null && y != null && (
        <motion.div
          className={`${styles.mask} fixed top-0 left-0 ${
            isHovered ? " z-50 " : ""
          }`}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0 }}
        />
      )}
    </>
  );
};

export default CursorMask;
