import { useState } from "react";
import ColorBox from "./components/ColorBox";
import Input from "./components/Input";
import "./main.css";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState("");

  return (
    <div className="flex justify-center items-center flex-col gap-5 h-screen">
      <ColorBox color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <Input
        color={color}
        setColor={setColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
