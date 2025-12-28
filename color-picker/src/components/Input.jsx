import colorNames from "colornames";

function Input({ color, setColor, setHexValue, isDarkText, setIsDarkText }) {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <input
        autoFocus
        required
        type="text"
        className="border-2 border-black bg-white text-black px-3 py-2 rounded-md w-64 shadow-xl"
        placeholder="Add color name"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
        className="w-full text-lg shadow-lg p-1 rounded-lg border-2 "
      >
        Toggle Text Color
      </button>
    </div>
  );
}

export default Input;
