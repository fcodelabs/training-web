export const generateRandomName = (): string => {
  const randomNames = ["John", "Jane", "Bob", "Alice", "Tom", "Jerry"];
  return randomNames[Math.floor(Math.random() * randomNames.length)];
};
