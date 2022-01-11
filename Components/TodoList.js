import {
  TrashIcon,
  PencilAltIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";

function TodoList({ todos, setTodos, editTodo, setEditTodo }) {
  // Check Todo if complete function
  function handleComplete(todo) {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  // Edit todo function
  function handleEdit(id) {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  //   Delete todo function
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-none flex justify-center m-2 p-2 border-2 rounded-md"
        >
          <div className="p-2 rounded-md text-white">{todo.title}</div>
          <div className="flex">
            <button onClick={() => handleComplete(todo)}>
              <CheckCircleIcon
                className={`btn  ${
                  todo.completed ? "text-green-600" : "text-red-600"
                }`}
              />
            </button>
            <button onClick={() => handleEdit(todo.id)}>
              <PencilAltIcon className="btn text-yellow-400" />
            </button>
            <button onClick={() => handleDelete(todo.id)}>
              <TrashIcon className="btn text-green-900" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
