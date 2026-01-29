import "./styles.css";
import type { StarProps } from "./shared.types";
import { CurvedTriangle } from "./atoms/triangle/CurvedTriangle";

const Star = ({ bgColor, width }: StarProps) => {
  return (
    <div className="star" style={{ backgroundColor: bgColor, width }}>
      <CurvedTriangle isUpright={true} />
      <CurvedTriangle isUpright={false} />
    </div>
  );
};

export { Star };
