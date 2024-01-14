import CatCard from "./CatCard";

export default function Cats({ cats, selectedOrigin }) {
  const renderedCats = cats.map((cat) => <CatCard key={cat.name} cat={cat} />);
  return (
    <div className="overflow-auto border px-4">
      <p className="text-center text-2xl my-2">
        {selectedOrigin
          ? ` Cat breeds originated form ${selectedOrigin}`
          : "Cats"}
      </p>
      {renderedCats}
    </div>
  );
}
