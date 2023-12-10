const getRandomElement = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]; //returns a random element from the array
  }

function randomNickname(){
    const adjectives = ['Funny', 'Clever', 'Swift', 'Happy', 'Mysterious', 'Brave', 'Gentle', 'Silly', 'Daring', 'Lucky'];
    const nouns = ['Fox', 'Rocket', 'Penguin', 'Shadow', 'Whisper', 'Star', 'Captain', 'Jester', 'Phoenix', 'Wizard'];
  
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    const randomNickname = `${adjective}${noun}`;
    return randomNickname;
}

export default randomNickname;