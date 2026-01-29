import "./styles.css";
import { motion } from "framer-motion";
import type { CurvedTriangleProps } from "./curvedTriangle.types";

const CurvedTriangle = ({ isUpright, borderTop }: CurvedTriangleProps) => {
  return (
    <div
      className={`star__circles${isUpright ? "--upright" : "--inverted"}`}
      style={{ borderTop: borderTop || "none" }}
    >
      <motion.div
        style={{
          position: "relative",
          zIndex: -1,
          height: "100%",
          width: "230%",
          background:
            "linear-gradient( 45deg, #fff, #fff 55%, transparent 55%)",
        }}
        initial={{
          left: "-105%",
        }}
        animate={{
          left: "0",
        }}
        transition={{ duration: 1.5, delay: 1 }}
      ></motion.div>
    </div>
  );
};

export { CurvedTriangle };
