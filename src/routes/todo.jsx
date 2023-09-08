import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function todo() {
  const [animationParent] = useAutoAnimate();

  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Hello world" },
  ]);
  const [todo, setTodo] = useState("");
  const input = useRef(null);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodo("");
    input.current.focus();
    setTodos([...todos, { id: crypto.randomUUID(), text: todo }]);
  }

  function handleDelete({ id }) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <main className="max-w-md mx-auto p-4">
        <h1 className="font-bold text-center mb-4">AutoAnimate 🤩</h1>
        <section ref={animationParent} className="mb-4">
          {todos.map((todo) => {
            return (
              <div
                className="bg-purple-300  p-3 rounded-lg mb-2 flex justify-between items-center"
                key={todo.id}
              >
                <p>{todo.text}</p>
                <span
                  onClick={() => handleDelete(todo)}
                  className="bg-purple-600 w-4 h-4 rounded-full"
                ></span>
              </div>
            );
          })}
        </section>
        <section className="p-3 bg-purple-300 rounded-xl">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex gap-3 justify-between"
          >
            <input
              ref={input}
              value={todo}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Add another ..."
              className="px-4 py-2 rounded-lg flex-1"
            />
            <button className="px-4 py-2 bg-purple-500 text-white font-bold rounded-lg">
              Add
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
