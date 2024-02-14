import { Delete } from "@mui/icons-material";

export default function MiniPalette({
  paletteName,
  emoji,
  colors,
  handleClick,
  id,
  handleOpen,
}) {
  const miniColorBoxes = colors.map(({ name, color }) => (
    <div
      key={name}
      style={{ backgroundColor: color }}
      className="h-1/4 w-[20%] inline-block my-0 mx-auto relative -mb-[5.6px]"
    ></div>
  ));

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleOpen(id);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="bg-white border border-solid border-black rounded p-2 relative overflow-hidden hover:cursor-pointer h-[160px] group"
    >
      <Delete
        onClick={handleDeleteClick}
        style={{ transition: "all 0.3s ease-in-out" }}
        className="text-white bg-[#eb3d30] w-5 h-5 absolute right-0 top-0 p-0.5 z-10 opacity-0 group-hover:opacity-100"
      />

      <div className="bg-[#dae1e4] h-[105px] w-full rounded overflow-hidden">
        {miniColorBoxes}
      </div>
      <p className="flex justify-between items-center m-0 text-black text-sm pt-1 relative">
        {paletteName} <span className="ml-2 text-2xl">{emoji}</span>
      </p>
    </div>
  );
}
