export default function DraggableColorBox({ color }) {
  return (
    <div
      className="w-1/5 h-1/4 mx-0 my-auto inline-block relative cursor-pointer"
      style={{ background: color }}
    >
      {color}
    </div>
  );
}
