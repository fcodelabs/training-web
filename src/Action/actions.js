import { addCard, getCard, saveCards } from "./actionTypes";
export function taskAdded(subtitle, title, description) {
  return {
    type: addCard,
    subtitle: subtitle,
    title: title,
    description: description,
  };
}
export function getTasks1() {
  return {
    type: getCard,
  };
}
export function saveTasks(task) {
  return {
    type: saveCards,
    payload: task,
  };
}
