import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = 350;

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
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <div className="flex flex-row justify-between items-center">
          <div>
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
                Create New Palette
              </Typography>
            </Toolbar>
          </div>
          <div className="flex flex-row items-center">
            <PaletteMetaForm
              savePalette={savePalette}
              palettes={palettes}
              colors={colors}
            />
            <Link to="/" className="mx-2">
              <Button variant="contained" color="warning">
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </AppBar>
    </>
  );
}
