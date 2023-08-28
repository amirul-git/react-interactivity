export default function ({ label, onChange, unit }) {
  return (
    <>
      <div className="flex-1">
        <h2 className="mb-1 text-sm font-bold text-center">{label}</h2>
        <div className="border p-2 rounded-md px-4">
          <input
            type="number"
            className="focus:outline-none text-sm max-w-[32px]"
            onChange={onChange}
          />
          <span className="text-slate-500">{unit}</span>
        </div>
      </div>
    </>
  );
}
