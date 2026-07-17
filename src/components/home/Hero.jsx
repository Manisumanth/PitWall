import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Red Glow */}
      <div className="absolute top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-600/20 blur-[140px]" />

      {/* Badge */}
      <span className="relative z-10 mb-6 rounded-full border border-red-600/40 bg-red-600/10 px-5 py-2 text-sm font-medium text-red-400 backdrop-blur-md">
        🏁 AI Powered Formula 1 Dashboard
      </span>

      {/* Heading */}

      <h1 className="relative z-10 max-w-5xl text-7xl font-black leading-tight text-white">

        Your AI{" "}

        <span className="text-red-600">
          Race Engineer
        </span>

        <br />

        for Formula 1

      </h1>

      {/* Description */}

      <p className="relative z-10 mt-6 max-w-3xl text-xl leading-9 text-gray-400">

        Live telemetry • AI race insights • Driver radio • Strategy analysis •
        Live standings • Everything Formula 1 in one premium experience.

      </p>

      {/* Buttons */}

      <div className="relative z-10 mt-10 flex gap-5">

        <Button text="Watch Live" />

        <Button text="Race Calendar" />

      </div>

      {/* Car */}

      <img
        src="/hero.png"
        alt="Formula 1"
        className="relative z-10 mt-16 w-[900px] transition duration-500 hover:scale-105"
      />

    </section>
  );
}

export default Hero;