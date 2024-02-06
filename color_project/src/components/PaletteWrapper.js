import { useParams } from "react-router-dom";
import { generatePalette } from "../utils/colorHelper";
import seedColors from "../utils/seedColors";
import Palette from "./Palette";

export default function PaletteWrapper() {
  const findPalette = (id) => {
    return seedColors.find((color) => color.id === id);
  };
  const { id } = useParams();
  return <Palette palette={generatePalette(findPalette(id))} />;
}
