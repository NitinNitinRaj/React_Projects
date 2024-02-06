import { useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

export default function Palette({ palette: { colors } }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map(({ name, hex }) => {
    return <ColorBox key={name} background={{ color: hex, name: name }} />;
  });

  return (
    <div className="Palette">
      {/* NavBar here */}
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          styles={{
            track: { backgroundColor: "transparent" },
            rail: { height: "8px" },
            handle: {
              backgroundColor: "green",
              outline: "none",
              border: "2px solid green",
              boxShadow: "none",
              width: "15px",
              height: "15px",
            },
          }}
          onChange={(value) => setLevel(value)}
        />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
