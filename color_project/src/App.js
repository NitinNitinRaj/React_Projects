import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NewPaletteForm from "./components/NewPaletteFrom";
import PaletteList from "./components/PaletteList";
import PaletteWrapper from "./components/PaletteWrapper";
import SingleColorPaletteWrapper from "./components/SingleColorPaletteWrapper";
import seedColors from "./utils/seedColors";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Page from "./components/Page";

export default function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const location = useLocation();

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  useEffect(() => {
    syncLocalStorage();
  }, [palettes]);

  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  const deletePalette = (id) => {
    setPalettes(palettes.filter((p) => p.id !== id));
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={500}>
        <Routes location={location}>
          <Route
            exact
            path="/"
            element={
              <Page>
                <PaletteList
                  palettes={palettes}
                  deletePalette={deletePalette}
                />
              </Page>
            }
          />
          <Route
            exact
            path="/palette/new"
            element={
              <Page>
                <NewPaletteForm savePalette={savePalette} palettes={palettes} />
              </Page>
            }
          />
          <Route
            exact
            path="/palette/:id"
            element={
              <Page>
                <PaletteWrapper palettes={palettes} />
              </Page>
            }
          />

          <Route
            exact
            path="/palette/:paletteId/:colorId"
            element={
              <Page>
                <SingleColorPaletteWrapper palettes={palettes} />
              </Page>
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
