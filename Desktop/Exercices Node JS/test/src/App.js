import "./App.css";
import React from "react";
import Counter from "./Counter";
import api from "./API";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState([]);
  const [count, setCount] = React.useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => (todo.id /= id));
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Name</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.text}</div>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
    (response) => {
      response = response.json();
      response.then((result) => {
        console.log(result);
      });
    }
  );
};

export default App;
