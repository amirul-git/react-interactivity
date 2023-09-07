import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function Chat() {
  const data = [
    {
      id: 1,
      text: "😀",
    },
    {
      id: 2,
      text: "😁",
    },
    {
      id: 3,
      text: "😆",
    },
    {
      id: 4,
      text: "😅",
    },
    {
      id: 5,
      text: "😂",
    },
    {
      id: 6,
      text: "🤣",
    },
    {
      id: 7,
      text: "🥲",
    },
    {
      id: 8,
      text: "🥹",
    },
    {
      id: 9,
      text: "😊",
    },
    {
      id: 10,
      text: "😇",
    },
    {
      id: 11,
      text: "🙂",
    },
    {
      id: 12,
      text: "😉",
    },
    {
      id: 13,
      text: "😍",
    },
    {
      id: 14,
      text: "🥰",
    },
    {
      id: 15,
      text: "😘",
    },
    {
      id: 16,
      text: "😎",
    },
  ];

  const [messages, setMessages] = useState(data);
  const [message, setMessage] = useState("");
  const bottomChat = useRef(null);

  useEffect(() => {
    bottomChat.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    bottomChat.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();
    setMessages([...messages, { id: messages.length + 1, text: message }]);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <main className="max-w-lg mx-auto bg-green-50 ">
        <main className="px-4 pt-4 h-[94vh] overflow-y-auto">
          <section className="flex items-end flex-col gap-3">
            {messages &&
              messages.map((message) => {
                return (
                  <p
                    key={message.id}
                    className="px-4 py-3 bg-green-400 rounded-2xl rounded-tr-none max-w-fit ml-10"
                  >
                    {message.text}
                  </p>
                );
              })}
            <p ref={bottomChat}></p>
            <div></div>
          </section>
        </main>
        <section className="h-16 bg-green-400 absolute bottom-0 left-0 right-0 p-4 max-w-lg mx-auto">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex items-center justify-center h-full gap-2"
          >
            <input
              value={message}
              onChange={(e) => handleMessage(e)}
              type="text"
              name="message"
              className="bg-green-200 h-10 border-none flex-1 outline-none px-4 rounded-xl"
            />
            <button className="bg-green-200 h-10 rounded-xl p-2 flex items-center justify-center text-xl">
              👉
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
