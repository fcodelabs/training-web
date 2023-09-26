export const generateRandomName = ():string => {
  const randomNames = ["Akila", "Kavindu", "Pasan", "Charlie", "David", "Eve"];
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  return randomNames[randomIndex];
};
