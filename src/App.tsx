import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "./components/shared/Star";
import { CurvedTriangle } from "./components/shared/atoms";

function App() {
  const [animationShouldtranslateY, setAnimationShouldtranslateY] =
    useState(false);

  return (
    <div className="animation">
      <motion.div
        style={{ position: "relative" }}
        initial={{
          y: 100,
          opacity: 1,
        }}
        animate={{
          y: animationShouldtranslateY ? 0 : 100,
        }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="animation__star"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="animation__star--rectangle-wrapper">
            <div className="animation__star-reactangle">
              <Star
                bgColor="white"
                width={20}
                setAnimationShouldtranslateY={setAnimationShouldtranslateY}
              />
            </div>
          </div>
          <motion.div
            className="animation__star--reveal"
            initial={{ bottom: "-30%" }}
            animate={{
              bottom: "80%",
            }}
            transition={{ duration: 2 }}
          ></motion.div>
          <CurvedTriangle isUpright={false} />
        </motion.div>
        <motion.div
          className="animation__star--text"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [animationShouldtranslateY ? 1 : 0, 0],
          }}
          transition={{ duration: 2, times: [0.8, 1]}}
        >
          ELEVATE
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
