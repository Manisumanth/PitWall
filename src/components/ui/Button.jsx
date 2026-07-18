import { motion } from "framer-motion";

function Button({ text }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
      }}
      className="group relative overflow-hidden rounded-full border border-red-600/40 bg-red-600/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300"
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Text */}

      <span className="relative z-10">
        {text}
      </span>
    </motion.button>
  );
}

export default Button;