import { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submit} className="form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;