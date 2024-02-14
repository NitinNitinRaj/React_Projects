import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaletteMetaForm({ palettes, savePalette, colors }) {
  const [open, setOpen] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState("");
  const [formNameError, setFormNameError] = useState();
  const navigate = useNavigate();

  const handlePaletteNameChange = (e) => {
    setNewPaletteName(e.target.value);
    setFormNameError(null);
  };

  const handleSavePalette = () => {
    if (!newPaletteName.length) return setFormNameError("empty");
    if (
      palettes.find(
        (palette) =>
          palette.paletteName.toLowerCase() === newPaletteName.toLowerCase()
      )
    )
      return setFormNameError("exits");
    setOpen(false);
    setEmojiOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmojiClose = (e) => {
    setEmojiOpen(false);
    savePalette({
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      paletteName: newPaletteName,
      colors,
      emoji: e.native,
    });
    navigate("/");
  };

  return (
    <>
      {!open && (
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Save
        </Button>
      )}
      <Dialog open={emojiOpen}>
        <Picker data={data} onEmojiSelect={handleEmojiClose} theme="light" />
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. Make sure it's unique!.
          </DialogContentText>

          <FormControl
            error={formNameError && true}
            variant="standard"
            fullWidth
            margin="normal"
          >
            <InputLabel htmlFor="component-error">Palette Name</InputLabel>
            <Input
              id="component-error"
              value={newPaletteName}
              aria-describedby="component-error-text"
              onChange={handlePaletteNameChange}
            />
            {formNameError && (
              <FormHelperText id="component-error-text">
                {formNameError === "exits"
                  ? "Palette Name already Used!"
                  : "Enter Palette Name"}
              </FormHelperText>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSavePalette}
          >
            Save Palette
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
