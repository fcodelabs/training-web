// Random Nickname Generator
const randonNameArray: string[] = ["Sithum","Thambara", "Tharusha", "Munzira", "Mahinda","Ranil","Wathmi","Sajith"];

export const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random()*(randonNameArray.length))
  return (
    randonNameArray[randomIndex]
  )
}
