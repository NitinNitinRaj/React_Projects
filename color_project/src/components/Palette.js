import ColorBox from "./ColorBox";
import "./Palette.css";
export default function Palette({ colors }) {
  const colorBoxes = colors.map((color) => <ColorBox background={color} />);

  return (
    <div className="Palette">
      {/* NavBar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
