import { ReactSortable } from "react-sortablejs";
import DraggableColorBox from "./DraggableColorBox";

export default function DraggableColorList({ colors, deleteColor, setColors }) {
  return (
    <ReactSortable
      tag="div"
      list={colors}
      setList={setColors}
      className="h-full"
    >
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.color}
          color={color.color}
          name={color.name}
          deleteColor={deleteColor}
        />
      ))}
    </ReactSortable>
  );
}
