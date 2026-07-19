function GlassCard({ title, children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(220,38,38,0.15)] ${className}`}
    >
      {/* Top Accent */}

      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 opacity-80"></div>

      {title && (
        <h2 className="mb-6 text-xl font-bold tracking-wide">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}

export default GlassCard;