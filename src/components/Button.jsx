export default function Button({ emoji, onClick }) {
  return (
    <>
      <button
        className="text-xl px-4 py-2 border-2 border-slate-500 rounded-2xl hover:bg-slate-300"
        onClick={onClick}
      >
        {emoji}
      </button>
    </>
  );
}
