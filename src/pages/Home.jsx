import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import LiveRaceCard from "../components/home/LiveRaceCard";
import Features from "../components/home/Features";
import RaceEngineer from "../components/home/RaceEngineer";
import RadioCheck from "../components/home/RadioCheck";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveRaceCard />
      <Features />
      <RaceEngineer />
      <RadioCheck />
    </>
  );
}

export default Home;