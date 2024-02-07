export default function MiniPalette({ paletteName, emoji, colors }) {
  return (
    <div className="bg-white border border-solid border-black rounded p-2 relative overflow-hidden hover:cursor-pointer">
      <div className="bg-gray-500"></div>
      <p className="flex justify-between items-center m-0 text-black pt-2 text-base relative">
        {paletteName} <span className="ml-2 text-2xl">{emoji}</span>
      </p>
    </div>
  );
}
