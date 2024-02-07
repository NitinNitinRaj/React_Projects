import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes }) {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map((palette) => (
        <p>
          <MiniPalette {...palette} />
        </p>
      ))}
    </div>
  );
}
