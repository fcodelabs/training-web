const randomTextsArray: string[] = [
  "Williams",
  "Jhon",
  "Vihanga",
  "David",
  "Kane",
  "Warner",
  "Kate",
  "Jane",
];

const randomNameGenerator: Function = () => {
  const randomIndex = Math.floor(Math.random() * randomTextsArray.length);
  return randomTextsArray[randomIndex];
};

export default randomNameGenerator;
