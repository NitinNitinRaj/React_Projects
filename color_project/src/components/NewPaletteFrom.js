import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import seedColors from "../utils/seedColors";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";

const drawerWidth = 350;

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
  width: "100%",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NewPaletteForm({ savePalette, palettes }) {
  const maxPalette = 20;
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(seedColors[0].colors);
  const paletteIsFull = colors.length >= maxPalette;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            display: "flex",
            alignItems: "center",
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
        <div className="w-[90%] flex flex-col justify-center items-center h-full">
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className="w-full">
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className="w-1/2"
            >
              Clear Palette
            </Button>
            <Button
              className="w-1/2"
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            colors={colors}
            setColors={setColors}
          />
        </div>
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
