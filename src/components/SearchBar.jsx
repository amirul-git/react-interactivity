export default function SearchBar({ onChange }) {
  return (
    <>
      <div className="flex justify-center mt-8">
        <input
          className="py-2 px-4 rounded-md bg-white border border-slate-400 rounded-r-none border-r-0"
          type="text"
          placeholder="Find a blog"
          onChange={onChange}
        />
        <button className="bg-[#e8f0fe] py-2 px-3 border border-slate-400 rounded-r-md">
          🔍
        </button>
      </div>
    </>
  );
}
