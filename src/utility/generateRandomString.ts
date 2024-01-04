const defaultNamesArray = ['Alice', 'Bob', 'Charlie', 'David'];

export const generateRandomString = (names: string[] = defaultNamesArray): string => {
  if (names.length === 0) {
    throw new Error('Array of names should not be empty');
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];

  console.log(randomName);

  return randomName;
};