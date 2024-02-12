import { useParams } from "react-router-dom";
import { generatePalette } from "../utils/colorHelper";
import SingleColorPalette from "./SingleColorPalette";

export default function SingleColorPaletteWrapper({ palettes }) {
  const { paletteId, colorId } = useParams();

  const findPalette = (id) => {
    return palettes.find((color) => color.id === id);
  };
  return (
    <SingleColorPalette
      palette={generatePalette(findPalette(paletteId))}
      colorId={colorId}
      paletteId={paletteId}
    />
  );
}
