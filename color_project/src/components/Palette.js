import { IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import ColorBox from "./ColorBox";
import Navbar from "./NavBar";
import "./Palette.css";

export default function Palette({ palette: { colors } }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);
  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox
        key={color.name}
        background={{ color: color[format], name: color.name }}
      />
    );
  });

  const handleChangeLevel = (level) => {
    setLevel(level);
  };

  const changeFormat = (e) => {
    setFormat(e.target.value);
    setOpen(true);
  };

  const action = (
    <React.Fragment>
      <IconButton color="inherit" key="close">
        <MdClose onClick={() => setOpen(false)} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="Palette">
      <Navbar
        changeLevel={handleChangeLevel}
        level={level}
        changeFormat={changeFormat}
        format={format}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()} </span>
        }
        action={action}
      />
    </div>
  );
}
