import { Clear, Done } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { blue, red } from "@mui/material/colors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import bg from "./bg.svg";

export default function PaletteList({ palettes, deletePalette }) {
  const navigate = useNavigate();

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleDelete = () => {
    deletePalette(deleteId);
    handleClose();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="h-screen flex items-start justify-center overflow-y-auto "
    >
      <div className="xl:w-1/2  md:w-10/12 w-10/12 flex flex-col items-start flex-wrap">
        <nav className="flex w-full justify-between text-white items-center py-4">
          <h1 className="text-3xl">React Colors</h1>
          <Link to="/palette/new">Create Palette </Link>
        </nav>
        <TransitionGroup className="box-border w-full grid md:grid-cols-3 grid-cols-2 gap-[5%]">
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                handleClick={goToPalette}
                handleOpen={handleOpen}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        aria-labelledby="delete-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="delete-dialog-title">Delete this Palette.</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton onClick={handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <Done />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton onClick={handleClose}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <Clear />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
