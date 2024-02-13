import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function PaletteFormNav({
  open,
  handleDrawerOpen,
  palettes,
  savePalette,
  colors,
}) {
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
    savePalette({
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      paletteName: newPaletteName,
      colors,
    });
    navigate("/");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleSavePalette}
          >
            Save Palette
          </Button>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
