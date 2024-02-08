import { useNavigate } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes }) {
  const navigate = useNavigate();

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <div className="bg-blue-500 h-screen flex items-start justify-center">
      <div className="w-1/2 flex flex-col items-start flex-wrap">
        <nav className="flex w-full justify-between text-white">
          <h1>React Colors</h1>
        </nav>
        <div className="box-border w-full grid grid-cols-3 gap-[5%]">
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.paletteName}
              {...palette}
              handleClick={goToPalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
}