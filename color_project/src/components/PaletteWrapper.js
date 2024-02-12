import { useParams } from "react-router-dom";
import { generatePalette } from "../utils/colorHelper";
import Palette from "./Palette";

export default function PaletteWrapper({ palettes }) {
  const { id } = useParams();
  const findPalette = (id) => {
    return palettes.find((color) => color.id === id);
  };
  return <Palette palette={generatePalette(findPalette(id))} />;
}
