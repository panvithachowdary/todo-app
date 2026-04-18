function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
      <div className="item">
        <span
          onClick={() => toggleTodo(todo.id)}
          className={todo.completed ? "done" : ""}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    );
  }
  
  export default TodoItem;