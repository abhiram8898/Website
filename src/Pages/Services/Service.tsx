import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import digitalMarketing from "../../../public/Marketing consulting-cuate-min.png";
import socialMediaMarketing from "../../../public/Marketing-pana-min.png";
import ppcAdvertising from "../../../public/Business Plan-amico-min.png";
import webDevelopment from "../../../public/At the office-cuate-min.png";
import design from "../../../public/Website Creator-amico.png";
import softwareDevelopment from "../../../public/Data extraction-rafiki-min.png";
import mobileDevelopment from "../../../public/Online world-amico-min.png";
import digitalMarketing1 from "../../../public/Online world-rafiki-min.png";

const seoServices = [
  {
    title: "DIGITAL MARKETING",
    icon: digitalMarketing1,
  },
  {
    title: "SOCIAL MEDIA MARKETING", 
    icon: digitalMarketing,
  },
  {
    title: "SEO",
    icon: socialMediaMarketing,
  },
  {
    title: "PPC ADVERTISING",
    icon: ppcAdvertising,
  },
  {
    title: "WEB DEVELOPMENT",
    icon: webDevelopment,
  },
  {
    title: "MOBILE DEVELOPMENT",
    icon: mobileDevelopment,
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    icon: softwareDevelopment,
  },
  {
    title: "UI/UX DESIGN",
    icon: design,
  },
];

// Rainbow border animation component
const AnimatedBorder = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.95,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="w-[200%] h-[200%] absolute -inset-1/2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: isHovered ? 4 : 0,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          background: `
            conic-gradient(
              from 0deg,
              #8b5cf6,
              #6366f1,
              #10b981,
              #3b82f6,
              #4f46e5,
              #8b5cf6
            )
          `,
          filter: "brightness(1.2) saturate(1.2)",
        }}
      />
    </motion.div>
  );
};

interface ServiceCardProps {
  service: {
    title: string;
    icon: string;
  };
  index: number;
  navigate: (path: string) => void;
}

// Card component with enhanced animations
const ServiceCard = ({ service, index, navigate }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      zIndex: 20,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
        rotate: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
  };

  const textVariants = {
    initial: {
      backgroundPosition: "0% 50%",
      scale: 1,
    },
    hover: {
      backgroundPosition: "100% 50%",
      scale: 1.05,
      transition: {
        backgroundPosition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
        scale: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 0.6,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-violet-500/20 via-indigo-500/20 to-emerald-500/25 backdrop-blur-xl p-2 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-white/10 cursor-pointer z-10 transform-all"
      onClick={() => navigate("/seoService")}
      style={{
        willChange: "transform",
      }}
    >
      <AnimatedBorder isHovered={isHovered} />

      <div className="relative z-10 bg-black/50 rounded-xl sm:rounded-2xl p-2 sm:p-4">
        <motion.div
          className="absolute inset-0 bg-indigo-500/20 rounded-xl sm:rounded-2xl blur-xl"
          variants={glowVariants}
        />

        <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
          <motion.img
            src={service.icon}
            alt={service.title}
            className="h-32 sm:h-40 md:h-52 w-full mx-auto object-contain"
            variants={imageVariants}
            loading="lazy"
            style={{ willChange: "transform" }}
          />
        </div>

        <motion.h4
          variants={textVariants}
          className="font-bold text-center text-sm sm:text-base md:text-xl mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400"
          style={{
            backgroundSize: "200% 100%",
            willChange: "transform, background-position",
          }}
        >
          {service.title}
        </motion.h4>

        <motion.div
          className="h-0.5 bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 mx-auto mt-1 sm:mt-2"
          initial={{ width: "0%" }}
          variants={{
            hover: {
              width: "70%",
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
        />
      </div>
    </motion.div>
  );
};

const StrategicSEOSection = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen w-full text-white flex items-center justify-center overflow-hidden relative py-16 sm:py-24"
    >
      <div className="z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {seoServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              navigate={navigate}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicSEOSection;
