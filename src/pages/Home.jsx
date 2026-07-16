import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome to PitWall 🏎️
        </h1>
      </main>
    </>
  );
}

export default Home;