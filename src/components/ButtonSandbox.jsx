export default function Button({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="font-bold bg-green-400 p-4 py-2 rounded-md text-white mx-auto block mt-8"
      >
        Get A Quote
      </button>
    </>
  );
}
