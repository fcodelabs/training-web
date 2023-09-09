import { Todo } from "./todo";
import { initializeApp } from "firebase/app";
import { TodoError } from "./todoError";
import {
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export class TodoDatabase {
  private static instance: TodoDatabase;
  private db: any;

  private constructor() {
    // Initialize Firebase
    const firebaseConfig = {
      // your config here
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    };
    const app = initializeApp(firebaseConfig);

    // Get a reference to the Firestore database
    this.db = getFirestore(app);
  }

  public static getInstance(): TodoDatabase {
    if (!TodoDatabase.instance) {
      TodoDatabase.instance = new TodoDatabase();
    }
    return TodoDatabase.instance;
  }

  // method for creating a new todo
  public async createTodo(
    title: string,
    description: string,
    author: string
  ): Promise<void> {
    try {
      const todo = Todo.create(title, description, author);
      // todo throws an error if title or description is missing
      // if todo is created successfully, add it to the database
      await addDoc(collection(this.db, "todos"), todo.toJSON());
      return new Promise((resolve) => resolve());
    } catch (error) {
      if (error instanceof TodoError) {
        // can handle in specific way
        console.error(`Error code: ${error.code}, message: ${error.message}`);
      } else {
        console.error(error);
      }
      return new Promise((resolve, reject) => reject(error));
    }
  }

  // method for updating an existing todo
  public async updateTodo(todo: Todo): Promise<void> {
    await this.db.collection("todos").doc(todo.id).update(todo);
  }

  // method for deleting a todo
  public async deleteTodoById(id: string): Promise<void> {
    await this.db.collection("todos").doc(id).delete();
  }

  // method for getting all todos
  public async getAllTodos(): Promise<Todo[]> {
    const snapshot = await getDocs(collection(this.db, "todos"));
    return snapshot.docs.map((doc: any) => doc.data() as Todo);
  }

  // method for getting a todo by id
  public async getTodoById(id: string): Promise<Todo | undefined> {
    const doc = await this.db.collection("todos").doc(id).get();
    if (doc.exists) {
      return doc.data() as Todo;
    } else {
      return undefined;
    }
  }
  //  subscribe to todos and react to changes
  public subscribeToTodos(callback: (todos: Todo[]) => void): () => void {
    const unsubscribe = onSnapshot(collection(this.db, "todos"), (snapshot) => {
      const todos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Todo[];
      callback(todos);
    });
    return unsubscribe;
  }
}
