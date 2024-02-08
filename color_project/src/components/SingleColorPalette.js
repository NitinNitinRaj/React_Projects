import { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./NavBar";
import Palette from "./Palette";
import PaletteFooter from "./PaletteFooter";

export default function SingleColorPalette({
  palette: { colors, paletteName, emoji },
  colorId,
  paletteId,
}) {
  const [format, setFormat] = useState("hex");

  const gatherShade = () => {
    let shades = [];
    for (let key in colors) {
      shades.push(colors[key].find((color) => color.id === colorId));
    }

    return shades.slice(1);
  };

  const colorBoxes = gatherShade().map((color) => {
    return (
      <ColorBox
        key={color.name}
        background={{
          color: color[format],
          name: color.name,
          paletteId,
          colorId,
        }}
        showLink={false}
      />
    );
  });

  const changeFormat = (e) => {
    setFormat(e.target.value);
  };

  return (
    <div className="Palette">
      <Navbar changeFormat={changeFormat} format={format} slider={false} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}
