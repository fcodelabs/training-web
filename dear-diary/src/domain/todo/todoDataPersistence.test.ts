import { TodoDatabase } from "./todoDataPersistence";
import { Todo } from "./todo";

describe("TodoDatabase", () => {
  let todoDatabase: TodoDatabase;

  beforeAll(() => {
    todoDatabase = TodoDatabase.getInstance();
  });

  afterEach(async () => {
    // delete all todos after each test
    const todos = await todoDatabase.getAllTodos();
    console.log("Getting all", todos);
    await Promise.all(
      todos.map((todo) => todoDatabase.deleteTodoById(todo.id))
    );
  });

  describe("createTodo", () => {
    it("should create a new todo", async () => {
      const todo = await todoDatabase.createTodo(
        "Test Todo",
        "Test Description",
        "Test Author"
      );
      // expect(todo).toBeInstanceOf(Todo);
      // expect(todo.title).toBe("Test Todo");
    });
  });

  //   describe("updateTodo", () => {
  //     it("should update an existing todo", async () => {
  //       const todo = await todoDatabase.createTodo("Test Todo");
  //       todo.title = "Updated Todo";
  //       await todoDatabase.updateTodo(todo);
  //       const updatedTodo = await todoDatabase.getTodoById(todo.id);
  //       expect(updatedTodo).toBeInstanceOf(Todo);
  //       expect(updatedTodo.title).toBe("Updated Todo");
  //     });
  //   });

  // describe("deleteTodoById", () => {
  //   it("should delete an existing todo", async () => {
  //     const todo = await todoDatabase.createTodo("Test Todo");
  //     await todoDatabase.deleteTodoById(todo.id);
  //     const deletedTodo = await todoDatabase.getTodoById(todo.id);
  //     expect(deletedTodo).toBeUndefined();
  //   });
  // });

  //   describe("getAllTodos", () => {
  //     it("should get all todos", async () => {
  //       const todo1 = await todoDatabase.createTodo("Test Todo 1");
  //       const todo2 = await todoDatabase.createTodo("Test Todo 2");
  //       const todos = await todoDatabase.getAllTodos();
  //       expect(todos).toHaveLength(2);
  //       expect(todos[0]).toBeInstanceOf(Todo);
  //       expect(todos[0].title).toBe("Test Todo 1");
  //       expect(todos[1]).toBeInstanceOf(Todo);
  //       expect(todos[1].title).toBe("Test Todo 2");
  //     });
  //   });

  //   describe("getTodoById", () => {
  //     it("should get a todo by id", async () => {
  //       const todo1 = await todoDatabase.createTodo("Test Todo 1");
  //       const todo2 = await todoDatabase.createTodo("Test Todo 2");
  //       const retrievedTodo = await todoDatabase.getTodoById(todo1.id);
  //       expect(retrievedTodo).toBeInstanceOf(Todo);
  //       expect(retrievedTodo.title).toBe("Test Todo 1");
  //     });

  //     it("should return undefined if todo does not exist", async () => {
  //       const retrievedTodo = await todoDatabase.getTodoById("nonexistent-id");
  //       expect(retrievedTodo).toBeUndefined();
  //     });
  //   });
});
