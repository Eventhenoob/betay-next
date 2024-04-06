import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
interface Props {
  children: JSX.Element;
  width: "fit-content" | "100%";
}
const RevelAnimation = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevelAnimation;
