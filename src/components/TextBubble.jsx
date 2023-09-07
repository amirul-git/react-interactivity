export default function TextBubble({ message }) {
  return (
    <p className="px-4 py-3 bg-green-400 rounded-2xl rounded-tr-none max-w-fit ml-10">
      {message.text}
    </p>
  );
}
