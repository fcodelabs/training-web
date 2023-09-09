import React, { useEffect } from "react";
import { TodoDatabase } from "../../domain/todo/todoDataPersistence";
import TodoCard from "../ui/todoCard";
type Props = {};

function TodoGridContainer({}: Props) {
  const [todos, setTodos] = React.useState<any>([]);
  useEffect(() => {
    const TodoDataService = TodoDatabase.getInstance();
    const unsubscribe = TodoDataService.subscribeToTodos((todos) => {
      setTodos(todos);
    });
    // cleanup
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="grid-container">
      {todos.map((todo: any) => {
        return (
          <TodoCard
            title={todo.title}
            author={todo.author}
            description={todo.description}
          />
        );
      })}
    </div>
  );
}

export default TodoGridContainer;
