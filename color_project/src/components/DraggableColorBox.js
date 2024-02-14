import DeleteIcon from "@mui/icons-material/Delete";
import chroma from "chroma-js";
export default function DraggableColorBox({ color, name, deleteColor }) {
  const handleColorDelete = () => {
    deleteColor(name);
  };
  const isDarkColor = chroma(color).luminance() <= 0.06;
  return (
    <div
      className="xl:w-1/5 xl:h-1/4 lg:w-1/4 lg:h-1/5 md:w-1/2 md:h-[10%] w-full h-[5.05%] mx-0 my-auto inline-block relative cursor-pointer group -mb-[6.4px] "
      style={{ background: color }}
    >
      <div className="absolute w-full left-0 bottom-0 md:p-[10px] px-[10px] text-black tracking-wide uppercase text-xs flex justify-between">
        <span className={isDarkColor ? "light-text" : undefined}> {color}</span>
        <span
          onClick={handleColorDelete}
          className=" text-[rgba(0,0,0,0.5)] group-hover:text-white group-hover:scale-150 transition-all duration-300 ease-in-out "
        >
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
}
