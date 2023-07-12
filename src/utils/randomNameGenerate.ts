  // Generates a random name from a list
  const randomNameGenerate = () => {
    const names = [
      "John",
      "Jane",
      "Alice",
      "Bob",
      "Emma",
      "Michael",
      "Olivia",
      "William",
      "Sophia",
    ];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  };
  export default randomNameGenerate;