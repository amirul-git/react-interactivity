export default function Info({ title, value }) {
  return (
    <>
      <div className="p-6 text-center">
        <h2 className="text-5xl font-bold text-indigo-700">{value}</h2>
        <p className="text-[18px] text-slate-500 font-bold mt-2">{title}</p>
      </div>
    </>
  );
}
