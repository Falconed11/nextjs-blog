export async function getPlayers() {
  const res = await fetch("http://localhost:3001/player");
  return res.json();
}
