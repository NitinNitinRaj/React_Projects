import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewPaletteForm from "./components/NewPaletteFrom";
import PaletteList from "./components/PaletteList";
import PaletteWrapper from "./components/PaletteWrapper";
import SingleColorPaletteWrapper from "./components/SingleColorPaletteWrapper";
import seedColors from "./utils/seedColors";

export default function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  useEffect(() => {
    syncLocalStorage();
  }, [palettes]);

  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={palettes} />} />
      <Route
        exact
        path="/palette/new"
        element={
          <NewPaletteForm savePalette={savePalette} palettes={palettes} />
        }
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
