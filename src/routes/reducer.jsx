import { useReducer } from "react";
import { useState } from "react";

function reducerCallback(state, action) {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
  }
}

export default function reducer() {
  const [state, dispatch] = useReducer(reducerCallback, 0);

  function handleIncrease() {
    dispatch({ type: "increment" });
  }

  return (
    <>
      <main className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-2">{state}</h1>
        <button
          onClick={handleIncrease}
          className="px-4 py-2 bg-green-300 rounded-xl"
        >
          Increase
        </button>
      </main>
    </>
  );
}
