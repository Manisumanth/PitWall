function Button({ text }) {
  return (
    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(225,6,0,0.45)]">

      <span className="relative z-10">{text}</span>

      <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full"></span>

    </button>
  );
}

export default Button;