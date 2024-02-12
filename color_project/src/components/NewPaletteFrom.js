import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chrome from "@uiw/react-color-chrome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DraggableColorList from "./DraggableColorList";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NewPaletteForm({ savePalette, palettes }) {
  const maxPalette = 20;
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#abcdef");
  const [colors, setColors] = useState(palettes[0].colors);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState();
  const [newPaletteName, setNewPaletteName] = useState("");
  const [formNameError, setFormNameError] = useState();

  const paletteIsFull = colors.length >= maxPalette;

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  const deleteColor = (colorToDelete) => {
    setColors(colors.filter(({ name }) => name !== colorToDelete));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    let allColors = palettes.map((p) => p.colors).flat();
    setColors([
      ...colors,
      allColors[Math.floor(Math.random() * allColors.length)],
    ]);
  };

  return (
    <Box sx={{ display: "flex" }}>
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
            Submit
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </div>
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ul style={{ height: "calc(100vh - 64px)" }}>
          <DraggableColorList
            colors={colors}
            deleteColor={deleteColor}
            setColors={setColors}
          />
        </ul>
      </Main>
    </Box>
  );
}
