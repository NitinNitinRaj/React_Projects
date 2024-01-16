import Palette from "./components/Palette";
import seedColors from "./utils/seedColors";

export default function App() {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}
