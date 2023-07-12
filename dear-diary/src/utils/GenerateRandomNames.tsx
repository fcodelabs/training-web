export const generateRandomNickname = () => {
    const nicknames = ['William', 'Logan', 'Peter', 'Harry', 'Alex', 'Benjimin', 'Paul']
    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

    return randomNickname;

}