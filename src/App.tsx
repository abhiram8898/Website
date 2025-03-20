import "./App.css";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./Pages/Home/Home"));

function App() {
  const [interactionState, setInteractionState] = useState<
    "initial" | "active"
  >("initial");
  const appRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const INTRO_DURATION = 3000;
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setInteractionState("active");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      setInteractionState("active");
      clearInterval(countdownInterval);
    }, INTRO_DURATION);

    const handleInteraction = () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
      setInteractionState("active");
    };

    window.addEventListener("click", handleInteraction);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <div
      ref={appRef}
      className="h-screen w-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://aicontentfy.com/hubfs/Blog/6120d5b1-07be-414e-9e85-498e6a3da09a.jpg')",
        cursor: interactionState === "initial" ? "pointer" : "auto",
      }}
    >
      <AnimatePresence mode="wait">
        {interactionState === "initial" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-fast text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-8 px-4 tracking-tight">
              Illuminate Your Brand
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-300 font-normal">
                with a touch of elegance
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <p className="text-white text-xl md:text-2xl">
                Enter in <span className="font-semibold">{countdown}s</span>
              </p>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        )}
      </AnimatePresence>

      {interactionState === "active" && (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                <div className="absolute inset-0 w-12 h-12 border-4 border-white/10 rounded-full animate-pulse" />
              </div>
            </div>
          }
        >
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              stiffness: 80,
              damping: 15,
              mass: 0.8,
            }}
            className="w-full h-full p-6 md:p-8"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <Home />
          </motion.div>
        </Suspense>
      )}
    </div>
  );
}

export default App;
