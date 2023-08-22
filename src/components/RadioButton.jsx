export default function RadioButton({
  brightness,
  currentBrightness,
  onChange,
}) {
  return (
    <>
      <label>
        <input
          className="mr-2"
          type="radio"
          name="brightness"
          value={brightness}
          checked={brightness === currentBrightness ? true : false}
          onChange={onChange}
        />
        {brightness}
      </label>
    </>
  );
}
