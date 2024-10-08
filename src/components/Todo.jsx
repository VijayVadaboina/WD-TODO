import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  return (
    <div className="App">
      <form action="">
        <input type="text" value={todo} />
        <button type="submit" onChange={(e) => setTodo(e.target.value)}>
          Add
        </button>
      </form>
    </div>
  );
}
