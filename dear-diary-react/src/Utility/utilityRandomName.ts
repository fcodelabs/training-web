const names = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Charlotte",
  "James",
  "Amelia",
  "Elijah",
  "Sophia",
  "William",
  "Isabella",
  "Henry",
  "Ava",
  "Lucas",
  "Mia",
  "Benjamin",
  "Evelyn",
  "Theodore",
  "Luna",
];

export const generateRandomName = function () {
  const i = getRandomInt(19);
  return names[i];
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
