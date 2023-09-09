import { useRef } from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";

export default function todo() {
  const [animationParent] = useAutoAnimate();

  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Hello world", order: 1 },
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
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: todo, order: todos.length + 1 },
    ]);
  }

  function handleDelete({ id }) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleUp(todo) {
    const firstTodo = todo.order === 1;
    if (firstTodo) {
      return;
    }

    const affectedTodos = todos.map((t) => {
      const selectedTodo = t.order === todo.order;
      const affectedTodo = t.order === todo.order - 1;

      if (selectedTodo) {
        return { ...t, order: t.order - 1 };
      } else if (affectedTodo) {
        return { ...t, order: t.order + 1 };
      } else {
        return t;
      }
    });

    const sortedTodos = affectedTodos.sort((a, b) => a.order - b.order);

    setTodos(sortedTodos);
  }

  function handleDown(todo) {
    const lastTodo = todo.order === todos.length;
    if (lastTodo) {
      return;
    }

    const affectedTodos = todos.map((t) => {
      const selectedTodo = t.order === todo.order;
      const affectedTodo = t.order === todo.order + 1;

      if (selectedTodo) {
        return { ...t, order: t.order + 1 };
      } else if (affectedTodo) {
        return { ...t, order: t.order - 1 };
      } else {
        return t;
      }
    });

    const sortedTodos = affectedTodos.sort((a, b) => a.order - b.order);

    setTodos(sortedTodos);
  }

  return (
    <>
      <main className="max-w-md mx-auto p-4">
        <h1 className="font-bold text-center mb-4">AutoAnimate Todo 🤩</h1>
        <section ref={animationParent} className="mb-4">
          {todos.map((todo) => {
            return (
              <div
                className="bg-purple-300  p-3 rounded-lg mb-2 flex justify-between items-center"
                key={todo.id}
              >
                <p>{todo.text}</p>
                <section className="flex gap-3">
                  <div
                    style={{ display: todo.order === 1 ? "none" : "block" }}
                    onClick={() => handleUp(todo)}
                    className="bg-purple-600 w-4 h-4 rounded-t-full"
                  ></div>
                  <div
                    style={{
                      display: todo.order === todos.length ? "none" : "block",
                    }}
                    onClick={() => handleDown(todo)}
                    className="bg-purple-600 w-4 h-4 rounded-b-full"
                  ></div>
                  <div
                    onClick={() => handleDelete(todo)}
                    className="bg-purple-600 w-4 h-4 rounded-full"
                  ></div>
                </section>
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
