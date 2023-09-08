import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <main className="p-6 flex justify-center   gap-3">
        <Link
          to={"light"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          🌞 Light
        </Link>
        <Link
          to={"sandbox"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          🏖 Sandbox
        </Link>
        <Link
          to={"sales"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          📊 Sales
        </Link>
        <Link
          to={"search"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          🔍 Search
        </Link>
        <Link
          to={"filter"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          ⏳ Filter
        </Link>
        <Link
          to={"chat"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          💬 Chat
        </Link>
        <Link
          to={"reducer"}
          className="cursor-pointer px-4 py-2 bg-white rounded-lg"
        >
          🔢 Reducer
        </Link>
      </main>
    </>
  );
}
