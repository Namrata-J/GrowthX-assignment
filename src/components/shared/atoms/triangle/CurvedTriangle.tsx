import "./styles.css";
import type { CurvedTriangleProps } from "./curvedTriangle.types";

const CurvedTriangle = ({ isUpright, border }: CurvedTriangleProps) => {
  return (
    <div
      className={`star__circles${isUpright ? "--upright" : "--inverted"}`}
      style={{ border: border || "none" }}
    ></div>
  );
};

export { CurvedTriangle };
