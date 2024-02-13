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
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <FormControl error={formNameError && true} variant="standard">
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
