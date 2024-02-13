import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function PaletteMetaForm({
  formNameError,
  newPaletteName,
  handlePaletteNameChange,
  handleSavePalette,
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Save
        </Button>
      )}
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
