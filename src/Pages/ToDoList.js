import React from "react";
import CartList from "../features/cartList";
import AddForm from "../features/addForm";

function ToDoListPage() {
  return (
    <div className="App">
      <AddForm />
      <CartList />
    </div>
  );
}

export default ToDoListPage;
