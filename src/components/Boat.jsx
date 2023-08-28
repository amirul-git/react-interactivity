export default function Boat({ boat }) {
  return (
    <>
      <div
        key={boat.id}
        className="bg-white p-6 text-center text-slate-700 rounded-md flex-1 basis-80 max-w-xs"
      >
        <h2 className="text-xl  font-bold">{boat.name}</h2>
        <div className="flex justify-between mt-3 items-center">
          <p className="text-xl font-bold">{boat.price}</p>
          <p className="py-2 px-4 bg-slate-200 rounded-md">{boat.type}</p>
        </div>
      </div>
    </>
  );
}
