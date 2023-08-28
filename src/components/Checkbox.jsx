export default function Checkbox({ value, bind, onChange }) {
  return (
    <>
      <label className="flex gap-1">
        <input
          onChange={onChange}
          type="checkbox"
          name="price"
          value={value}
          checked={bind.includes(value)}
        />
        {value}
      </label>
    </>
  );
}
