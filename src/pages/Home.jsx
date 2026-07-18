import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import DashboardPreview from "../components/home/DashboardPreview";
import RaceEngineerPreview from "../components/home/RaceEngineerPreview";
import RadioPreview from "../components/home/RadioPreview";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DashboardPreview />
      <RaceEngineerPreview />
      <RadioPreview />
    </>
  );
}

export default Home;