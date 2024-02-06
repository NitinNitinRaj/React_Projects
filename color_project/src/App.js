import { Route, Routes } from "react-router-dom";
import Palette from "./components/Palette";
import PaletteWrapper from "./components/PaletteWrapper";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<h1>PALETTE LIST GOES HERE</h1>} />
      <Route exact path="/palette/:id" element={<PaletteWrapper />} />
    </Routes>
  );
}
