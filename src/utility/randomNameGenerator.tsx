import React from "react";

const RandomNameGenerator = () => {
    
    // set of names to choose from
    const names: string[] = ['Captain America', 'Hulk', 'Iron Man', 'Black Widow', 'Thor', 'Locky'];
    // pick a random name from the set
    const randomIndex = Math.floor(Math.random() * names.length);
    // return the random name
    const randomName = names[randomIndex];

    return randomName;
};

export default RandomNameGenerator;