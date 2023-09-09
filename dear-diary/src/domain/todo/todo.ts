import { TodoError } from "./todoError";
export class Todo {
  public id: string;
  public title: string;
  public completed: boolean;
  public author: string;
  public description: string;

  constructor(
    id: string,
    title: string,
    completed: boolean,
    author: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.author = author;
    this.description = description;
  }

  public static create(
    title: string,
    description: string,
    author: string
  ): Todo {
    if (!title || !description) {
      throw new TodoError("Title and description are required.", 700);
    }

    const formattedAuthor =
      author.charAt(0).toUpperCase() + author.slice(1).toLowerCase();
    const formattedDescription =
      description.charAt(0).toUpperCase() + description.slice(1).toLowerCase();
    return new Todo(
      Math.random().toString(36).substr(2, 9),
      title,
      false,
      formattedAuthor,
      formattedDescription
    );
  }

  public toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed,
      author: this.author,
      description: this.description,
    };
  }
}
