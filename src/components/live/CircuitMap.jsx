import { motion } from "framer-motion";

const drivers = [
  {
    name: "NOR",
    top: "18%",
    left: "62%",
    color: "bg-orange-500",
  },
  {
    name: "VER",
    top: "42%",
    left: "28%",
    color: "bg-blue-500",
  },
  {
    name: "LEC",
    top: "72%",
    left: "70%",
    color: "bg-red-500",
  },
];

function CircuitMap() {
  return (
    <div className="relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Track */}

      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M170 110
             C320 40,560 60,640 170
             C720 270,650 390,510 420
             C360 450,220 390,170 300
             C130 230,120 150,170 110"
          fill="none"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>

      {/* Driver Markers */}

      {drivers.map((driver) => (
        <motion.div
          key={driver.name}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className={`absolute flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg ${driver.color}`}
          style={{
            top: driver.top,
            left: driver.left,
          }}
        >
          {driver.name}
        </motion.div>
      ))}

      {/* Status */}

      <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-sm text-green-400 backdrop-blur">
        ● LIVE TRACKING
      </div>
    </div>
  );
}

export default CircuitMap;