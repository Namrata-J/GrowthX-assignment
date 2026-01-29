import type { StarProps } from "./shared.types";
import "./styles.css";

const Star = ({ bgColor }: StarProps) => {
  return (
    <div className="star" style={{ backgroundColor: bgColor }}>
      <div className="circles"></div>
    </div>
  );
};

export { Star };
