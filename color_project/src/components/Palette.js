import { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Palette({ palette: { colors } }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map(({ name, hex }) => {
    return <ColorBox key={name} background={{ color: hex, name: name }} />;
  });

  return (
    <div className="Palette">
      {/* NavBar here */}
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onChange={(value) => setLevel(value)}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
