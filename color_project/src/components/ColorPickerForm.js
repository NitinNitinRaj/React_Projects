import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import Chrome from "@uiw/react-color-chrome";
import chroma from "chroma-js";
import { useState } from "react";

export default function ColorPickerForm({ paletteIsFull, colors, setColors }) {
  const [currentColor, setCurrentColor] = useState("#aaaaaa");
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

  const isLightColor = chroma(currentColor).luminance() >= 0.5;

  return (
    <>
      <Chrome
        color={currentColor}
        onChange={(newColor) => updateCurrentColor(newColor)}
        style={{ width: "100% !important" }}
        className="my-6"
      />
      <FormControl error={error && true} variant="standard">
        <InputLabel htmlFor="component-error">Color Name</InputLabel>
        <Input
          id="component-error"
          value={newName}
          aria-describedby="component-error-text"
          onChange={handleNewNameChange}
          className="w-[310px] h-[40px] "
          variant="filled"
        />
        {error && (
          <FormHelperText id="component-error-text">
            {error === "exits" ? "Color already Used!" : "Enter a Color"}
          </FormHelperText>
        )}
      </FormControl>
      <Button
        style={{
          backgroundColor: paletteIsFull ? "grey" : currentColor,
          fontSize: "1.5rem",
          marginTop: "2rem",
          color: isLightColor ? "rgba(0,0,0,0.5)" : "white",
        }}
        variant="contained"
        color="primary"
        onClick={addNewColor}
        disabled={paletteIsFull}
        className="w-[310px] h-14"
      >
        {paletteIsFull ? "Palette Full" : "Add Color"}
      </Button>
    </>
  );
}
