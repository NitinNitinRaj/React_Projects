import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import Chrome from "@uiw/react-color-chrome";
import { useState } from "react";

export default function ColorPickerForm({ paletteIsFull, colors, setColors }) {
  const [currentColor, setCurrentColor] = useState("#abcdef");
  const [newName, setNewName] = useState("");
  const [error, setError] = useState();

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hexa);
  };

  const addNewColor = () => {
    if (!newName.length) return setError("empty");

    if (
      colors.find((color) => color.name.toLowerCase() === newName.toLowerCase())
    )
      return setError("exits");

    setError(null);
    setColors([...colors, { name: newName, color: currentColor }]);
    setNewName("");
  };

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };
  return (
    <>
      <Chrome
        color={currentColor}
        onChange={(newColor) => updateCurrentColor(newColor)}
      />
      <FormControl error={error && true} variant="standard">
        <InputLabel htmlFor="component-error">New Color</InputLabel>
        <Input
          id="component-error"
          value={newName}
          aria-describedby="component-error-text"
          onChange={handleNewNameChange}
        />
        {error && (
          <FormHelperText id="component-error-text">
            {error === "exits" ? "Color already Used!" : "Enter a Color"}
          </FormHelperText>
        )}

        <Button
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          variant="contained"
          color="primary"
          onClick={addNewColor}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "Palette Is Full" : "Add Color"}
        </Button>
      </FormControl>
    </>
  );
}
