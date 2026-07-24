import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Live from "./pages/Live";
import Calendar from "./pages/Calendar";
import Standings from "./pages/Standings";
import Drivers from "./pages/Drivers";
import DriverDetails from "./pages/DriverDetails";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import NotFound from "./pages/NotFound";
import AIRaceEngineer from "./pages/AIRaceEngineer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/live" element={<Live />} />

          <Route path="/calendar" element={<Calendar />} />

          <Route path="/standings" element={<Standings />} />

          <Route path="/drivers" element={<Drivers />} />

          <Route
            path="/drivers/:driverCode"
            element={<DriverDetails />}
          />

          <Route path="/teams" element={<Teams />} />

          <Route
            path="/teams/:teamName"
            element={<TeamDetails />}
          />

          <Route path="/ai" element={<AIRaceEngineer />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;