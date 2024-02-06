import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";
export default function Navbar({ level, changeLevel, changeFormat, format }) {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">ReactColorPicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            styles={{
              track: { backgroundColor: "transparent" },
              rail: { height: "8px" },
              handle: {
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none",
                width: "15px",
                height: "15px",
              },
            }}
            onChange={(level) => changeLevel(level)}
          />
        </div>
      </div>
      <div className="select-container">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select value={format} onChange={changeFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGB - rgba(255,255,255,1)</MenuItem>
          </Select>
        </FormControl>
      </div>
    </header>
  );
}
