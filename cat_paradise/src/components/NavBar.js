export default function NavBar({ origins, handleOriginClick, selectedOrigin }) {
  const renderedOrigins = origins.map((origin) => {
    const style = origin === selectedOrigin ? "font-semibold" : "font-normal";
    return (
      <li
        className={`pb-1 hover:font-semibold ${style}`}
        key={origin}
        onClick={() => handleOriginClick(origin)}
      >
        {origin}
      </li>
    );
  });
  return (
    <div className="min-w-48 border-2  overflow-y-auto relative">
      <p className="font-semibold text-center border-b-2 top-0 sticky bg-slate-100">
        Cat's Origins
      </p>
      <ul className="p-1">{renderedOrigins}</ul>
    </div>
  );
}
