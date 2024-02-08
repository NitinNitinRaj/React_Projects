import { useParams } from "react-router-dom";
import { generatePalette } from "../utils/colorHelper";
import seedColors from "../utils/seedColors";
import SingleColorPalette from "./SingleColorPalette";

export default function SingleColorPaletteWrapper() {
  const { paletteId, colorId } = useParams();

  const findPalette = (id) => {
    return seedColors.find((color) => color.id === id);
  };
  return (
    <SingleColorPalette
      palette={generatePalette(findPalette(paletteId))}
      colorId={colorId}
      paletteId={paletteId}
    />
  );
}
