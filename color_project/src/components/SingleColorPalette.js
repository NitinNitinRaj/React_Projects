import ColorBox from "./ColorBox";

export default function SingleColorPalette({
  palette: { colors },
  colorId,
  paletteId,
}) {
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
        background={{ color: color.hex, name: color.name, paletteId, colorId }}
        showLink={false}
      />
    );
  });

  return (
    <div className="Palette">
      <h1>SingleColorPalette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
