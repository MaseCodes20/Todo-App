import { useState, useRef } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="appContainer">
      <div className="text-center p-2 m-2">
        <div className="font-bold text-center text-5xl mb-4 text-white">
          <h1> Todo List</h1>
        </div>
        <div className="mb-4">
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div className="bg-gray-500 p-2 rounded-md m-2">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
