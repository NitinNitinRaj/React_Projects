import { Route, Routes } from "react-router-dom";
import PaletteList from "./components/PaletteList";
import PaletteWrapper from "./components/PaletteWrapper";
import SingleColorPaletteWrapper from "./components/SingleColorPaletteWrapper";
import seedColors from "./utils/seedColors";
import NewPaletteForm from "./components/NewPaletteFrom";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/new" element={<NewPaletteForm />} />
      <Route exact path="/palette/:id" element={<PaletteWrapper />} />

      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPaletteWrapper />}
      />
    </Routes>
  );
}
