import Palette from "./components/Palette";
import { generatePalette } from "./utils/colorHelper";
import seedColors from "./utils/seedColors";

export default function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palette {...seedColors[2]} />
    </div>
  );
}
