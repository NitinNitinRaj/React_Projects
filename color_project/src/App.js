import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewPaletteForm from "./components/NewPaletteFrom";
import PaletteList from "./components/PaletteList";
import PaletteWrapper from "./components/PaletteWrapper";
import SingleColorPaletteWrapper from "./components/SingleColorPaletteWrapper";
import seedColors from "./utils/seedColors";

export default function App() {
  const [palettes, setPalettes] = useState(seedColors);
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={palettes} />} />
      <Route
        exact
        path="/palette/new"
        element={<NewPaletteForm savePalette={savePalette} />}
      />
      <Route
        exact
        path="/palette/:id"
        element={<PaletteWrapper palettes={palettes} />}
      />

      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPaletteWrapper palettes={palettes} />}
      />
    </Routes>
  );
}
