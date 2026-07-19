import api from "../api/openf1";

export async function getMeetings() {
  const { data } = await api.get("/meetings");
  return data;
}

export async function getDrivers() {
  const { data } = await api.get("/drivers");
  return data;
}

export async function getCurrentSession() {
  const { data } = await api.get("/sessions");

  return data[data.length - 1];
}