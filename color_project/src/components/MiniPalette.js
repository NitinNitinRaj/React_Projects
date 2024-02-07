export default function MiniPalette({ paletteName, emoji, colors }) {
  const miniColorBoxes = colors.map(({ name, color }) => (
    <div
      key={name}
      style={{ backgroundColor: color }}
      className="h-1/4 w-[20%] inline-block my-0 mx-auto relative -mb-[5.6px]"
    ></div>
  ));

  return (
    <div className="bg-white border border-solid border-black rounded p-2 relative overflow-hidden hover:cursor-pointer h-[150px]">
      <div className="bg-[#dae1e4] h-[105px] w-full rounded overflow-hidden">
        {miniColorBoxes}
      </div>
      <p className="flex justify-between items-center m-0 text-black text-sm pb-1 relative">
        {paletteName} <span className="ml-2 text-2xl">{emoji}</span>
      </p>
    </div>
  );
}
