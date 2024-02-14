import { Link, useNavigate } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import bg from "./bg.svg";

export default function PaletteList({ palettes, deletePalette }) {
  const navigate = useNavigate();

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen flex items-start justify-center overflow-y-auto "
    >
      <div className="xl:w-1/2  md:w-10/12 w-10/12 flex flex-col items-start flex-wrap">
        <nav className="flex w-full justify-between text-white items-center py-4">
          <h1 className="text-3xl">React Colors</h1>
          <Link to="/palette/new">Create Palette </Link>
        </nav>
        <div className="box-border w-full grid md:grid-cols-3 grid-cols-2 gap-[5%]">
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.paletteName}
              {...palette}
              handleClick={goToPalette}
              deletePalette={deletePalette}
            />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
