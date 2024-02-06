import { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./NavBar";
import "./Palette.css";

export default function Palette({ palette: { colors } }) {
  const [level, setLevel] = useState(500);
  const colorBoxes = colors[level].map(({ name, hex }) => {
    return <ColorBox key={name} background={{ color: hex, name: name }} />;
  });

  const handleChangeLevel = (level) => {
    setLevel(level);
  };

  return (
    <div className="Palette">
      <Navbar changeLevel={handleChangeLevel} level={level} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
