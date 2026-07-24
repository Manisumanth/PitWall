const API = "https://pitwall-backend-c6yr.onrender.com/api";

export async function getCalendar() {
  const response = await fetch(`${API}/calendar`);
  return await response.json();
}

export async function getDrivers() {
  const response = await fetch(`${API}/drivers`);
  return await response.json();
}

export async function getDriver(driverCode) {
  const response = await fetch(`${API}/drivers/${driverCode}`);
  return await response.json();
}

export async function getTeams() {
  const response = await fetch(`${API}/teams`);
  return await response.json();
}

export async function getTeam(teamName) {
  const response = await fetch(
    `${API}/teams/${encodeURIComponent(teamName)}`
  );
  return await response.json();
}

export async function getDriverStandings() {
  const response = await fetch(`${API}/standings/drivers`);
  return await response.json();
}

export async function getLiveSession() {
  const response = await fetch(`${API}/live`);
  return await response.json();
}

export async function getTiming() {
  const response = await fetch(`${API}/timing`);
  return await response.json();
}

export async function getConstructorStandings() {
  const response = await fetch(`${API}/constructors`);
  return await response.json();
}

export async function getWeather() {
  const response = await fetch(`${API}/weather`);
  return await response.json();
}

export async function getRaceControl() {
  const response = await fetch(`${API}/race-control`);
  return await response.json();
}