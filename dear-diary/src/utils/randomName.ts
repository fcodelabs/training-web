// creates a random name
const createRandomName = () => {
    const randomName = Math.random().toString(36).substring(7);
    return randomName
};

export {createRandomName};