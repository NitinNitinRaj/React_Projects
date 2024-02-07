import { Route, Routes } from "react-router-dom";
import PaletteWrapper from "./components/PaletteWrapper";
import PaletteList from "./components/PaletteList";
import seedColors from "./utils/seedColors";
import SingleColorPalette from "./components/SingleColorPalette";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id" element={<PaletteWrapper />} />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette />}
      />
    </Routes>
  );
}
