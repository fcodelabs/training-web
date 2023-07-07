const ganarateName = () => {
    const names = [
      "Name-1",
      "Ravi",
      "Kumar",
      "Sarthial",
      "John",
      "Vicky",
      "Stephen",
      "Ahmed",
      "Menaga",
    ];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
};

export default ganarateName;