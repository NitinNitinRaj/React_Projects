import { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./NavBar";
import "./Palette.css";

export default function Palette({ palette: { colors } }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox
        key={color.name}
        background={{ color: color[format], name: color.name }}
      />
    );
  });

  const handleChangeLevel = (level) => {
    setLevel(level);
  };

  const changeFormat = (e) => {
    setFormat(e.target.value);
  };

  return (
    <div className="Palette">
      <Navbar
        changeLevel={handleChangeLevel}
        level={level}
        changeFormat={changeFormat}
        format={format}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
