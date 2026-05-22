function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="item">
      <span
        className={todo.completed ? "done" : ""}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed ? "✅ " : "📌 "}
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
