import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chrome from "@uiw/react-color-chrome";
import { useState } from "react";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";

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

  const paletteIsFull = colors.length >= maxPalette;

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
      <PaletteFormNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        palettes={palettes}
        savePalette={savePalette}
        colors={colors}
      />
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
