function ColorBox({ color, hexValue, isDarkText }) {
  return (
    <div
      className={`size-85 border-2 border-black rounded-[15px] flex justify-center items-center shadow-xl`}
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p className="text-xl">{color ? color : "Empty Value"}</p>
      <br />
      <p className="text-xl ">{hexValue ? hexValue : null}</p>
    </div>
  );
}

export default ColorBox;
