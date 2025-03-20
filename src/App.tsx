import "./App.css";
import Home from "./Pages/Home/Home";
import backgroundImage from "../public/2.jpg";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [interactionState, setInteractionState] = useState<"initial" | "hovering" | "active">("initial");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (interactionState === "initial") {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleInteraction = () => {
      if (interactionState === "initial") {
        setInteractionState("hovering");
      }
    };

    const handleClick = () => {
      setInteractionState("active");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleClick);
    };
  }, [interactionState]);

  const handleSkipIntro = () => {
    setInteractionState("active");
  };

  return (
    <div
      ref={appRef}
      className="h-screen w-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: interactionState === "initial" ? "none" : "auto"
      }}
    >
      <AnimatePresence>
        {interactionState === "initial" && (
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-white text-center text-4xl md:text-6xl font-bold mb-8 px-4"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Illuminate your brand, with a touch of elegance
            </motion.h1>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-white text-xl mb-6">Click anywhere to continue</p>
              <button 
                onClick={handleSkipIntro}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Enter Site
              </button>
            </motion.div>
          </motion.div>
        )}

        {interactionState === "initial" && (
          <motion.div
            className="w-12 h-12 rounded-full bg-orange-500 fixed pointer-events-none z-30 flex items-center justify-center"
            style={{ 
              left: cursorPosition.x - 24, 
              top: cursorPosition.y - 24 
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white text-xs">Click</span>
          </motion.div>
        )}

        {interactionState === "hovering" && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white/90 p-10 rounded-xl max-w-2xl text-center shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Lumen Digital</h2>
              <p className="text-gray-600 mb-6">Ready to transform your digital presence with strategies that illuminate your path to success?</p>
              <button 
                onClick={handleSkipIntro}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Let's Begin
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {interactionState === "active" && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-full h-full"
        >
          <div className="w-full h-full p-4 md:p-8">
            <Home />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
