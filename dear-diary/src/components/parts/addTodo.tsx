import { Button, Input } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { TodoDatabase } from "../../domain/todo/todoDataPersistence";
import Model from "../parts/model";
import { TodoError } from "../../domain/todo/todoError";

type Props = {};

interface NewTodo {
  title: string;
  description: string;
}

function AddTodo({}: Props) {
  const userName = useSelector((state: any) => state.userName);
  const [newTodo, setNewTodo] = React.useState<NewTodo>({
    title: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<TodoError | (() => TodoError) | null>(
    null
  );
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#12181A",
        display: "flex",
        gap: "10px",
        padding: "20px 10px",
        position: "sticky",
        top: "0",
        zIndex: 1,
      }}
    >
      <Input
        style={{
          color: "white",
          flex: 1,
          backgroundColor: "#27E25E",
          borderRadius: "10px 10px 0px 00px",
          padding: "0 10px",
          caretColor: "#F05350",
          caretShape: "bar",
        }}
        inputProps={{
          style: { color: "#F05350", fontWeight: "bold", padding: "0 20px" },
        }}
        placeholder="Title"
        name="title"
        onChange={(e) => {
          setNewTodo({
            ...newTodo,
            title: e.target.value.toLocaleUpperCase(),
          });
        }}
        value={newTodo.title}
      />
      <Input
        style={{
          flex: 2,
          backgroundColor: "#27E25E",
          borderRadius: "10px 10px 0px 00px",
          //   padding: "0 10px",
        }}
        inputProps={{
          style: { color: "#F05350", fontWeight: "bold", padding: "0 20px" },
        }}
        placeholder="Description"
        name="description"
        onChange={(e) => {
          setNewTodo({
            ...newTodo,
            description: e.target.value.toLocaleUpperCase(),
          });
        }}
        value={newTodo.description}
      />

      <Button
        variant="outlined"
        style={{}}
        onClick={async () => {
          try {
            // create todoPersistance class and use it to add todo
            const TodoDataService = TodoDatabase.getInstance();
            await TodoDataService.createTodo(
              newTodo.title,
              newTodo.description,
              userName
            );
          } catch (error) {
            if (error instanceof TodoError) {
              setError(error);
              setOpen(true);
              console.error(
                `Error code: ${error.code}, message: ${error.message}`
              );
            }
          }
        }}
      >
        +
      </Button>
      {error && (
        <Model
          open={open}
          onClose={handleClose}
          title="Error"
          description={
            error instanceof TodoError ? error.message : "Unknown Error"
          }
        />
      )}
    </div>
  );
}

export default AddTodo;
