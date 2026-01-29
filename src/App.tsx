import "./App.css";
// import { Star } from "./components/shared/Star";
import { CurvedTriangle } from "./components/shared/atoms";

function App() {
  return (
    <div className="animation">
      <div className="animation__star">
        <div className="animation__star--rectangle"></div>
        <CurvedTriangle isUpright={false} />
      </div>
    </div>
  );
}

export default App;
