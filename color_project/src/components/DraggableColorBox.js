import DeleteIcon from "@mui/icons-material/Delete";
export default function DraggableColorBox({ color, name, deleteColor }) {
  const handleColorDelete = () => {
    deleteColor(name);
  };
  return (
    <div
      className="w-1/5 h-1/4 mx-0 my-auto inline-block relative cursor-pointer group -mb-[6.4px]"
      style={{ background: color }}
    >
      <div className="absolute w-full left-0 bottom-0 p-[10px] text-black tracking-wide uppercase text-xs flex justify-between">
        <span> {color}</span>
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
