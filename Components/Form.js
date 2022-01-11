function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
  // Generate random Ids
  function randomId() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return randomNumber;
  }

  // Update todo
  function updateTodo(title, id, completed) {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }

  // Input change funciton
  function inputChange(event) {
    setInput(event.target.value);
  }

  // Form Submit function
  function onFormSubmit(event) {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: randomId(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  }
  return (
    <div className="bg-gray-500 p-2 rounded-md m-2">
      <form onSubmit={onFormSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder="type todo here..."
          onChange={inputChange}
          required
          value={input}
          className="m-2 p-2 rounded-md w-4/5 bg-transparent border-2"
        />
        <button className="font-bold bg-yellow-400 hover:bg-yellow-500 rounded-md m-2 p-2">
          {editTodo ? "EDIT" : "ADD"}
        </button>
      </form>
    </div>
  );
}

export default Form;
