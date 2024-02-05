import Palette from "./components/Palette";
import { generatePalette } from "./utils/colorHelper";
import seedColors from "./utils/seedColors";

export default function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}
