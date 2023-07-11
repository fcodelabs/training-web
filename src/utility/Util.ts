export const handleClick = (names: string[], setSelectedName: React.Dispatch<React.SetStateAction<string>>) => {
    //get the indexnum in the 'names' array
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    //set randomNames to state
    setSelectedName(randomName);
  };

  export const handleDescriptionClick = (description:string,showMore:boolean) => {
    if (description.length <= 100 || showMore) {
    return description;
    }
    return description.slice(0, 100) + '...';
};
