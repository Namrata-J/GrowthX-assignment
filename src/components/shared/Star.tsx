import "./styles.css";
import { motion } from "framer-motion";
import type { StarProps } from "./shared.types";
import { CurvedTriangle } from "./atoms/triangle/CurvedTriangle";
import { useRef } from "react";

const Star = ({ bgColor, width, setAnimationShouldtranslateY }: StarProps) => {
  const flag = useRef(false);

  return (
    <motion.div
      className="star"
      style={{ backgroundColor: bgColor, width }}
      initial={{
        opacity: 0,
        x: -120,
        y: -120,
        rotate: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 1],
        width: [20, 30, 65, 85],
        rotate: [0, 45, 90, 90],
        x: [-120, -120, -65 / 2, -85 / 2],
        y: [-50, -50, -20, -40],
      }}
      transition={{
        duration: 4,
        ease: "easeOut",
        times: [0, 0.2, 0.5, 1],
      }}
      onUpdate={(latest) => {
        if (!flag.current && (latest?.width as number) >= 65) {
          flag.current = true;
          setAnimationShouldtranslateY(true);
        }
      }}
    >
      <CurvedTriangle isUpright={true} />
      <CurvedTriangle isUpright={false} />
    </motion.div>
  );
};

export { Star };
